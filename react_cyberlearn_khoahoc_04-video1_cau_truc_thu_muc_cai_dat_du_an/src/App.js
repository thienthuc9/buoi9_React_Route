import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Error from './pages/Erro/Error';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Switch>
      {/* Để nhiều hơn 1 thẻ */}
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/home' component={Home}></Route>
    <Route exact path='/profile' component={Profile}></Route>

    <Route exact path='/detail/:id' component={Detail}></Route>
    <Route exact path='' component={Error}></Route>

    </Switch>
  


    </BrowserRouter>
   
  );
}

export default App;
