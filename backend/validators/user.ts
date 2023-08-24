import { z } from "zod";

export const getAllUsersParamsSchema = z.object({
  page: z.number().min(1),
  pageSize: z.number().min(1),
});
