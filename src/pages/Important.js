import { useContext } from "react";
import TodoList from "../components/TodoList";
import TodoContext from "../store/todo-context";

const Important = ({showModal, modalProps}) => {
  const todoCtx = useContext(TodoContext);

  const importantTodos = todoCtx.todos.filter((todo) => todo.important && !todo.finished && !todo.deadlineCrossed);

  return <TodoList showModal={showModal} modalProps={modalProps} title={"Important Tasks"} emptyHandler={"No Important Tasks"} todos={importantTodos} />
};

export default Important;
