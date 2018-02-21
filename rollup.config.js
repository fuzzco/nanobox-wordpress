import * as fs from 'fs';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

const production = !!process.env.production;

export default {
  entry: 'src/main.js',
  dest: 'app/bundle.js',
  format: 'iife',
  moduleName: 'app',
  sourceMap: true,
  plugins: [
    svelte(),
    resolve(),
    commonjs(),
    production && buble({ exclude: 'node_modules/**' }),
    production && uglify()
  ]
};