<script lang="ts">
    import Header from './lib/components/Header.svelte'
    import AddTodo from './lib/components/AddTodo.svelte'
    import TodoList from './lib/components/TodoList.svelte'
</script>

<main>
    <Header />
    <AddTodo />
    <TodoList />
</main>

<style>
    main {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.5rem;
    }

    :global(section) {
        width: 80%;
    }

    :global(.todo-button) {
        background-color: transparent;
        border: none;
        display: flex;
        cursor: pointer;
        transition: opacity 0.8s ease;
        margin: 0;
    }
    :global(.todo-button:hover) {
        background-color: hsl(252, 21%, 94%);
        border-radius: 2px;
    }

    @media screen and (min-width: 600px) {
        :global(section) {
            width: 35rem;
        }
    }
</style>
