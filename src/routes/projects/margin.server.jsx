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
  title: 'Margin',
  description:
    'A contemporary care company, we’re focused on quality and design above all else.',
  link: `https://margin.global`,
};
