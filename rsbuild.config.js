import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginSolid } from '@rsbuild/plugin-solid'

export default defineConfig({
	source: {
		entry: {
			index: './src/index.jsx',
		},
	},
	html: {
		template: './index.html',
	},
	plugins: [
		pluginBabel({ include: /\.(?:jsx|tsx)$/ }),
		pluginSolid(),
	],
})
