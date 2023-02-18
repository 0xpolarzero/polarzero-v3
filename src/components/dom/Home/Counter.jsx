import { useEffect } from 'react';
import { Divider } from 'antd';
import stores from '@/stores';
import hooks from '@/hooks';

const Counter = () => {
  const visibleProject = stores.useCounter((state) => state.visibleProject);
  const language = stores.useConfig((state) => state.language);
  const { isMobile } = hooks.useWindowSize();

  return (
    <div className='counter'>
      {isMobile ? null : visibleProject ? (
        <div>
          <span>
            {visibleProject.title}
            <Divider type='vertical' style={{ margin: '0 2rem' }} />
            {visibleProject.date}
          </span>
        </div>
      ) : language === 'en' ? (
        '_scroll to explore'
      ) : (
        '_défilez pour découvrir'
      )}
      <a>{language === 'en' ? '_classic view' : '_vue classique'}</a>
    </div>
  );
};

export default Counter;
