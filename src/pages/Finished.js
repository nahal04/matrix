import { useContext } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TodoItem from "../components/TodoItem";
import TodoContext from "../store/todo-context"

const Finished = () => {
    const todoCtx = useContext(TodoContext);

    const finishedTodos = todoCtx.todos.filter(todo => todo.finished);

    let renderTodos = <p className="text-center mt-5">No finished Tasks</p>;

    if (finishedTodos.length !== 0) {
        renderTodos = finishedTodos.map(todo => <TodoItem key={todo.id} id={todo.id} finished={todo.finished} title={todo.title} deadline={todo.deadline} description={todo.description} important={todo.important} />)
    }


    return <Container className="p-4">
    <h1 className="text-center">Finished Tasks</h1>
        <Row className="justify-content-center">
            {renderTodos}
        </Row>
    </Container>
};

export default Finished;