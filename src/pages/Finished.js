import { useContext } from "react"
import TodoList from '../components/TodoList';
import TodoContext from "../store/todo-context";

const Finished = ({showModal, modalProps}) => {
    const todoCtx = useContext(TodoContext);

    const finishedTodos = todoCtx.todos.filter(todo => todo.finished);

    return <TodoList showModal={showModal} modalProps={modalProps} todos={finishedTodos} emptyHandler={"No Finished Tasks"} title={"Finished Tasks"} />
};

export default Finished;