import { writable } from 'svelte/store'
import type Todo from '../types/Todo'

export const todos = writable<Todo[]>([])
