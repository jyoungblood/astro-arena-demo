# astro-arena playground

This Astro 7 application 

## Install

```sh
npx degit jyoungblood/astro-arena-demo .
npm install
npm run dev
```




note what to update (content.config, live.config), where to add key for private (& where to generate: https://www.are.na/developers/personal-access-tokens)





The default pages use the public Arena Influences channel. They do not need an Are.na token.

## Pages

- `/` uses `arena.channel()` and static output.
- `/blocks/:id` creates static detail pages from the channel entries.
- `/featured` uses `arena.block()` and static output.
- `/live` uses `arena.liveChannel()` with the Node adapter.
- `/team` uses `arena.client()` inside `defineCollection()`.
- `/private` uses `arena.channel()` to show the configured private channel and its entries.

The `/live` route runs on the server for each request. It does not run in browser JavaScript.

The other pages can remain static. The live route requires on-demand rendering and a server adapter. Read [Astro live content collections](https://docs.astro.build/en/guides/content-collections/#live-content-collections).

## Private content

Set the private channel URL in `src/content.config.ts`. Copy `.env.example` to `.env`, then add a bearer token that can access the channel.

Do not commit `.env`. The private channel URL is safe to commit, but the bearer token is not.

## Commands

```sh
npm run check
npm run build
```

## License

This demo is available under the [MIT License](./LICENSE).