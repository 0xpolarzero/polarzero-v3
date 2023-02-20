import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useIntersect, Image } from '@react-three/drei';
import { animated, useSpring } from '@react-spring/three';
import stores from '@/stores';

const ItemImage = ({ url, link, position, scale: baseScale, bgType }) => {
  const { setHideControls, theme, updateTheme } = stores.useConfig((state) => ({
    setHideControls: state.setHideControls,
    theme: state.theme,
    updateTheme: state.updateTheme,
  }));
  const { width, height } = useThree((state) => state.viewport);
  const [hovered, hover] = useState(false);
  const [rememberTheme, setRememberTheme] = useState(theme);

  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));

  const { scale } = useSpring({
    scale: hovered ? [2, 2, 2] : [1, 1, 1],
    config: { mass: 1, tension: 200, friction: 20 },
  });

  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta,
    );
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      hovered ? 0 : 1,
      4,
      delta,
    );
    ref.current.material.opacity = THREE.MathUtils.damp(
      ref.current.material.opacity,
      hovered ? 1 : 0.5,
      4,
      delta,
    );

    // Scale
    // Calculate the max scale multiplier so it fits in the viewport
    const maxScaleX = (width - 1) / 2;
    const maxScaleY = (height - 1) / 2;
    const scaleX = maxScaleX / baseScale[0];
    const scaleY = maxScaleY / baseScale[1];
    const scaleMult = Math.min(scaleX, scaleY);
    // Set the scale
    ref.current.scale.x = THREE.MathUtils.damp(
      ref.current.scale.x,
      hovered ? baseScale[0] * scaleMult : baseScale[0],
      4,
      delta,
    );
    ref.current.scale.y = THREE.MathUtils.damp(
      ref.current.scale.y,
      hovered ? baseScale[1] * scaleMult : baseScale[1],
      4,
      delta,
    );
    // Center the image
    ref.current.position.x = THREE.MathUtils.damp(
      ref.current.position.x,
      hovered ? -position[0] / 2 : 0,
      4,
      delta,
    );
  });

  useEffect(() => {
    if (hovered) {
      setRememberTheme(theme);
      if (bgType && bgType !== theme) updateTheme(bgType);
      setHideControls(true);
    } else {
      if (rememberTheme !== theme) updateTheme(rememberTheme);
      setHideControls(false);
    }
  }, [hovered]);

  return (
    <animated.group position={position} scale={scale}>
      <Image
        ref={ref}
        alt={`image from ${url}`}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onClick={() => window.open(link, '_blank')}
        scale={baseScale}
        url={url}
        transparent
      />
    </animated.group>
  );
};

export default ItemImage;
