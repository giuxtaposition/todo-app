import { writable } from 'svelte/store'
import type Todo from '../types/Todo'
import { id } from '../utils/id'

const initialTodos: Todo[] = [
    { id: id(), text: 'Run a marathon', completed: true },
    { id: id(), text: 'Bake some bread', completed: false },
    { id: id(), text: 'Sing in the shower', completed: false },
]

export const todos = writable<Todo[]>(initialTodos)
