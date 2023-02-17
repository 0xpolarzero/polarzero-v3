import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Suspense } from 'react';
import stores from '@/stores';

export default function Scene({ children, ...props }) {
  const theme = stores.useConfig((state) => state.theme);

  return (
    <Suspense fallback={null}>
      <Canvas {...props} orthographic camera={{ zoom: 80 }} dpr={[1, 1.5]}>
        {children}
        <Preload all />
      </Canvas>
    </Suspense>
  );
}
