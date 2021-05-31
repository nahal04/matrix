import { useContext } from "react";
import TodoList from "../components/TodoList";
import TodoContext from "../store/todo-context";


const Todo = ({ showModal, modalProps }) => {

  const todoCtx = useContext(TodoContext);
  const todoList = todoCtx.todos.filter(todo => !todo.finished && !todo.deadlineCrossed);

  return <TodoList modalProps={modalProps} showModal={showModal} todos={todoList} title={"Pending Tasks"} emptyHandler={"No Tasks Pending"} />
};

export default Todo;
