import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  bridge: {
    capi: true,
    vite: { legacy: false },
    nitro: true,
    meta: true,
    macros: { pageMeta: true },
  },
});
