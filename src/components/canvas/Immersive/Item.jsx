import { useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { useIntersect } from '@react-three/drei';
import { Tooltip } from 'antd';
import stores from '@/stores';

const Item = ({ data, positionY, positionX }) => {
  const theme = stores.useConfig((state) => state.theme);
  const { width } = useThree((state) => state.viewport);
  const visible = useRef(false);
  const [hovered, hover] = useState(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));

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
          <span className='type'>{data.type.join(' | ')}</span>
        </div>
        <div className='description'>{data.description}</div>
        <div className='context'>{data.context}</div>
        <div className='links'>{data.links}</div>
        <div className='tech'>
          {data.tech.map((tech, i) => (
            <Tooltip title={tech.name} key={i} className='tech-item'>
              <a href={tech.link} target='_blank' rel='noreferrer'>
                <img
                  src={`/img/tech/${theme}/${tech.id}.svg`}
                  alt={tech.name}
                  height={30}
                />
              </a>
            </Tooltip>
          ))}
        </div>
        <div className='date'>{data.date}</div>
      </div>
    </div>
  );
};

export default Item;
