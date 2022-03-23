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
        <p>
          Interested?
          <a href={'https://twitter.com/benjaminsehl'} target="_blank">
            Let me know &rarr;
          </a>
        </p>
      )}
    </Layout>
  );
}

const content = {
  title: 'Office Hours',
  description:
    'An alternative to other meeting-booking services that’s focused on simplicity, and embraces constraints to keep your calendar a little more sane.',
};
