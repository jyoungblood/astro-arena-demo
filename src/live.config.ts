import { defineLiveCollection } from "astro:content";
import { arena } from "astro-arena";

const liveReferences = defineLiveCollection({
  loader: arena.liveChannel({
    url: "https://www.are.na/are-na-team/arena-influences",
    query: { page: 1, per: 12, sort: "position_desc" },
    includeChannels: true,
  }),
});

export const collections = { liveReferences };
