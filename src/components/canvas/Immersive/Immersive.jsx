import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import Item from './Item';
import ItemImage from './ItemImage';
import CounterHelper from '../CounterHelper';
import config from '@/data';
import stores from '@/stores';

const Immersive = ({ type }) => {
  const { theme, language } = stores.useConfig((state) => ({
    theme: state.theme,
    language: state.language,
  }));
  const { width, height } = useThree((state) => state.viewport);
  const [content, setContent] = useState(config[type][language]);

  useEffect(() => {
    setContent(config[type][language]);
  }, [language, type]);

  return (
    <ScrollControls damping={6} pages={content.length + 1}>
      <CounterHelper content={content} />

      {width < 9.6 || type === 'education' ? null : (
        <Scroll>
          {content.map((project, i) => {
            const scaleBase = [1 * (project.image.x / project.image.y), 1, 1];
            const scale = scaleBase.map((s) => s * (height * width) * 0.015);
            const offset = width > 20 ? (width - 20) / 2 : height > 10 ? 1 : 0;

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
                bgType={project.image.bgType}
              />
            );
          })}
        </Scroll>
      )}
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
          {content.map((project, i) => (
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

export default Immersive;
