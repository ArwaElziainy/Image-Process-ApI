import express, { Application, Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import path from 'path';
import { existsSync} from 'fs';
import app from '../server';



export const resizingImage = async (req: Request, res: Response) => {
  const query: any = req.query;
  const filename = query.filename || 'fjord.jpeg';
  const width = +query.width || 100;
  const height = +query.height || 100;
  const imagePathFull = path.resolve(__dirname, `../../assets/images/full/${filename}.jpeg`);
  const imagePathDist = path.resolve(__dirname, `../../assets/images/dist/${width}x${height}:${filename}.jpeg`);

  if (!existsSync(imagePathDist)) {
    const result = await sharp(imagePathFull).resize({ width, height }).toFile(imagePathDist);
  }
  res.setHeader("content-type", "image/jpeg");
  res.setHeader("content-length", "");
  res.setHeader("Access-control-Allow-Origin", "");
  res.status(200).sendFile(imagePathDist);

  console.log("Hello from middleware 2");

};

