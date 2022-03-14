import { Context } from "koa";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export default class TodosController {
  public static async createTodo(ctx: Context): Promise<void> {
    const id = Math.random().toString(16).slice(2);
    const text = (ctx.request.body as { text: string }).text;

    const newTodo = new Todo(id, text);

    TODOS.push(newTodo);

    ctx.status = 200;
    ctx.body = newTodo;
  }

  public static async getTodos(ctx: Context): Promise<void> {
    ctx.status = 200;
    ctx.body = { todos: TODOS };
  }

  public static async updateTodo(ctx: Context): Promise<void> {
    const todoId = ctx.params.id;

    const updatedText = (ctx.request.body as { text: string }).text;

    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
      throw new Error("Couldn't find todo!");
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

    ctx.status = 200;
    ctx.body = TODOS[todoIndex];
  }

  public static async deleteTodo(ctx: Context): Promise<void> {
    const todoId = ctx.params.id;

    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
      throw new Error("Couldn't find todo!");
    }

    TODOS.splice(todoIndex, 1);

    ctx.status = 200;
    ctx.body = { message: "todo deleted successfully" };
  }
}
