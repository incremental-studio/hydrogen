import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, Route, FileRoutes, ShopifyProvider, Seo} from '@shopify/hydrogen';
import {Suspense} from 'react';
import shopifyConfig from '../shopify.config';
import NotFound from './components/NotFound.server';
import Loading from './components/Loading';

function App({routes}) {
  return (
    <Suspense fallback={<Loading />}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <Seo type="page" data={seoData} />
        <Router>
          <FileRoutes routes={routes} />
          <Route path="*" page={<NotFound />} />
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

const routes = import.meta.globEager('./routes/**/*.server.[jt](s|sx)');

const seoData = {
  title: 'Incremental Studio',
  description: 'Works in progress. An independent product studio run by Benjamin Sehl.'
}

export default renderHydrogen(App, {shopifyConfig, routes});
