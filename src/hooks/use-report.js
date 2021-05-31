import { useContext } from "react";
import TodoContext from "../store/todo-context";

const createGraphData = (todos) => {
    const totalTodosCreated = Array(7).fill(0);
    const finishedTodos = Array(7).fill(0);
    const todosCrossedDeadline = Array(7).fill(0);
    todos.forEach(todo => {
        const day = new Date(todo.dateAdded).getDay();
        totalTodosCreated[day] += 1; 
        if (todo.finished) finishedTodos[day] += 1;
        if (todo.deadLineCrossed) todosCrossedDeadline[day] =+ 1;
    });
    return {
        total: totalTodosCreated,
        finished: finishedTodos,
        deadlineCrossed: todosCrossedDeadline,
    }
}

const useReport = () => {
    const todoCtx = useContext(TodoContext);
    const today = new Date().getDay();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - today);
    const recentTodos = todoCtx.todos.filter(todo => todo.dateAdded > cutoffDate);
    return createGraphData(recentTodos);
};

export default useReport;