<p align="center">
  <img src="./public/astro-arena.svg" alt="Astro + Are.na">
</p>

# astro-arena demo

This Astro 7 demo loads Are.na channels, blocks, users, and live collections with [`astro-arena`](https://github.com/jyoungblood/astro-arena).


## Run locally

Use Node.js 22.12 or newer.

```sh
npx degit jyoungblood/astro-arena-demo .
npm install
npm run dev
```

## Settings

Change the public loader settings in `src/content.config.ts`.

Add or change live collection settings in `src/live.config.ts`.

Private content settings are in `src/private.config.ts`. Copy `.env.example` to `.env`, then set `ARENA_BEARER_TOKEN`.


## License

This demo is available under the [MIT License](./LICENSE).

Made with ♥️ by [J Youngblood](https://www.are.na/j-youngblood)
