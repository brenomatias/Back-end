import { Router } from 'express';
import Controller from '../Controllers';

class CustomRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: Controller<T>,
    route: string = controller.route,
  ) {
    this.router.get(route, controller.read);
    this.router.get(`${route}/:id`, controller.readOne);
    this.router.post(route, controller.create);
    this.router.put(`${route}/:id`, (req, res) => controller.update(req, res));
  }
}

export default CustomRouter;