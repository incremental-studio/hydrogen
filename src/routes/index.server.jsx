import {Link} from '@shopify/hydrogen';
import Layout from '../components/Layout.server';

export default function Index() {
  return (
    <Layout>
      <p>
        An independent product studio housing the side projects of{' '}
        <a href="https://sehl.ca">Benjamin&nbsp;Sehl</a>.
      </p>
      <p>Particular projects in development include:</p>
      <ul>
        <li>
          <Link to="/projects/margin">Margin</Link>: A contemporary care company
        </li>
        <li>
          <Link to="/projects/dossier">Dossier</Link>: A personal web page
          builder
        </li>
        <li>
          <Link to="/projects/bento">Bento</Link>: A personal productivity tool
          and dashboard
        </li>
        <li>
          <Link to="/projects/office-hours">Office Hours</Link>: A calendar
          scheduling service
        </li>
      </ul>
      <p>
        Some of these projects have or will become full fledged companies,
        others may never see the light of day. My main goal is to learn by
        doing. I have the full intention of bringing each of these ideas to
        life, but I'm first prioritizing my family, and my day job at&nbsp;
        <a href="https://shopify.dev/hydrogen">Shopify</a>.
      </p>
      <p>
        I’m also thinking about writing a blog, where I’d post about the things
        I’m learning and resources I’ve found most helpful. If you think that
        would be interesting, please{' '}
        <a href="https://twitter.com/benjaminsehl">let&nbsp;me&nbsp;know</a>.
      </p>
      <p>
        I’m always excited by new ideas, but am already strapped for time. If
        you’re a great developer that cares a lot about craft, I’d be happy to
        talk about collaborating.
      </p>
    </Layout>
  );
}
