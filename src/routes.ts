import KoaRouter from "koa-router";

import TodosController from "./controllers/todos";

const router = new KoaRouter();

router.get("/todos", TodosController.getTodos);
router.post("/todos", TodosController.createTodo);
router.put("/todos/:id", TodosController.updateTodo);
router.delete("/todos/:id", TodosController.deleteTodo);

router.get("/", (ctx) => (ctx.body = "Welcome to Todos REST API"));

export default router;
