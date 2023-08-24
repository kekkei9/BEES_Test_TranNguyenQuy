import { getAllUsersParamsSchema } from "./../validators/user";
import { RequestHandler } from "express";
import fs from "fs";
import { z } from "zod";

export const getAllUsers: RequestHandler = (req, res) => {
  try {
    const { page, pageSize } = getAllUsersParamsSchema.parse({
      page: Number(req.query?.page || 1),
      pageSize: Number(req.query?.pageSize || 20),
    });

    fs.readFile(
      __dirname + "/../../data/userData.json",
      "utf-8",
      (error, data) => {
        let userData = JSON.parse(data);
        return res.status(200).json({
          status: 200,
          data: {
            items: userData.slice((page - 1) * pageSize, page * pageSize),
            total: userData.length,
          },
        });
      }
    );
  } catch (e) {
    return res.status(400).json({
      status: 400,
      error: e,
    });
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  try {
    const id = z.string().parse(req.params.id);

    fs.readFile(
      __dirname + "/../../data/userData.json",
      "utf-8",
      async (error, data) => {
        let userData = JSON.parse(data);
        userData = userData.filter((user: any) => user.id !== id);

        await fs.writeFile(
          __dirname + "/../../data/userData.json",
          JSON.stringify(userData),
          undefined,
          (error) => {
            return res.status(204).json({});
          }
        );
      }
    );
  } catch (e) {
    return res.status(400).json({
      status: 400,
      error: e,
    });
  }
};
