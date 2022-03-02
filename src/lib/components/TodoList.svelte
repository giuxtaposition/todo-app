<script lang="ts">
    import { todos } from '../stores/store'
</script>

<section>
    <ul class="todos">
        {#each $todos as todo}
            <li class="todo">
                <input type="checkbox" name="done" checked={todo.checked} />
                <p>{todo.text}</p>
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
    .todos > * + * {
        border-top: 0.1rem solid hsl(252, 21%, 94%);
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
</style>
