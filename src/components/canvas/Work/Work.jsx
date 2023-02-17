import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {
  useIntersect,
  Image,
  ScrollControls,
  Scroll,
  useScroll,
  Html,
} from '@react-three/drei';
import config from '@/data';
import Entity from './Entity';
import stores from '@/stores';

const Work = () => {
  const projects = config.work['en'];
  const { width, height } = useThree((state) => state.viewport);

  return (
    <ScrollControls
      /* infinite */ /* horizontal */ damping={6}
      pages={projects.length + 1}>
      {/* <Items /> */}
      <Entity />
      <CounterHelper projects={projects} />
      <Scroll html style={{ width: '100%' }}>
        <h1
          style={{
            position: 'absolute',
            top: `90vh`,
            right: '20vw',
            fontSize: `${width / 4}rem`,
            transform: `translate3d(0,-100%,0)`,
          }}>
          polarzero
        </h1>
        {projects.map((project, i) => (
          <Item
            key={i}
            data={project}
            positionY={(i + 2) * 100}
            positionX={i % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </Scroll>
    </ScrollControls>
  );
};

const CounterHelper = ({ projects }) => {
  // Detect the visible project based on scroll position
  const setVisibleProject = stores.useCounter(
    (state) => state.setVisibleProject,
  );
  const data = useScroll();

  useFrame(() => {
    const index = Math.round(data.offset * projects.length);
    const project = index === 0 ? null : projects[index - 1];
    setVisibleProject(project);
  });

  return null;
};

function Item({ data, positionY, positionX }) {
  const visible = useRef(false);
  const [hovered, hover] = useState(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { width, height } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    ref.current.style.transform = `translate3d(0,${THREE.MathUtils.damp(
      ref.current.style.transform,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta,
    )}px,0)`;
  });

  return (
    <div
      ref={ref}
      className={`work-item ${positionX}`}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      style={{
        position: 'absolute',
        top: `${positionY}vh`,
        transform: `translate3d(0,-100%,0)`,
        width: '100%',
        height: '100vh',
      }}>
      <div className='title'>{data.title}</div>
      <div className='type'>{data.type}</div>
      <div className='description'>{data.description}</div>
      <div className='context'>{data.context}</div>
      <div className='link'>{data.link}</div>
      <div className='image'>{/* <Image url={data.image} /> */}</div>
      <div className='date'>{data.date}</div>
    </div>
  );
}

export default Work;
