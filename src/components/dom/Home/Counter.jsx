import { useEffect } from 'react';
import { Divider } from 'antd';
import { isMobile } from 'react-device-detect';
import stores from '@/stores';

const Counter = () => {
  const visibleProject = stores.useCounter((state) => state.visibleProject);

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
