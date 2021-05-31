import { useContext } from "react"
import TodoList from "../components/TodoList";
import TodoContext from "../store/todo-context"

const Failed = ({ modalProps, showModal }) => {
    const todoCtx = useContext(TodoContext);
    const deadlinedTodos = todoCtx.todos.filter(todo => todo.deadlineCrossed === true);

    return <TodoList showModal={showModal} modalProps={modalProps} todos={deadlinedTodos} title={"Failed Tasks"} emptyHandler={'No Failed Tasks'} />
}

export default Failed;