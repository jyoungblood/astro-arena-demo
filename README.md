# astro-arena demo

This Astro 7 application shows the build-time and live loaders from [`astro-arena`](https://github.com/jyoungblood/astro-arena).

The deployed demo is a static site. Astro loads the Are.na content during each build and writes the pages to `dist/`.

## Local development

Use Node.js 22.12 or a later version.

```sh
npx degit jyoungblood/astro-arena-demo .
npm install
npm run dev
```

Edit the channel URLs in `src/content.config.ts` to use your own public content.

## Static and live content

The `references` and `liveSnapshot` collections use `arena.channel()`. This loader saves Are.na data in the Astro build-time content store.

The `/live` page displays `liveSnapshot`. Its output shows the data that was available when the latest build ran.

The `src/live.config.ts` file shows how to configure `arena.liveChannel()`. An SSR application can query this collection with `getLiveCollection()`.

A live collection loads data for each page request. It requires on-demand rendering and an Astro adapter.

This demo does not query the live collection or display its output. It has no adapter because this Pages deployment serves only static files.

Read the [Astro live content guide](https://docs.astro.build/en/guides/content-collections/#live-content-collections) for the SSR process.

## Pages in the demo

- `/` uses `arena.channel()` and displays a channel from the build-time store.
- `/block` uses `arena.block()` and displays one block from the build-time store.
- `/blocks/:id` contains static detail pages that Astro creates with `getStaticPaths()`.
- `/live` displays a build-time snapshot and explains the live collection process.
- `/sdk` uses `arena.client()` inside `defineCollection()`.
- `/private` displays the configured private channel from the build-time store.

## Private content

Create an [Are.na personal access token](https://www.are.na/developers/personal-access-tokens). The token must have access to the private channel.

Set the private channel URL in `src/content.config.ts`.

For local development, copy `.env.example` to `.env`. Then add the token to `ARENA_BEARER_TOKEN`.

Do not commit `.env`. The loader does not include the token in browser code.

NOTE: A static build makes its rendered content public. Any content in `/private` (from a private channel) will be public.


## License

This demo is available under the [MIT License](./LICENSE).
