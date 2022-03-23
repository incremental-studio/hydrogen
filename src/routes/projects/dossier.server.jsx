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
  title: 'Dossier',
  description:
    'I find link-in-bio tools and website builders unecessarily complex. I feel like, when it comes to personal websites, it should be as simple as writing a Google Doc. Theming is usually pretty inelegant and requires a lot of manual tweaking … at least for me, if it’s not dead simple, I’d rather just write code.'
};
