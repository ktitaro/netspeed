const path = require('path');
const esbuild = require('esbuild');

const baseDir = path.resolve(__dirname);
const codeDir = path.resolve(baseDir, 'src');
const distDir = path.resolve(baseDir, 'dist');
const inputPath = path.resolve(codeDir, 'index.ts');
const outputPath = path.resolve(distDir, 'index.js');

esbuild.buildSync({
    bundle: true,
    minify: true,
    platform: 'node',
    outfile: outputPath,
    entryPoints: [inputPath],
});
