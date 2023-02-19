import Counter from './Counter';

const Home = ({ displayCounter = true }) => {
  if (displayCounter) return <Counter />;

  return null;
};
export default Home;
