import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import stores from '@/stores';

import vertexShaders from './shaders/vertexShaders';
import fragmentShader from './shaders/fragmentShader';

const Entity = ({ type }) => {
  const getAnalyserData = stores.useAudio((state) => state.getAnalyserData);
  const theme = stores.useConfig((state) => state.theme);
  const { scrollPos, readingMode } = stores.useCounter((state) => ({
    scrollPos: state.scrollPos,
    readingMode: state.readingMode,
  }));
  const ref = useRef(null);

  const vertexShader = vertexShaders[type];

  const count = 1000;
  const radius = 2;
  const colors = useMemo(() => {
    return {
      dark: [
        [1.0, 1.0, 1.0],
        [0.91, 0.91, 0.91],
      ],
      light: [
        [0.06, 0.06, 0.06],
        [0.02, 0.02, 0.02],
      ],
    };
  }, []);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const d = Math.sqrt(Math.random() - 0.5) * radius;
      const th = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      let x = d * Math.sin(th) * Math.cos(phi);
      let y = d * Math.sin(th) * Math.sin(phi);
      let z = d * Math.cos(th);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count, radius]);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uRadius: {
        value: radius,
      },
      uColorA: new THREE.Uniform(new THREE.Vector3(...colors['dark'][0])),
      uColorB: new THREE.Uniform(new THREE.Vector3(...colors['dark'][1])),
      uGain: {
        value: 1.0,
      },
      uBrighten: {
        value: 1.0,
      },
    }),
    [radius, colors],
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;

    // Time
    ref.current.material.uniforms.uTime.value = clock.getElapsedTime();

    // Scroll
    // ref.current.position.y = readingMode ? 0 : scrollPos * 2;
    // scrollPos being between 0 and 1, it will reach 2 at the end of the page
    // maybe instead reach 2 at the middle of the page, then go back to 0
    // when the page is scrolled to the end
    ref.current.position.y = readingMode ? 0 : Math.sin(scrollPos * Math.PI);

    // Modifications based on audio
    const analyserData = getAnalyserData();
    const gainMultiplier = 1 + analyserData?.gain * 5 || 1;
    const freqMultiplier = 1 + analyserData?.frequency / 10000 || 1;
    // Modify scale based on the gain
    ref.current.material.uniforms.uGain.value = gainMultiplier;
    // as well as the brightness
    ref.current.material.uniforms.uBrighten.value = freqMultiplier;
  });

  useEffect(() => {
    if (!ref.current) return;
    ref.current.material.uniforms.uColorA.value = new THREE.Vector3(
      ...colors[theme][0],
    );
    ref.current.material.uniforms.uColorB.value = new THREE.Vector3(
      ...colors[theme][1],
    );
  }, [theme, colors]);

  return (
    <points ref={ref} scale={1.5}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default Entity;
