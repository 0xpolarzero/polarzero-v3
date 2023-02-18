import dynamic from 'next/dynamic';
import Home from '@/components/dom/Home';

const Experience = dynamic(() => import('@/components/canvas/Experience'), {
  ssr: false,
});

// Dom components go here
export default function Page(props) {
  return <Home />;
}

Page.canvas = (props) => <Experience type='education' />;

export async function getStaticProps() {
  return { props: { title: 'polarzero' } };
}
