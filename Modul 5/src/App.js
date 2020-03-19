import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
export default function AuthExample() {
  return  (
    <Router>
      <h2 className="judul">Onlen Shop</h2>
      <div>
        <AuthButton />
        <h3 className="kanan">
            <Link to="/private">Login</Link>
          </h3>
          <h2>Menu pilih barang</h2>
        <ul>
        <li>
            <Link to="/sepatu">Sepatu</Link>
          </li>
          <li >
            <Link to="/tas">Tas</Link>
          </li>
        </ul>
        <h4 className="kanan">
            <Link to="/biodata">Biodata</Link>
          </h4>
        <hr />

        <Switch>
          <Route path="/tas">
            <Tas />
          </Route>
          <Route path="/sepatu">
            <Sepatu />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
          <PrivateRoute path="/biodata">
            <ProtectedPageBiodata />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function Sepatu(){
  let { path , url} = useRouteMatch();
  return(
    <div>
      <h2>Sepatu</h2>
      <ul>
        <li>
        <Link to={`${url}/Sneakers pria, Boots pria, Pantofel pria `}>Sepatu Pria </Link>
        </li >
        <li>
        <Link to={`${url}/Sneakers wanita, Sepatu Heels wanita, Wedges wanita`}>Sepatu Wanita</Link>
        </li>
      </ul>
    
    <switch>
      <Route exact path={path}>
      </Route>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </switch>
    </div>
  );
}

function Tas(){
  let { path , url} = useRouteMatch();
  return(
    <div>
      <h2>Tas</h2>
      <ul>
        <li>
        <Link to={`${url}/Tas ransel pria, Tas selempang pria`}>Tas Pria </Link>
        </li >
        <li>
        <Link to={`${url}/Tas selempang wanita, Hand bag wanita`}>Tas Wanita</Link>
        </li>
      </ul>
    
    <switch>
      <Route exact path={path}>
      </Route>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </switch>
    </div>
  );
}

function Topic(){
  let {topicId} = useParams();
  return(
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}>
        Sign Out
      </button>
    </p>
  ) : (
      <p></p>
    );
}
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )}
    />
  );
}
function PublicPage() {
  return <h3>Public</h3>
}
function ProtectedPage() {
  return <h3>Halaman Private</h3>
}
function ProtectedPageBiodata(){
  return <h3>Hafiz Nur Javier, TI-3C, 08</h3>
  
}
function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p>Harus login untuk melihat halaman ini {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}