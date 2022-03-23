import Layout from '../../components/Layout.server';
import ProjectContent from '../../components/ProjectContent.server';

export default function Project() {
  return (
    <Layout>
      <ProjectContent content={content} />
    </Layout>
  );
}


const content = {
  title: 'Office Hours',
  description:
    'An alternative to other meeting-booking services that’s focused on simplicity, and embraces constraints to keep your calendar a little more sane.',
};
