var ghpages = require('gh-pages')

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/giuxtaposition/todo-app',
        user: {
            name: 'giuxtaposition',
            email: 'yg97.cs@gmail.com',
        },
    },
    () => {
        console.log('Deploy Complete!')
    }
)
