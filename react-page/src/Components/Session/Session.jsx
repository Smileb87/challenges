import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import List from '../List/List';
import Form from '../Form/Form';

import './Session.css';

// UID -> A tiny (130B to 205B) and fast utility to randomize unique IDs of fixed length
import { uid } from 'uid';

export default function Session() {
    const [todos, setTodos] = useLocalStorageState('todos', {
        defaultValue: [
            {
                id: uid(),
                title: 'Learn React',
                isChecked: false,
            },
        ],
    });

    function handleAddTodo(title) {
        setTodos([
            {
                id: uid(),
                title,
                isChecked: false,
            },
            ...todos,
        ]);
    }

    function handleToggleCheckTodo(idToToggle) {
        setTodos(
            todos.map((todo) =>
                todo.id === idToToggle
                    ? { ...todo, isChecked: !todo.isChecked }
                    : todo
            )
        );
    }
    return (
        <main className='session'>
            <h1 className='session__title'>To Do List</h1>
            {/* Here Add the component for the Session */}
            <Form onAddTodo={handleAddTodo} />
            <List todos={todos} onToggleCheckTodo={handleToggleCheckTodo} />
        </main>
    );
}
