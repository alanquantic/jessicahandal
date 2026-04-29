import MirroredPage from './pages/jessicahandal/MirroredPage.jsx'
import ProductPage from './pages/jessicahandal/ProductPage.jsx'
import StaticMirroredPage, { staticPageSlugs } from './pages/jessicahandal/StaticMirroredPage.jsx'
import { getRouteKey } from './pages/jessicahandal/pageData.js'

function App() {
  const routeKey = getRouteKey(window.location.pathname)

  if (routeKey === 'home') {
    return <MirroredPage />
  }

  if (staticPageSlugs.has(routeKey)) {
    return <StaticMirroredPage slug={routeKey} />
  }

  return <ProductPage slug={routeKey} />
}

export default App
