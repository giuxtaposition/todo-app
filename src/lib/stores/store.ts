import type Todo from '../types/Todo'
import { id } from '../utils/id'
import { localStore } from './localStorage'

const initialTodos: Todo[] = [
    { id: id(), text: 'Run a marathon', completed: true },
    { id: id(), text: 'Bake some bread', completed: false },
    { id: id(), text: 'Sing in the shower', completed: false },
]

export const todos = localStore('todo-app', initialTodos)
