import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'))
const Wishlist = lazy(() => import('../pages/Wishlist'))

const RoutesWrapper = () => (
  <Router>
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Suspense>
  </Router>
)

export default RoutesWrapper