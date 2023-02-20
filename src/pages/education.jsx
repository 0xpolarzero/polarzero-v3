import dynamic from 'next/dynamic';
import Global from '@/components/dom/Global';

const Experience = dynamic(() => import('@/components/canvas/Experience'), {
  ssr: false,
});

// Dom components go here
export default function Page(props) {
  return <Global type='education' />;
}

Page.canvas = (props) => <Experience type='education' />;

export async function getStaticProps() {
  return { props: { title: 'polarzero' } };
}
