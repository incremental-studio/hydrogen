import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, Route, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import shopifyConfig from '../shopify.config';
import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import Loading from './components/Loading';

function App({routes}) {
  return (
    <Suspense fallback={<Loading />}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <DefaultSeo />
        <Router>
          <FileRoutes routes={routes} />
          <Route path="*" page={<NotFound />} />
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

const routes = import.meta.globEager('./routes/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, {shopifyConfig, routes});
