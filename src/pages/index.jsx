import dynamic from 'next/dynamic';
import Home from '@/components/dom/Home';

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Experience = dynamic(() => import('@/components/canvas/Experience'), {
  ssr: false,
});

// Dom components go here
export default function Page(props) {
  return <Home />;
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Experience />;

export async function getStaticProps() {
  return { props: { title: 'polarzero' } };
}
