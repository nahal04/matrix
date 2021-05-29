import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import TodoContext from "../store/todo-context";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [important, setImportant] = useState(false);
  const [valid, setValid] = useState(false);

  const todoCtx = useContext(TodoContext);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const deadlineChangeHandler = (event) => {
    setDeadline(event.target.value);
  };

  const importantChangeHandler = (event) => {
    setImportant(event.target.checked);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValid(true);
    } else {
      todoCtx.addTodo({
        id: uuidv4(),
        title,
        description,
        deadline,
        important,
        finished: false,
      });
      setTitle('');
      setDescription('');
      setDeadline('');
      setImportant(false);
      setValid(false);
    }
    }
  return (
    <Container>
      <Row className="justify-content-center mt-4 mb-4">
        <Col lg={6} sm={12}>
          <Form noValidate validated={valid} onSubmit={submitHandler} className="text-left d-flex flex-column">
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={titleChangeHandler}
                required
              />
              <Form.Control.Feedback type='invalid'>
                A title is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                value={description}
                onChange={descriptionChangeHandler}
                required
              />
              <Form.Control.Feedback type='invalid'>
                A Description is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupDeadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="datetime-local"
                value={deadline}
                onChange={deadlineChangeHandler}
                min={new Date(new Date(new Date().toString().split("GMT")[0] + " UTC").getTime() + 120000)
                  .toISOString()
                  .substring(0, 16)}
                required
              />
              <Form.Text>Select a time atleast 2 mins from now</Form.Text>
              <Form.Control.Feedback type='invalid'>
                A Valid Deadline is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupIsImportant">
              <Form.Check.Input
                type="checkbox"
                id="important-label"
                className="position-relative m-0 mr-2"
                onChange={importantChangeHandler}
                checked={important}
              />
              <Form.Check.Label htmlFor="important-label" style={{ color: 'black' }}>Mark as important (Optional)</Form.Check.Label>
            </Form.Group> 
            <Button
              variant="primary"
              type="submit"
              className="m-auto"
            >
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTodo;
