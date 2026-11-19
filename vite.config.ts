import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import { prismaVitePlugin } from '@prisma/orm-postgres/vite-plugin-contract-emit'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [tailwindcss(), reactRouter(), prismaVitePlugin()],
	resolve: {
		tsconfigPaths: true,
	},
})
