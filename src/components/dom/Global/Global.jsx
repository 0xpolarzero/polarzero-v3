import stores from '@/stores';
import Reading from '../Reading';
import Counter from './Counter';

const Global = ({ type }) => {
  const readingMode = stores.useCounter((state) => state.readingMode);

  if (type === 'about') return null;

  return (
    <>
      {readingMode ? <Reading type={type} /> : null}
      <Counter />
      <div className='image-container'></div>
    </>
  );
};
export default Global;
