import { createContext, useState } from "react";


const TodoContext = createContext({
    todos: [],
    addTodo: newTodo => {},
    removeTodo: todoId => {},
    toggleImportant: todoId => {},
    finishTodo: todoId => {},
});

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = newTodo => {
        setTodos(prevTodos => [newTodo, ...prevTodos]);
    };

    const removeTodo = todoId => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
    };

    const toggleImportant = todoId => {
        setTodos(prevTodos => {
            const newArray = prevTodos.map(todo => todoId === todo.id ? {...todo, important: !todo.important} : todo);
            return newArray;
        })
    };

    const finishTodo = todoId => {
        setTodos(prevTodos => prevTodos.map(todo => todoId === todo.id ? {...todo, finished: !todo.finished } : todo));
    }

    const initialTodoContext = {
        todos,
        addTodo,
        removeTodo,
        toggleImportant,
        finishTodo,
    };

    return <TodoContext.Provider value={initialTodoContext} >{children}</TodoContext.Provider>
};

export default TodoContext;