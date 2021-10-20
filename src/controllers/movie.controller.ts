import { Request, Response } from "express";
import DatabaseService from "../services/db.service";

const movieController = {
  add: async (req: Request, res: Response) => {
    const movie = await DatabaseService.addMovie(req.body);
    res.status(201).json(movie);
  },

  remove: async (req: Request, res: Response) => {
    const result = await DatabaseService.removeMovie(req.params.uuid);
    res.json(result);
  },

  update: async (req: Request, res: Response) => {
    const result = await DatabaseService.updateMovie(req.body);
    res.json(result);
  },

  listAllMovies: async (req: Request, res: Response) => {
    const result = await DatabaseService.listAllMovies();
    res.json({ result });
  },

  listAllAvailableMovies: async (req: Request, res: Response) => {
    const result = await DatabaseService.listAllAvailableMovies();
    res.json(result);
  },
};

export default Object.freeze(movieController);
