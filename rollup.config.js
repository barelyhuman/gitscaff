import { builtinModules } from 'module'
import pkg from './package.json';

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        format: 'cjs',
        banner: "#! /usr/bin/env node"
    },
    external: Object.keys(pkg.dependencies).concat(builtinModules)
};
