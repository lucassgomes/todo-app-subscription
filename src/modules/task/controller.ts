import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createTodoTask(title: string) {
  try {
    const task = await prisma.task.create({
      data: {
        title
      },
    })
    return task;
  } catch (e) {
     console.log('Deu muito ruim ', e);
  }
}

export {
  createTodoTask
}