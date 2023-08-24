"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersParamsSchema = void 0;
const zod_1 = require("zod");
exports.getAllUsersParamsSchema = zod_1.z.object({
    page: zod_1.z.number().min(1),
    pageSize: zod_1.z.number().min(1),
});
//# sourceMappingURL=user.js.map