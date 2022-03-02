<script lang="ts">
    import { todos } from './lib/stores/store'
    import Todo from './lib/types/Todo'
    import Header from './lib/components/Header.svelte'
    import AddTodo from './lib/components/AddTodo.svelte'
    let todosValue: Todo[]

    todos.subscribe(value => {
        todosValue = value
    })

    $: console.log(todosValue)
</script>

<main>
    <Header />
    <AddTodo />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
