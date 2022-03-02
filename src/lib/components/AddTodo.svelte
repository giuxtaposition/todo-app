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
    <div>
        <input
            type="text"
            name="addTodo"
            placeholder="Add new todo"
            bind:value={newTodoText}
            on:keyup={handlePressEnterKey}
        />
        <button on:click={addTodo}><PlusCircleIcon size="24" /></button>
    </div>
</section>

<style>
    div {
        display: flex;
        justify-content: center;
    }
    button {
        display: flex;
    }
</style>
