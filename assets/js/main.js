import { ProjectController } from "./controllers/ProjectController.js";
import { ProjectDataSource } from "./data/ProjectDataSource.js";
import { ProjectService } from "./services/ProjectService.js";
import { ProjectView } from "./views/ProjectView.js";

const source = new ProjectDataSource();
const view = new ProjectView();

const service = new ProjectService(source);
const controller = new ProjectController(service, view);

controller.init();
