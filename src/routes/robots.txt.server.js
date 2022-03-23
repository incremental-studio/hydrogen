/**
 * This API endpoint generates a robots.txt file. Use this to control
 * access to your resources from SEO crawlers.
 * Learn more: https://developers.google.com/search/docs/advanced/robots/create-robots-txt
 */

export default function RobotsTxt({request, response}) {
  response.doNotStream();
  response.headers.set('content-type', 'text/plain');

  const url = new URL(request.url);

  return response.send(robotsTxtData({url: url.origin}));
}

function robotsTxtData({url}) {
  return `
User-agent: *

User-agent: Pinterest
Crawl-delay: 1
`;
}