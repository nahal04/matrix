import { useContext, useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import checkRemainingTime from "../functions/check-remaining-time";
import TodoContext from "../store/todo-context";

const TodoItem = ({
  id,
  title,
  description,
  deadline,
  important,
  finished,
  showModal,
  modalProps,
  remainingTimeState,
  deadlineCrossed,
}) => {
  const todoCtx = useContext(TodoContext);
  const { remainingTimeHandler } = todoCtx;

  useEffect(() => {
    if (!deadlineCrossed && !finished) {
      const timer = setInterval(() => {
        const remainingTime = checkRemainingTime(deadline);
        if (remainingTime !== remainingTimeState) {
          remainingTimeHandler(remainingTime, id);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [deadline, id, remainingTimeHandler, deadlineCrossed, finished, remainingTimeState]);

  const deleteTodoHandler = () => {
    showModal(true);
    modalProps({
      title: "Caution",
      body: "Once deleted, these tasks won't be considered for perfomance analysis. Are you sure you want to delete this task ?",
      button: "Delete",
      buttonVariant: "danger",
      action: () => todoCtx.removeTodo(id),
    });
  };

  const importantTodoHandler = () => {
    todoCtx.toggleImportant(id);
  };

  const todoFinishHandler = () => {
    todoCtx.finishTodo(id);
  };

  let footerColor = "text-muted";
  if (finished) {
    footerColor = "text-success";
  } else if (deadlineCrossed) {
    footerColor = "text-danger";
  }

  return (
    <Col sm={12} lg={6}>
      <Card
        border={finished ? "success" : deadlineCrossed ? "danger" : "dark"}
        className="mt-4"
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="danger" className="m-2" onClick={deleteTodoHandler}>
            Delete
          </Button>
          {!finished && !deadlineCrossed && (
            <Button
              variant="info"
              className="m-2"
              onClick={importantTodoHandler}
            >
              {important ? "Unimportant" : "Important"}
            </Button>
          )}
          {!deadlineCrossed && (
            <Button
              variant="success"
              className="m-2"
              onClick={todoFinishHandler}
            >
              {finished ? "Unfinish" : "Finished"}
            </Button>
          )}
        </Card.Body>
        <Card.Footer className={footerColor}>
          {!finished ? remainingTimeState : "Finished"}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default TodoItem;
