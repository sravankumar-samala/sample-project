import { Route, Switch } from "react-router-dom";
import "./App.css";

const Home = () => <h1>This is Home page</h1>;

const About = () => <h1>This is About page</h1>;

const NotMatch = () => <h1>No match found</h1>;

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotMatch} />
    </Switch>
  );
}

export default App;
