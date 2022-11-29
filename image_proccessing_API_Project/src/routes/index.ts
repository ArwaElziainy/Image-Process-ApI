import express, { Router } from 'express';
import app from '../server';
import { resizingImage } from '../controller/customtetsingcontroller';
import { validationMiddleware } from '../middlewares/customvalidation.middleware';


const router: express.Router = express.Router();



router.get("/image", validationMiddleware,resizingImage);

export default router;