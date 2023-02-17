import { useEffect } from 'react';
import stores from '@/stores';
import { Divider } from 'antd';

const Counter = () => {
  const visibleProject = stores.useCounter((state) => state.visibleProject);

  useEffect(() => {
    console.log(visibleProject);
  }, [visibleProject]);

  return (
    <div className='counter'>
      <div>
        {visibleProject ? (
          <span>
            {visibleProject.title}
            <Divider type='vertical' style={{ margin: '0 2rem' }} />
            {visibleProject.date}
          </span>
        ) : (
          '_scroll to explore'
        )}
      </div>
      <a>_read in classic view</a>
    </div>
  );
};

export default Counter;
