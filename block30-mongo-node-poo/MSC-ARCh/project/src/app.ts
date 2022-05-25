// src/app.ts

import express from 'express';
import createConnection from './models/connection';
import routes from './routes';

class App {
  public express: express.Application;
  
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    createConnection();
  }

  public start(PORT: number) {
    this.express.listen(PORT, () => {
      console.log(`Ouvindo a porta ${PORT}`);
    });
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(routes);
  }

}
export default App;