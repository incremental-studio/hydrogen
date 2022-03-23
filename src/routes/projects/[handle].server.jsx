import {useRouteParams} from '@shopify/hydrogen';
import Layout from '../../components/Layout.server';
import ProjectContent from '../../components/ProjectContent.server';

export default function Project() {
  const {handle} = useRouteParams();

  const content = data[handle];

  return <Layout>{content && <ProjectContent content={content} />}</Layout>;
}

const data = {
  bento: {
    title: 'Bento',
    description:
      'A simple dashboard that helps you stay focused. Your up-next meetings, latest emails, tasks from services like GitHub and Asana, and a simple notepad to jot your notes down.',
  },
  dossier: {
    title: 'Dossier',
    description:
      'I find link-in-bio tools and website builders unecessarily complex. I feel like, when it comes to personal websites, it should be as simple as writing a Google Doc. Theming is usually pretty inelegant and requires a lot of manual tweaking … at least for me, if it’s not dead simple, I’d rather just write code.',
  },
  margin: {
    title: 'Margin',
    description:
      'A contemporary care company, we’re focused on quality and design above all else.',
    link: 'https://margin.global',
  },
  'office-hours': {
    title: 'Office Hours',
    description:
      'An alternative to other meeting-booking services that’s focused on simplicity, and embraces constraints to keep your calendar a little more sane.',
  },
};
