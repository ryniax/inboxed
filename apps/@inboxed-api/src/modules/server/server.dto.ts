import { Server } from '../../models/Server';

export const createServerDTO = (server: Server) => ({
  id: server.id,
  name: server.name,
  slug: server.slug,
  createdAt: server.createdAt,
  updatedAt: server.updatedAt,
});
