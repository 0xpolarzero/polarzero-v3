import Entity from './Entity';
import Immersive from './Immersive';
import About from './About';
import stores from '@/stores';

const Experience = ({ ...props }) => {
  const readingMode = stores.useCounter((state) => state.readingMode);

  if (props.type === 'about') return <About {...props} />;

  return (
    <>
      <Entity {...props} />
      {readingMode ? null : <Immersive {...props} />}
    </>
  );
};

export default Experience;
