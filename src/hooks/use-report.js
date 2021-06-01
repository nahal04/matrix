import { useContext } from "react";
import TodoContext from "../store/todo-context";


const useReport = () => {
    const createGraphData = (recentTodos, recentlyFinishedTodos, recentlyFailedTodos) => {
        const totalTodosCreated = Array(7).fill(0);
        const finishedTodos = Array(7).fill(0);
        const todosCrossedDeadline = Array(7).fill(0);
        recentTodos.forEach(todo => {
            const day = todo.dateAdded.getDay();
            totalTodosCreated[day]++;
        });
        recentlyFinishedTodos.forEach(todo => {
            const day = todo.dateOfFinish.getDay();
            finishedTodos[day]++;
        });
        recentlyFailedTodos.forEach(todo => {
            const day = todo.dateOfFail.getDay();
            todosCrossedDeadline[day]++;
        })
        return {
            total: totalTodosCreated,
            finished: finishedTodos,
            deadlineCrossed: todosCrossedDeadline,
        }
    }
    const todoCtx = useContext(TodoContext);
    const today = new Date().getDay();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - today);
    const recentTodos = todoCtx.todos.filter(todo => todo.dateAdded > cutoffDate);
    const recentlyFinishedTodos = todoCtx.todos.filter(todo => todo.dateOfFinish && todo.dateOfFinish > cutoffDate);
    const recentlyFailedTodos = todoCtx.todos.filter(todo => todo.dateOfFail && todo.dateOfFail > cutoffDate);
    return createGraphData(recentTodos, recentlyFinishedTodos, recentlyFailedTodos);
};

export default useReport;