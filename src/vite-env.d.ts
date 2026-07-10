/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Vercel's deploy environment, auto-populated by Vercel at build time
   * (VERCEL_ENV -> VITE_VERCEL_ENV). One of "production", "preview", or
   * "development". Unset entirely during local `npm run dev`.
   */
  readonly VITE_VERCEL_ENV?: "production" | "preview" | "development";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
