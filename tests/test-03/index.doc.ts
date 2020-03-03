interface ItemsList {
  name: string
  price: number
  quantity: number
}

enum TaskStatus { TODO, DOING, BLOCKED, DONE }

interface TaskHistory {
  title: string
  subTasks: Array<Task>
}

interface Task {
  name: string,
  status: TaskStatus
}

export const marketList: Array<ItemsList> = [
  { name: 'Feijão', price: 3.5, quantity: 2 },
  { name: 'Arroz', price: 1.5, quantity: 3 },
  { name: 'Farofa', price: 4.5, quantity: 4 },
  { name: 'Sardinha', price: 5.5, quantity: 1 },
  { name: 'Salame', price: 6.5, quantity: 5 },
  { name: 'Queijo', price: 7.5, quantity: 2 },
  { name: 'Presunto', price: 1.5, quantity: 1 },
  { name: 'Pão', price: 0.5, quantity: 10 },
  { name: 'Áqua Sanitária', price: 1.5, quantity: 7 },
  { name: 'Sabão em Pó', price: 2.5, quantity: 1 },
  { name: 'Requeijão', price: 3.5, quantity: 3 },
  { name: 'Iorgute', price: 4.5, quantity: 3 },
  { name: 'Tomate', price: 9.5, quantity: 2 },
  { name: 'Alface', price: 8.5, quantity: 1 },
  { name: 'Alho', price: 7.5, quantity: 2 },
  { name: 'Cebola', price: 7.5, quantity: 3 },
  { name: 'Cenoura', price: 4.5, quantity: 4 },
  { name: 'Pepino', price: 6.5, quantity: 5 },
  { name: 'Leite Condensado', price: 1.5, quantity: 6 },
  { name: 'Macarrão', price: 2.5, quantity: 9 },
  { name: 'Papel Higienico', price: 4.5, quantity: 16 },
  { name: 'Shampoo', price: 0.5, quantity: 4 },
  { name: 'Condicionador', price: 10.5, quantity: 4 },
  { name: 'Café', price: 12.5, quantity: 5 },
  { name: 'Maçã', price: 13.5, quantity: 10 },
  { name: 'Abaixa', price: 20.5, quantity: 8 },
  { name: 'Bom Brill', price: 21.5, quantity: 3 },
  { name: 'Amaciante', price: 22.5, quantity: 2 },
  { name: 'Vinho', price: 30.5, quantity: 2 },
  { name: 'Leite', price: 15.5, quantity: 4 },
]

export const tasksList: Array<TaskHistory> = [
  { 
    title: 'Assistir aula no LuchBase',
    subTasks: [
      { name: 'Aula 1', status: TaskStatus.DONE },
      { name: 'Aula 2', status: TaskStatus.DOING },
      { name: 'Aula 3', status: TaskStatus.BLOCKED },
      { name: 'Aula 4', status: TaskStatus.TODO },
    ]
  },
  { 
    title: 'Arrumar a Casa',
    subTasks: [
      { name: 'Forrar a Cama', status: TaskStatus.TODO },
      { name: 'Varrer a Casa', status: TaskStatus.TODO },
      { name: 'Lavar o Banheiro', status: TaskStatus.TODO },
      { name: 'Lavar os Pratos', status: TaskStatus.TODO },
    ]
  },
  { 
    title: 'Exercitar-se',
    subTasks: [
      { name: 'Subir Escada', status: TaskStatus.DONE },
      { name: 'Levantar Peso', status: TaskStatus.DONE },
    ]
  },
  { 
    title: 'Codar',
    subTasks: [
      { name: 'Fazer Exercicio 1', status: TaskStatus.DOING },
      { name: 'Fazer Exercicio 2', status: TaskStatus.DOING },
      { name: 'Fazer Exercicio 3', status: TaskStatus.BLOCKED },
      { name: 'Fazer Exercicio 4', status: TaskStatus.BLOCKED },
    ]
  },

]