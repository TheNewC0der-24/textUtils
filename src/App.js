// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      {/* Props */}
      {/* <Navbar title="TextUtils" aboutText="About" /> */}
      <Router>
        <Navbar />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze below" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;

//~ JSX : JSX stands for JavaScript XML. It is simply a syntax
//~       extension of JavaScript. It allows us to directly write
//~       HTML in React (within JavaScript code). It is easy to
//~       create a template using JSX in React, but it is not a
//~       simple template language instead it comes with the full
//~       power of JavaScript.

//? Babel compiles JSX down to React.createElement() calls.
