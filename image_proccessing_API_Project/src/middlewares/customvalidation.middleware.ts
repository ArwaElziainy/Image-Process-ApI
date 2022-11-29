import express, {Application,Request,Response, NextFunction } from "express";

export const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { filename, width, height } = req.query;
    console.log(filename, width, height);
    console.log('hello from middleware 1');
    next();
};
