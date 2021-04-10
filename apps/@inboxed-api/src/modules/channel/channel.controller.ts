import { Request, Response, NextFunction } from 'express';
import { SendResponse } from '../../utils/http/response';
import channelService from './channel.service';

const createChannel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, serverId } = req.body;

    const channel = await channelService.createChannel(name, serverId);
    SendResponse(res, { channel }, 201, 'Channel created.');
  } catch (error) {
    next(error);
  }
};

export default {
  createChannel,
};
