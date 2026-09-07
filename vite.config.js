import React from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig( {
    Plugins: [React()],
    server: {
        proxy: {
            "/api" : "https://localhost:5000",
        },
    },
})