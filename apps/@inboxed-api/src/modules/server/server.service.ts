import slugify from 'slugify';
import { getRepository } from 'typeorm';
import { Server } from '../../models/Server';
import { User } from '../../models/User';
import { HTTPError } from '../../utils/errors/httpError';
import userService from '../user/user.service';
import { serverDTO, serversDTO } from './server.dto';

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

const getServersForUser = async (userId: number) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId, { relations: ['servers'] });

  if (!user) throw new HTTPError('User not found. Cannot get servers.', 404);

  return serversDTO(user.servers);
};

const getAllServers = async () => {
  const serverRepository = getRepository(Server);

  const servers = await serverRepository.find();
  return serversDTO(servers);
};

const joinServer = async (userId: number, serverId: number) => {
  const userRepository = getRepository(User);
  const serverRepository = getRepository(Server);

  const user = await userRepository.findOne(userId, { relations: ['servers'] });
  const server = await serverRepository.findOne(serverId, { relations: ['users'] });

  if (!user) throw new HTTPError('User not found.', 404);
  if (!server) throw new HTTPError('Server not found.', 404);

  server.users.push(user);
  server.save();

  return server;
};

export default {
  createServer,
  getServersForUser,
  getAllServers,
  joinServer,
};
