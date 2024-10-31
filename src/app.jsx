import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './index/login';
import { Book } from './Book/Book';
import { Main } from './Main/Main';
import { About } from './About/About';
//import { AuthState } from './index/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
/*
export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Bookmarked Theories<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='login'>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='Main'>
                    Main
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='About'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
      </div>
    </BrowserRouter>
  );
}
*/

export default function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">Bookmarked Theories</div>
            <menu className="navbar-nav">
              <li className='nav-item'>
                <NavLink className="nav-link" to="">
                  Login
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to="About">
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>
    
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/Main" element={<Main />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    
        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Owner's Github</span>
            <a className='text-reset' href="https://github.com/abwilson2002/startup">Austin Wilson's Startup</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Page Not Found</main>;
}