import store2 from 'store2';
import Link from 'next/link';
import Router from 'next/router';
import './style.scss';

const Header = () => {
  const userName = store2.session.get('username');
  const logOutHandler = (e) => {
    e.preventDefault();
    if (userName) {
      store2.session.clearAll();
      Router.replace('/');
    } else {
      Router.replace('/signin');
    }
  };

  return (
    <div className="Navbar_root__2kbI9">
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 :py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className="Navbar_logo__26S5Y">
                <svg width="32px" height="32px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">
                  <defs>
                      <radialGradient cx="50.1407407%" cy="50.0030864%" fx="50.1407407%" fy="50.0030864%" r="50.1188272%" id="radialGradient-1">
                          <stop stopColor="#797979" offset="0%"></stop>
                          <stop stopColor="#4C4C4C" offset="100%"></stop>
                      </radialGradient>
                  </defs>
                  <g>
                    <circle fill="#F5BB60" cx="127.949264" cy="128.603432" r="127.396568"></circle>
                    <circle fill="#E86F32" cx="114.960894" cy="115.615062" r="114.684546"></circle>
                    <circle fill="#E53D42" cx="130.160051" cy="100.415906" r="99.485389"></circle>
                    <circle fill="#BFD141" cx="138.174151" cy="108.430006" r="91.4712882"></circle>
                    <circle fill="#6DB64C" cx="131.541792" cy="115.062366" r="84.8389289"></circle>
                    <circle fill="#AFDBE7" cx="118.000725" cy="101.797647" r="71.2978621"></circle>
                    <circle fill="#57BADF" cx="129.607354" cy="89.91467" r="59.6912334"></circle>
                    <circle fill="#02B2D6" cx="137.068758" cy="97.3760742" r="52.5061775"></circle>
                    <circle fill="url(#radialGradient-1)" cx="129.331006" cy="104.837478" r="44.768425"></circle>
                    <circle fill="#231F20" cx="129.331006" cy="104.837478" r="44.768425"></circle>
                    <path d="M141.088096,98.9711966 C145.526792,100.962869 151.64783,96.9551361 154.759818,90.0196748 C157.871806,83.0842136 156.796297,75.847342 152.357602,73.8556697 C147.918907,71.8639974 141.797868,75.8717302 138.68588,82.8071914 C135.573892,89.7426526 136.649401,96.9795243 141.088096,98.9711966 L141.088096,98.9711966 Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              </a>
            </Link>
            <nav className="space-x-4 ml-6" style={{ display: 'flex' }}>
              <Link href="/offers">
                <a id="offers" className="Navbar_link__3Blki"><strong>Offers</strong></a>
              </Link>
              <Link href="/orders">
                <a id="orders" className="Navbar_link__3Blki"><strong>Orders</strong></a>
              </Link>
              <Link href="/favourites">
                <a id="favourites" className="Navbar_link__3Blki">
                  <strong>Favourites</strong>
                </a>
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end align-center space-x-8">
            {userName ? (<span className="username">{userName}</span>) : ''}
            <nav className="UserNav_root__343id align-center pt-1">
              <Link href="/offers">
                <a onClick={logOutHandler} className="Navbar_link__3Blki logout-link" id={userName ? "logout" : "signin"}>{userName ? 'Logout' : 'Sign In'}</a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
