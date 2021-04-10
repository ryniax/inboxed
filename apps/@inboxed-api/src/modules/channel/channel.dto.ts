import { Channel } from '../../models/Channel';

export const channelDTO = (channel: Channel) => ({
  id: channel.id,
  name: channel.name,
  createdAt: channel.createdAt,
  updatedAt: channel.updatedAt,
});
