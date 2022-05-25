// src/index.ts

import App from './app';

const app = new App();
const PORT = Number(process.env.PORT) || 3000;

app.start(PORT)