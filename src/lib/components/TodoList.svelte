<script lang="ts">
    import { slide, fly } from 'svelte/transition'
    import { expoOut } from 'svelte/easing'
    import { todos } from '../stores/store'
    import TodoItem from './TodoItem.svelte'

    const coinSound = new Audio('/assets/smw_coin.wav')

    const playSound = () => {
        coinSound.play()
    }
</script>

<section>
    <ul class="todos">
        {#each $todos as todo}
            <li
                class="todo-item"
                in:fly={{ duration: 500, easing: expoOut, x: 150, y: 25 }}
                out:slide={{ duration: 500, easing: expoOut }}
            >
                <TodoItem bind:todo on:completedTodo={playSound} />
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
        width: 100%;
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
