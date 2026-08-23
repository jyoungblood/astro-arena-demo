import { defineCollection } from "astro:content";
import { getSecret } from "astro:env/server";
import type { LoaderContext } from "astro/loaders";
import { arena, arenaEntrySchema } from "astro-arena";

const CHANNEL_URL = "https://www.are.na/j-youngblood/hidden-in-plain-sight-bnv6cgnuurq";
const token = getSecret("ARENA_BEARER_TOKEN");

export const privateConfiguration = token ? { channelUrl: CHANNEL_URL, token } : undefined;

export const privateChannel = defineCollection({
  loader: async () => {
    if (!privateConfiguration) {
      return [];
    }

    const privateClient = arena.client({ token: privateConfiguration.token });
    const resource = await privateClient.channels.get(
      new URL(privateConfiguration.channelUrl).pathname.split("/").filter(Boolean).at(-1) ??
        privateConfiguration.channelUrl,
    );
    return [{ id: `channel:${resource.id}`, resource }];
  },
});

const privateReferencesLoader = privateConfiguration
  ? arena.channel({
      url: privateConfiguration.channelUrl,
      token: privateConfiguration.token,
      query: { page: 1, per: 12 },
    })
  : {
      name: "astro-arena:private-disabled",
      schema: arenaEntrySchema,
      async load({ store }: LoaderContext) {
        store.clear();
      },
    };

export const privateReferences = defineCollection({
  loader: privateReferencesLoader,
});
