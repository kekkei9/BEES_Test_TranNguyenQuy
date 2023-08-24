"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRoute = express_1.default.Router();
userRoute.route("/users").get(userController_1.getAllUsers);
userRoute.route("/users/:id").delete(userController_1.deleteUser);
exports.default = userRoute;
//# sourceMappingURL=userRoutes.js.map