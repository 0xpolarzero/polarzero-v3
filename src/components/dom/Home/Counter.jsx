import { useEffect } from 'react';
import { Divider } from 'antd';
import stores from '@/stores';
import hooks from '@/hooks';

const Counter = () => {
  const visibleProject = stores.useCounter((state) => state.visibleProject);
  // const isMobile = hooks.useWindowSize();
  const isMobile = false;

  useEffect(() => {
    console.log(visibleProject);
  }, [visibleProject]);

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
      ) : (
        '_scroll to explore'
      )}
      <a>_read in classic view</a>
    </div>
  );
};

export default Counter;
