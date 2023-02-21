import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import stores from '@/stores';

const CounterHelper = ({ content }) => {
  const { setVisibleProject, setScrollPos } = stores.useCounter((state) => ({
    setVisibleProject: state.setVisibleProject,
    setScrollPos: state.setScrollPos,
  }));
  const data = useScroll();

  useFrame(() => {
    setScrollPos(data.offset);

    const index = Math.round(data.offset * (content.length + 1));
    const project =
      index === 0 || index === content.length + 1 ? null : content[index - 1];
    setVisibleProject(project);
  });

  return null;
};

export default CounterHelper;
