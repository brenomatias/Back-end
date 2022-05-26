import express from "express"
import connectToDatabase from "./connection";
import { FrameController } from "./controllers/FrameControllers";
import { FrameMongooseModel } from "./models/FrameMongoModel";
import { CreateFrameService } from "./services/CreateFrameService";
import { GetAllFramesService } from "./services/GetAllFramesService";
import { GetFrameByIdService } from "./services/GetFrameByIdService";

const app = express();

app.use(express.json());

connectToDatabase();

const frameMongooseModel = new FrameMongooseModel();
const getAllFramesService = new GetAllFramesService(frameMongooseModel);
const getFrameByIdService = new GetFrameByIdService(frameMongooseModel);
const createFrameService = new CreateFrameService(frameMongooseModel);

const frameController = new FrameController(
  getAllFramesService,
  getFrameByIdService,
  createFrameService
);

app.get('/frames', (req, res) => frameController.getAll(req, res));
app.get('/frames/:id', (req, res) => frameController.getById(req, res))
app.post('/frames/', (req, res) => frameController.create(req, res))

app.listen(3001, () => {
  console.log('ouvindo a 3001')
})