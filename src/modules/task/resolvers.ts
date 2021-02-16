import { PubSub } from 'graphql-subscriptions';

import {
  createTodoTask
} from './controller'

const pubsub = new PubSub();

export default {
  Query: {
    hello(_root: any) {
      return 'Hello Word';
    }
  },
  Mutation: {
    createTask(_root: any, { title }: any) {
      const taskCreated = createTodoTask(title)
      pubsub.publish('TASK_CREATED', { taskCreated });
      return taskCreated
    }
    
  },
  Subscription: {
    taskCreated: {
      subscribe: () => pubsub.asyncIterator(['TASK_CREATED']),
    },
  },
}