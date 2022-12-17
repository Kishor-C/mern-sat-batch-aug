import logo from './logo.svg';
import './App.css';
import Hello, { User, Demo } from './components/Greet';

function App() {
  return (<div>
    <h1>Root component</h1>
    <Hello title = "React toolkit" />
    <User fullname = "Sachin Tendulkar"/>
    <Demo />
  </div>)
}

export default App;
