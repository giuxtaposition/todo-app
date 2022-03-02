export const id = () => {
    const randomId = Date.now() + Math.random()
    return randomId.toString()
}
