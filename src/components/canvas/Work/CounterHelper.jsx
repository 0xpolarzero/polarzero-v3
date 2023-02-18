import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import stores from '@/stores';

const CounterHelper = ({ content }) => {
  // Detect the visible project based on scroll position
  const setVisibleProject = stores.useCounter(
    (state) => state.setVisibleProject,
  );
  const data = useScroll();

  useFrame(() => {
    const index = Math.round(data.offset * content.length);
    const project = index === 0 ? null : content[index - 1];
    setVisibleProject(project);
  });

  return null;
};

export default CounterHelper;
