import Koa from "koa";
import bodyParser from "koa-bodyparser";

import router from "./routes";

const app = new Koa();

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => console.log('Server Started...'));
