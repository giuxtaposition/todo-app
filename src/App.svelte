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
</style>
