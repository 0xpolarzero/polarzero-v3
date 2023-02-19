import Work from './Work';
import About from './About';

const Experience = ({ ...props }) => {
  if (props.type === 'about') return <About {...props} />;
  return <Work {...props} />;
};

export default Experience;
