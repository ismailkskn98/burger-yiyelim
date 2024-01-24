import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// Pages
import Home from '../pages/Home';
import About from '../pages/About';
const Menu = lazy(() => import('../pages/Menu'));
import Contact from '../pages/Contact';
const NotFound = lazy(() => import('../pages/NotFound'));
// Components
import PageLoading from './PageLoading';

function RouterContainer() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/menu"
          element={
            <Suspense fallback={<PageLoading pageName="Menu" />}>
              <Menu />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoading pageName="Not Found" />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default RouterContainer;
