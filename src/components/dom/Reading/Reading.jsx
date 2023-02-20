import { useEffect, useState } from 'react';
import Item from './Item';
import stores from '@/stores';
import hooks from '@/hooks';
import config from '@/data';

const Reading = ({ type }) => {
  const { theme, language } = stores.useConfig((state) => ({
    theme: state.theme,
    language: state.language,
  }));
  const { isMobile } = hooks.useWindowSize();
  const [content, setContent] = useState(config[type][language]);

  useEffect(() => {
    setContent(config[type][language]);
  }, [language, type]);

  return (
    <div className={`reading ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className='wrapper'>
        {content.map((item, i) => (
          <Item key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Reading;
