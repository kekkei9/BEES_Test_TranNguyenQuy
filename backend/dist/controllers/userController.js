"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getAllUsers = void 0;
const user_1 = require("./../validators/user");
const fs_1 = __importDefault(require("fs"));
const zod_1 = require("zod");
const getAllUsers = (req, res) => {
    var _a, _b;
    try {
        const { page, pageSize } = user_1.getAllUsersParamsSchema.parse({
            page: Number(((_a = req.query) === null || _a === void 0 ? void 0 : _a.page) || 1),
            pageSize: Number(((_b = req.query) === null || _b === void 0 ? void 0 : _b.pageSize) || 20),
        });
        fs_1.default.readFile(__dirname + "/../../data/userData.json", "utf-8", (error, data) => {
            let userData = JSON.parse(data);
            return res.status(200).json({
                status: 200,
                data: {
                    items: userData.slice((page - 1) * pageSize, page * pageSize),
                    total: userData.length,
                },
            });
        });
    }
    catch (e) {
        return res.status(400).json({
            status: 400,
            error: e,
        });
    }
};
exports.getAllUsers = getAllUsers;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = zod_1.z.string().parse(req.params.id);
        fs_1.default.readFile(__dirname + "/../../data/userData.json", "utf-8", (error, data) => __awaiter(void 0, void 0, void 0, function* () {
            let userData = JSON.parse(data);
            userData = userData.filter((user) => user.id !== id);
            yield fs_1.default.writeFile(__dirname + "/../../data/userData.json", JSON.stringify(userData), undefined, (error) => {
                return res.status(204).json({});
            });
        }));
    }
    catch (e) {
        return res.status(400).json({
            status: 400,
            error: e,
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map