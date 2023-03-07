import path from 'path';

import { defineConfig } from 'vite';

const LIB_NAME = process.env.LIB_NAME || 'ReactSyntaxHighlighter';

export default defineConfig({
    build: {
        target: 'es2015',
        emptyOutDir: false,
        lib: {
            entry: path.join(__dirname, `src/${LIB_NAME}.ts`),
            name: LIB_NAME,
            fileName(format, entryName) {
                // kebab-case
                const kebabName = entryName.replace(/[A-Z]/g, g0 => '-' + g0.toLowerCase()).replace(/^-/, '');
                return `${kebabName}.${format}.js`;
            },
            formats: ['umd']
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'react'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                    react: 'React'
                }
            }
        }
    }
});
