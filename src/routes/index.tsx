import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@app/components/Main'
import Loading from '@app/components/Loading'
const Home = lazy(() => import('@app/pages/Home'))
const Wishlist = lazy(() => import('@app/pages/Wishlist'))

const RoutesWrapper = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Layout>
    </Suspense>
  </Router>
)

export default RoutesWrapper