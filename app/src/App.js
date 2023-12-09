import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// -----Pages-----
import Home from "./components/Pages/Home" 
import Company from "./components/Pages/Company" 
import Contact from "./components/Pages/Contact" 
import NewProject from "./components/Pages/NewProject" 
// -----Pages-----


import Container from './components/Layout/Container'





function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contato</Link>
        <Link to="/Company">Company</Link>
        <Link to="/NewProject">Novo Projeto</Link>
      </div>

      <Switch>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newproject">
            <NewProject />
          </Route>
        </Container>
      </Switch>

      <p>Footer</p>
    </Router>
  );
}

export default App;
