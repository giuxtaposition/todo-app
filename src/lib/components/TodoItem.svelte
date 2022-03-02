<script lang="ts">
    import { EditIcon } from 'svelte-feather-icons'
    import Todo from '../types/Todo'
    import { clickOutside } from '../utils/click_outside'

    export let todo: Todo

    let editMode = false
    const handleTextChange = (newText: string) => {
        todo.text = newText
        editMode = false
    }
</script>

<div class="todo">
    <input type="checkbox" name="completed" bind:checked={todo.completed} />

    {#if editMode}
        <input
            type="text"
            name="text"
            value={todo.text}
            on:change={event => handleTextChange(event.currentTarget.value)}
            use:clickOutside={() => (editMode = false)}
        />
    {:else}
        <p>{todo.text}</p>
        <button class="edit-todo-button" on:click={() => (editMode = true)}>
            <EditIcon size="24" />
        </button>
    {/if}
</div>

<style>
    .todo {
        width: 35rem;
        background-color: hsl(0, 0%, 100%);
        height: 2rem;
        display: flex;
        align-items: center;
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
        padding-left: 2rem;
        padding-right: 2rem;
        gap: 2rem;
    }
    .todo:hover .edit-todo-button {
        opacity: 1;
        pointer-events: all;
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
        margin: 0;
    }
    .edit-todo-button {
        background-color: transparent;
        border: none;
        display: flex;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.8s ease;
        margin-left: auto;
    }
</style>
