
import { useContext, useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap"
import calculateRemainingTime from "../functions/date-calculator";
import TodoContext from "../store/todo-context";


const TodoItem = props => {
    const { id, title, description, deadline, important, finished } = props;
    const [deadlineCrossed, setDeadlineCrossed] = useState(false);
    const remainingTime = calculateRemainingTime(deadline);

    const todoCtx = useContext(TodoContext);

    const deleteTodoHandler = () => {
      todoCtx.removeTodo(id);
    };

    const importantTodoHandler = () => {
      todoCtx.toggleImportant(id);
    };

    const todoFinishHandler = () => {
      todoCtx.finishTodo(id);
    }

    useEffect(() => {
      if (remainingTime === "Deadline Crossed") {
        setDeadlineCrossed(true);
      }
    }, [remainingTime]);

    let footerColor = "text-muted";
    if (finished) {
      footerColor = 'text-success';
    } else if (deadlineCrossed) {
      footerColor = 'text-danger';
    }
  
    return <Col sm={12} lg={6}>
    <Card border={finished ? "success" : deadlineCrossed ? "danger" : "dark"} className="mt-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text >{description}</Card.Text>
        <Button variant="danger" className="m-2" onClick={deleteTodoHandler}>
          Delete
        </Button>
        { !finished && !deadlineCrossed && <Button variant="info" className="m-2" onClick={importantTodoHandler}>
          {important ? 'Unimportant' : 'Important'}
        </Button> }
        {!deadlineCrossed && <Button variant="success" className="m-2" onClick={todoFinishHandler}>
          {finished ? "Unfinish" : "Finished"}
        </Button>}
      </Card.Body>
        <Card.Footer className={footerColor}>{!finished ? remainingTime : "Finished"}</Card.Footer>
    </Card>
  </Col>
};

export default TodoItem;