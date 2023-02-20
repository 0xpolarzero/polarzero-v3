import { useEffect } from 'react';
import { Divider } from 'antd';
import stores from '@/stores';
import hooks from '@/hooks';

const Counter = () => {
  const { language, hideControls } = stores.useConfig((state) => ({
    language: state.language,
    hideControls: state.hideControls,
  }));
  const { activePage, visibleProject, readingMode, toggleReadingMode } =
    stores.useCounter((state) => ({
      activePage: state.activePage,
      visibleProject: state.visibleProject,
      readingMode: state.readingMode,
      toggleReadingMode: state.toggleReadingMode,
    }));
  const { isMobile } = hooks.useWindowSize();

  return (
    <div className={`counter ${hideControls ? 'hidden' : ''}`}>
      {isMobile ? (
        `_${activePage}`
      ) : readingMode ? (
        <div />
      ) : visibleProject ? (
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
      <a onClick={toggleReadingMode}>
        {readingMode
          ? language === 'en'
            ? '_immersive view'
            : '_vue immersive'
          : language === 'en'
          ? '_reading mode'
          : '_mode lecture'}
      </a>
    </div>
  );
};

export default Counter;
