import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProd ? "/dishdelights/" : "/",
  build: {
    outDir: 'docs',
  },

});

