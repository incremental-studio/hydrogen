import Layout from '../../components/Layout.server';

export default function Project() {
  return (
    <Layout>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      {content?.link ? (
        <a href={content.link} target="_blank">
          Visit &rarr;
        </a>
      ) : (
        <a href={'https://twitter.com/benjaminsehl'} target="_blank">
          Interested? Let me know &rarr;
        </a>
      )}
    </Layout>
  );
}

const content = {
  title: 'Bento',
  description:
    'A simple dashboard that helps you stay focused. Your up-next meetings, latest emails, tasks from services like GitHub and Asana, and a simple notepad to jot your notes down.'
};
