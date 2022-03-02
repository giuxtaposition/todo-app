<script lang="ts">
    import { todos } from '../stores/store'
    import TodoItem from './TodoItem.svelte'

    $: console.log($todos)
</script>

<section>
    <ul class="todos">
        {#each $todos as todo}
            <li class="todo-item">
                <TodoItem bind:todo />
            </li>
        {/each}
    </ul>
</section>

<style>
    .todos {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 0 2rem 0.4rem hsl(0, 0%, 0%, 0.1);
        width: fit-content;
        margin: 0;
        padding: 0;
    }
    .todos > * {
        transition: 0.4s ease;
    }
    .todos > * + * {
        border-top: 0.1rem solid hsl(252, 21%, 94%);
    }
</style>
