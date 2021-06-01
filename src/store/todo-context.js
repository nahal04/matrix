import { createContext, useEffect, useState } from "react";


const TodoContext = createContext({
    todos: [],
    addTodo: newTodo => {},
    removeTodo: todoId => {},
    toggleImportant: todoId => {},
    finishTodo: todoId => {},
    remainingTimeHandler: (remainingTime, todoId) => {},
});

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const localTodos = JSON.parse(localStorage.getItem('todos'));
        if (localTodos && localTodos.length > 0) {
            setTodos(localTodos.map(todo => {
                return {
                    ...todo,
                    deadline: new Date(todo.deadline),
                    dateAdded: new Date(todo.dateAdded),
                    dateOfFinish: todo.dateOfFinish && new Date(todo.dateOfFinish),
                    dateOfFail: todo.dateOfFail && new Date(todo.dateOfFail),
                }
            }));
        }
    }, []);

    const addTodo = newTodo => {
        setTodos(prevTodos => [newTodo, ...prevTodos]);
        localStorage.setItem('todos', JSON.stringify([newTodo, ...todos]));
    };

    const removeTodo = todoId => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
        localStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo.id !== todoId)));
    };

    const toggleImportant = todoId => {
        setTodos(prevTodos => prevTodos.map(todo => todoId === todo.id ? {...todo, important: !todo.important} : todo));
        localStorage.setItem('todos', JSON.stringify(todos.map(todo => todoId === todo.id ? {...todo, important: !todo.important} : todo)));
    };

    const finishTodo = todoId => {
        setTodos(prevTodos => prevTodos.map(todo => todoId === todo.id ? {...todo, finished: !todo.finished, dateOfFinish: !todo.finished ? new Date() : null } : todo));
        localStorage.setItem('todos', JSON.stringify(todos.map(todo => todoId === todo.id ? {...todo, finished: !todo.finished, dateOfFinish: !todo.finished ? new Date() : null  } : todo)));
    }

    const remainingTimeHandler = (remainingTime, todoId) => {
        if (remainingTime === "Deadline Crossed") {
            setTodos(todos => todos.map(todo => todo.id === todoId ? { ...todo, deadlineCrossed: true, remainingTime: 'Deadline Crossed', dateOfFail: new Date() } : todo));
            localStorage.setItem('todos', JSON.stringify(todos.map(todo => todo.id === todoId ? { ...todo, deadlineCrossed: true, remainingTime, dateOfFail: new Date() } : todo)));
        } else {
            setTodos(todos => todos.map(todo => todo.id === todoId ? { ...todo, remainingTime } : todo));
            localStorage.setItem('todos', JSON.stringify(todos.map(todo => todo.id === todoId ? { ...todo, remainingTime } : todo)));
        }
    }

    const initialTodoContext = {
        todos,
        addTodo,
        removeTodo,
        toggleImportant,
        finishTodo,
        remainingTimeHandler,
    };

    return <TodoContext.Provider value={initialTodoContext} >{children}</TodoContext.Provider>
};

export default TodoContext;