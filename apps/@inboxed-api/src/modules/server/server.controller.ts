import { Request, Response, NextFunction } from 'express';
import { SendResponse } from '../../utils/http/response';
import serverService from './server.service';

const createServer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const { userId } = req.session;

    const server = await serverService.createServer(userId as number, name);
    SendResponse(res, { server }, 201, 'Server created.');
  } catch (error) {
    next(error);
  }
};

const getServersForUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.session;

    const servers = await serverService.getServersForUser(userId as number);
    SendResponse(res, { servers }, 200, 'Servers found.');
  } catch (error) {
    next(error);
  }
};

export default {
  createServer,
  getServersForUser,
};
