<script lang="ts">
    import { PlusCircleIcon } from 'svelte-feather-icons'
    import { todos } from '../stores/store'
    import Todo from '../types/Todo'
    import { id } from '../utils/id'

    let newTodoText = ''

    const addTodo = () => {
        const newTodo: Todo = {
            id: id(),
            text: newTodoText,
            completed: false,
        }
        todos.update(todos => [...todos, newTodo])
        newTodoText = ''
    }

    const handlePressEnterKey = event => {
        if (event.keyCode === 13) {
            event.preventDefault()
            addTodo()
        }
    }
</script>

<section>
    <div class="add-todo-bar">
        <input
            type="text"
            name="addTodo"
            placeholder="Add new todo"
            bind:value={newTodoText}
            on:keyup={handlePressEnterKey}
        />
        <button class="todo-button add-todo-button" on:click={addTodo}
            ><PlusCircleIcon size="24" /></button
        >
    </div>
</section>

<style>
    .add-todo-bar {
        display: flex;
        border-radius: 0.5rem;
        background-color: hsl(0, 0%, 100%);
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
        padding-left: 2rem;
        padding-right: 2rem;
        transition: all 0.8s ease;
        box-shadow: 0 0 2rem 0.4rem hsl(0, 0%, 0%, 0.1);
    }
    input[type='text'] {
        border: none;
        width: 100%;
        margin: 0 0.25rem 0 1rem;
    }
</style>
