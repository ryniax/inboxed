import { getRepository } from 'typeorm';
import { Channel } from '../../models/Channel';
import { Server } from '../../models/Server';
import { HTTPError } from '../../utils/errors/httpError';
import { channelDTO } from './channel.dto';

const createChannel = async (channelName: string, serverId: number) => {
  const serverRepository = getRepository(Server);

  const server = await serverRepository.findOne(serverId);
  if (!server) throw new HTTPError("Server doesn't exist. Cannot create channel.", 404);

  const channelRepository = getRepository(Channel);
  const channel = await channelRepository.create({ name: channelName, server }).save();

  return channelDTO(channel);
};

export default {
  createChannel,
};
