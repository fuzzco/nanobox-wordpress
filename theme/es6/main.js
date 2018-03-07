const log = say => whatever => console.log(`${say} ${whatever}`)

const hello = log('Hello')

hello('World')