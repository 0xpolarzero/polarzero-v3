import { isMobile } from 'react-device-detect';
import Counter from './Counter';

const Home = () => {
  if (isMobile) return null;
  return <Counter />;
};
export default Home;
