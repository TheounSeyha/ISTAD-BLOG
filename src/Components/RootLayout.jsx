
import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import Nav_bar from './Navbar';
import Footer from './Footer';

export default function RootLayout() {
  const location = useLocation();
  const isAccountPage = location.pathname === '/account';

  return (
    <>
      {!isAccountPage && <Nav_bar />}

      <Outlet />

      {!isAccountPage && <Footer />}
    </>
  );
}

