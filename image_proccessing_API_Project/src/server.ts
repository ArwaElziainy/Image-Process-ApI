import express, { Application, Request, Response, NextFunction } from 'express';
import router from './routes/index';
import errorHandler from './middlewares/errorhandler.middleware';
import { resizingImage } from './controller/customtetsingcontroller';
import { existsSync } from 'fs';


const port: number = 3000;

const app: Application = express();
app.use(express.static("public"));
app.use(express.static("images"));

app.use(express.json({ type: 'application/json' }));


app.use("/api",router);

export const add = (x: number , y: number) => x + y;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});


app.use(errorHandler);

export default app;
