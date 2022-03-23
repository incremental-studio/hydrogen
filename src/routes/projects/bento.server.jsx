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
  title: 'Bento',
  description:
    'A simple dashboard that helps you stay focused. Your up-next meetings, latest emails, tasks from services like GitHub and Asana, and a simple notepad to jot your notes down.'
};
