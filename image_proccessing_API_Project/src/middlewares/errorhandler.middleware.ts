import { Request, Response } from "express";

const errorHandler = (req: Request, res: Response): void => {
    res.send('there was an error to endpoints');
};

export default errorHandler;

