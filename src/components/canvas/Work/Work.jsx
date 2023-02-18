import { useEffect, useRef, useState } from 'react';
import { Image } from 'next/image';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import {
  Image as ImageDrei,
  useIntersect,
  ScrollControls,
  Scroll,
  useScroll,
  Html,
} from '@react-three/drei';
import config from '@/data';
import Entity from './Entity';
import stores from '@/stores';
import { Tooltip } from 'antd';
import CounterHelper from './CounterHelper';

const Work = () => {
  const projects = config.work['en'];
  const theme = stores.useConfig((state) => state.theme);
  const { width, height } = useThree((state) => state.viewport);

  return (
    <ScrollControls
      /* infinite */ /* horizontal */ damping={6}
      pages={projects.length + 1}>
      {/* <Items /> */}
      <Entity />
      <CounterHelper projects={projects} />

      <Scroll>
        {width < 9.6
          ? null
          : projects.map((project, i) => {
              const scaleBase = [1 * (project.image.x / project.image.y), 1, 1];
              const scale = scaleBase.map((s) => s * (height * width) * 0.015);
              const offset =
                width > 20 ? (width - 20) / 2 : height > 10 ? 1 : 0;

              const position = [
                // (i % 2 === 0 ? -1 : 1) * (scale[0] * 1.5) +
                //   (i % 2 === 0 ? offset : -offset),
                (i % 2 === 0 ? -1 : 1) * (width / 3) +
                  (i % 2 === 0 ? offset : -offset),
                (i + 1) * -height,
                0,
              ];

              // Does project.image.url have a string, or is it an object with dark and light properties?
              const url =
                typeof project.image.url === 'string'
                  ? project.image.url
                  : project.image.url[theme];

              return (
                <ItemImage
                  key={i}
                  url={url}
                  link={project.image.link}
                  position={position}
                  scale={scale}
                />
              );
            })}
      </Scroll>
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
        <div className='work'>
          {projects.map((project, i) => (
            <Item
              key={i}
              data={project}
              positionY={(i + 2) * 100}
              positionX={i % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </Scroll>
    </ScrollControls>
  );
};

function Item({ data, positionY, positionX }) {
  const theme = stores.useConfig((state) => state.theme);
  const { width, height } = useThree((state) => state.viewport);
  const visible = useRef(false);
  const [hovered, hover] = useState(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));

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
      className={`work-item ${positionX} ${width < 9.6 ? 'mobile' : 'desktop'}`}
      style={{
        position: 'absolute',
        top: `${positionY}vh`,
        transform: `translate3d(0,-100%,0)`,
        width: '100%',
        height: '100vh',
      }}>
      <div
        className={`card ${hovered ? 'hovered' : ''}`}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        <div className='header'>
          <span className='title'>{data.title}</span>
          <span className='type'>{data.type.join(' - ')}</span>
        </div>
        <div className='description'>{data.description}</div>
        <div className='context'>{data.context}</div>
        <div className='links'>{data.links}</div>
        <div className='tech'>
          {data.tech.map((tech, i) => (
            <Tooltip title={tech.name} key={i} className='tech-item'>
              <a href={tech.link} target='_blank' rel='noreferrer'>
                <img
                  src={`/images/tech/${theme}/${tech.id}.svg`}
                  alt={tech.name}
                  height={30}
                />
              </a>
            </Tooltip>
          ))}
        </div>
        <div className='image'>{/* <Image url={data.image} /> */}</div>
        <div className='date'>{data.date}</div>
      </div>
    </div>
  );
}

const ItemImage = ({ url, link, position, scale }) => {
  const { width, height } = useThree((state) => state.viewport);
  const [hovered, hover] = useState(false);

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

  return (
    <group position={position}>
      <ImageDrei
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

export default Work;
