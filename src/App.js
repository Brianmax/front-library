import logo from './logo.svg';
import './App.css';
import { Login } from './login';
import { Header } from './header';
import { Left_bar } from './left-bar';
import { Right_side } from './rigth-side';
function App() {
  return (
    <div className="main-container">
      <Left_bar></Left_bar>
      <Right_side></Right_side>
    </div>
  );
}

export default App;
