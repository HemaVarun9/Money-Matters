import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/rest': {
          target: env.HASURA_BASE_URL,
          changeOrigin: true,
          secure: true,
          headers: {
            'x-hasura-admin-secret': env.HASURA_ADMIN_SECRET,
          },
        },
      },
    },
  }
})