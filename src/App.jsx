import { Route, Routes } from "react-router-dom";
import "./App.css";

const Home = () => <h1>This is Home page</h1>;

const About = () => <h1>This is About page</h1>;

const NotMatch = () => <h1>No match found</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route element={<NotMatch />} />
    </Routes>
  );
}

export default App;
