import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TodoItem from "../components/TodoItem";
import TodoContext from "../store/todo-context";


const Todo = props => {

  const todoCtx = useContext(TodoContext);
  const todoList = todoCtx.todos.filter(todo => !todo.finished);

  let renderTodos = <p className="text-center mt-5">No Tasks Pending</p>
  
  if (todoList.length !== 0) {
      renderTodos = todoList.map(todo => {
      return <TodoItem key={todo.id} id={todo.id} finished={todo.finished} title={todo.title} deadline={todo.deadline} description={todo.description} important={todo.important} />
    });
  }


  return (
    <Container className="pb-4">
    <h1 className="text-center">Pending Tasks</h1>
      <Row className="justify-content-center mt-2">
        {renderTodos}
      </Row>
    </Container>
  );
};

export default Todo;
