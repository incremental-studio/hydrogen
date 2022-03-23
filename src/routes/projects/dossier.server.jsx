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
  title: 'Dossier',
  description:
    'I find link-in-bio tools and website builders unecessarily complex. I feel like, when it comes to personal websites, it should be as simple as writing a Google Doc. Theming is usually pretty inelegant and requires a lot of manual tweaking … at least for me, if it’s not dead simple, I’d rather just write code.'
};
