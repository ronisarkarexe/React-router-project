import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SportsLeaguesList from './components/SportsLeaguesList/SportsLeaguesList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SportsLeaguesInfo from './components/SportsLeaguesInfo/SportsLeaguesInfo';




function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <SportsLeaguesList></SportsLeaguesList>
        </Route>
        <Route path="/Leagues/:id">
          <SportsLeaguesInfo></SportsLeaguesInfo>
        </Route>
        <Route exact path="/">
          <SportsLeaguesList></SportsLeaguesList>
        </Route>
        <Route path="*">
          <h2 className="text-center mt-5">404- Not Found</h2>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
