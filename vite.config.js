import {sentryVitePlugin} from "@sentry/vite-plugin";
import {vitePlugin as remix} from "@remix-run";
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),
        remix({
            future: {
                v7_skipActionErrorRevalidation: true,
            },
        }),
        sentryVitePlugin({
                org: "the-pocman",
                project: "javascript-react"
            },
        )],

    build: {
        sourcemap: true
    }
});