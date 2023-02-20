import stores from '@/stores';
import Reading from '../Reading';
import Counter from './Counter';

const Global = ({ type }) => {
  const readingMode = stores.useCounter((state) => state.readingMode);

  return (
    <>
      {readingMode ? <Reading type={type} /> : null}
      {type !== 'about' ? <Counter /> : null}
    </>
  );
};
export default Global;
