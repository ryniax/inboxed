import slugify from 'slugify';
import { getRepository } from 'typeorm';
import { Server } from '../../models/Server';
import { HTTPError } from '../../utils/errors/httpError';
import userService from '../user/user.service';
import { serverDTO } from './server.dto';

const createServer = async (userId: number, serverName: string) => {
  const user = await userService.findUser({ id: userId });
  if (!user) throw new HTTPError('User not found. Cannot create a server.', 404);

  const serverNameSlug = slugify(serverName, { lower: true });

  const serverRepository = getRepository(Server);

  const serverExists = await serverRepository.findOne({ where: { slug: serverNameSlug } });
  if (serverExists) throw new HTTPError('Server with that name already exists.', 400);

  const server = serverRepository.create({ name: serverName, slug: serverNameSlug });
  server.users = [user];
  server.admins = [user];
  await serverRepository.save(server);

  return serverDTO(server);
};

export default {
  createServer,
};
