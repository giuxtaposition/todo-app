<script lang="ts">
    import { EditIcon, TrashIcon } from 'svelte-feather-icons'
    import { todos } from '../stores/store'
    import Todo from '../types/Todo'
    import { clickOutside } from '../utils/click_outside'

    export let todo: Todo

    let editMode = false
    const handleTextChange = (newText: string) => {
        todo.text = newText
        editMode = false
    }
    const handleDelete = () => {
        todos.update(todos => todos.filter(({ id }) => id !== todo.id))
    }
</script>

<div class="todo">
    <input type="checkbox" name="completed" bind:checked={todo.completed} />

    {#if editMode}
        <input
            class="todo-text"
            type="text"
            name="text"
            value={todo.text}
            on:change={event => handleTextChange(event.currentTarget.value)}
            use:clickOutside={() => (editMode = false)}
        />
    {:else}
        <p class="todo-text">{todo.text}</p>
        <button
            class="todo-button edit-todo-button"
            on:click={() => (editMode = true)}
        >
            <EditIcon size="24" />
        </button>
        <button class="todo-button delete-todo-button" on:click={handleDelete}>
            <TrashIcon size="24" />
        </button>
    {/if}
</div>

<style>
    .todo {
        background-color: hsl(0, 0%, 100%);
        height: 2rem;
        display: flex;
        align-items: center;
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
        padding-left: 2rem;
        padding-right: 2rem;
        transition: all 0.8s ease;
    }

    .todo:first-child {
        border-radius: 0.5rem 0.5rem 0 0;
    }
    .todo:last-child {
        border-radius: 0 0 0.5rem 0.5rem;
    }
    input[type='checkbox'] {
        margin: 0;
    }
    input[type='text'] {
        width: 100%;
        margin: 0 0 0 1rem;
    }

    .todo-text {
        flex-grow: 1;
        margin-left: 1rem;
    }

    @media screen and (min-width: 600px) {
        .todo-button {
            opacity: 0;
            pointer-events: none;
        }
        .todo:hover .todo-button {
            opacity: 1;
            pointer-events: all;
        }
    }
</style>
