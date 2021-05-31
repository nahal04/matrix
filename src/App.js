import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import AddTodo from './components/AddTodo';
import DialogBox from './components/DialogBox';
import Header from './components/Header';
import Failed from './pages/Failed';
import Finished from './pages/Finished';
import Important from './pages/Important';
import Perfomance from './pages/Perfomance';
import Todo from './pages/Todo';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState(null);
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <AddTodo />
          <Todo showModal={setShowModal} modalProps={setModalProps} />
        </Route>
        <Route path="/importants">
          <Important showModal={setShowModal} modalProps={setModalProps} />
        </Route>
        <Route path="/finished">
          <Finished showModal={setShowModal} modalProps={setModalProps} />
        </Route>
        <Route path="/failed">
          <Failed showModal={setShowModal} modalProps={setModalProps} />
        </Route>
        <Route path="/perfomance">
          <Perfomance />
        </Route>
      </Switch>
      <DialogBox show={showModal} setShow={setShowModal} {...modalProps} />
    </div>
  );
}

export default App;
