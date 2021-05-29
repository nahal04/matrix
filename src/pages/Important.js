import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoItem from "../components/TodoItem";
import TodoContext from "../store/todo-context";

const Important = () => {
  const todoCtx = useContext(TodoContext);

  const importantTodos = todoCtx.todos.filter((todo) => todo.important && !todo.finished);

  let renderTodos = <p className="text-center mt-5">No important Tasks</p>;

  if (importantTodos.length !== 0) {
    renderTodos = importantTodos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} deadline={todo.deadline} description={todo.description} finished={todo.finished} important={todo.important} />)
  }


  return (
    <Container className="p-4">
      <Row>
        <Col xl={12}>
          <h1>Important Tasks</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-2">
        {renderTodos}
      </Row>
    </Container>
  );
};

export default Important;
