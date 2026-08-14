import { defineCollection } from "astro:content";
import { arena } from "astro-arena";

const CHANNEL_ID = "posters-ugpnnka-71q";
const PRIVATE_CHANNEL_URL =
  "https://www.are.na/j-youngblood/lookbook-0j99sej1ozi";
const PRIVATE_CHANNEL_ID =
  new URL(PRIVATE_CHANNEL_URL).pathname.split("/").filter(Boolean).at(-1) ??
  PRIVATE_CHANNEL_URL;

const client = arena.client();

const references = defineCollection({
  loader: arena.channel({
    url: `https://www.are.na/j-youngblood/${CHANNEL_ID}`,
    query: { page: 1, per: 60, sort: "position_desc" },
    includeChannels: true,
  }),
});

const channel = defineCollection({
  loader: async () => {
    const resource = await client.channels.get(CHANNEL_ID);
    return [{ id: `channel:${resource.id}`, resource }];
  },
});

const featured = defineCollection({
  loader: arena.block({ id: 9613792 }),
});

const team = defineCollection({
  loader: async () => {
    const user = await client.users.get("charles-broskoski");
    return [{ id: `user:${user.id}`, resource: user }];
  },
});

const privateChannel = defineCollection({
  loader: async () => {
    const resource = await client.channels.get(PRIVATE_CHANNEL_ID);
    return [{ id: `channel:${resource.id}`, resource }];
  },
});

const privateReferences = defineCollection({
  loader: arena.channel({
    url: PRIVATE_CHANNEL_URL,
    query: { page: 1, per: 12 },
  }),
});

export const collections = {
  channel,
  featured,
  privateChannel,
  privateReferences,
  references,
  team,
};
