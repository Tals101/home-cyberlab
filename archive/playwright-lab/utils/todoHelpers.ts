export function generateRandomTodo(prefix: string = 'Todo') {
  const randomNumber = Math.floor(Math.random() * 100000);
  return `${prefix} ${randomNumber}`;
}