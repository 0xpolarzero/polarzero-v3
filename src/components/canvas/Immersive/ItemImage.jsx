import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useIntersect, Image } from '@react-three/drei';
import stores from '@/stores';

const ItemImage = ({ url, link, position, scale, bgType }) => {
  const { setHideControls, theme, updateTheme } = stores.useConfig((state) => ({
    setHideControls: state.setHideControls,
    theme: state.theme,
    updateTheme: state.updateTheme,
  }));
  const { height } = useThree((state) => state.viewport);
  const [hovered, hover] = useState(false);
  const [rememberTheme, setRememberTheme] = useState(theme);

  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));

  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta,
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta,
    );
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      hovered ? 0 : 1,
      4,
      delta,
    );
  });

  useEffect(() => {
    if (hovered) {
      // Update bg
      document.querySelector(
        '.container',
      ).style.backgroundImage = `url(${url})`;
      document.querySelector('.container').style.backgroundSize = 'cover';
      document.querySelector('.container').style.backgroundPosition = 'center';
      document.querySelector('.container').style.backgroundRepeat = 'no-repeat';
      // Remember theme
      setRememberTheme(theme);
      // Update theme
      if (bgType && bgType !== theme) updateTheme(bgType);
      // Hide nav & counter
      setHideControls(true);
    } else {
      document.querySelector('.container').style.backgroundImage = '';
      if (rememberTheme !== theme) updateTheme(rememberTheme);
      setHideControls(false);
    }
  }, [hovered]);

  return (
    <group position={position}>
      <Image
        ref={ref}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onClick={() => window.open(link, '_blank')}
        scale={scale}
        url={url}
        style={{ zIndex: hovered ? 100000 : 0 }}
      />
    </group>
  );
};

export default ItemImage;
