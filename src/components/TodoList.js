import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TodoItem from "../components/TodoItem";

const TodoList = ({ showModal, modalProps, title, todos, emptyHandler }) => {

  let renderTodos = <p className="text-center mt-5">{emptyHandler}</p>;

  if (todos.length !== 0) {
    const sorted = todos.sort((a, b) => a.deadline - b.deadline);
    renderTodos = sorted.map((todo) => {
      return (
        <TodoItem
          showModal={showModal}
          modalProps={modalProps}
          key={todo.id}
          id={todo.id}
          finished={todo.finished}
          title={todo.title}
          deadline={todo.deadline}
          description={todo.description}
          remainingTimeState={todo.remainingTime}
          deadlineCrossed={todo.deadlineCrossed}
          important={todo.important}
        />
      );
    });
  }

  return (
    <Container className="p-4">
      <h1>{title}</h1>
      <Row className="justify-content-center mt-2">{renderTodos}</Row>
    </Container>
  );
};

export default TodoList;
