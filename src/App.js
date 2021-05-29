import { Route, Switch } from 'react-router';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Finished from './pages/Finished';
import Important from './pages/Important';
import Todo from './pages/Todo';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <AddTodo />
          <Todo />
        </Route>
        <Route path="/importants">
          <Important />
        </Route>
        <Route path="/finished">
          <Finished />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
