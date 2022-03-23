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
  title: 'Margin',
  description:
    'A contemporary care company, we’re focused on quality and design above all else.',
  link: `https://margin.global`,
};
