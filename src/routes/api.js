import { Router } from "express";
import _ from "underscore";
import fs from "fs";
import path from "path";
import jsonImport from "../util/jsonImport.js";
const router = Router();

router.get("/", async (req, res) => {
  let response = await jsonImport("/data/users.json");

  res.status(200).json(response);
});

router.post("/", async (req, res) => {
  let response = await jsonImport("/data/users.json");

  req.body.id = response.length + 1;
  response.push(req.body);

  fs.writeFile(
    path.join(process.cwd(), "data/users.json"),
    JSON.stringify(response, null, 2),
    () => {
      res.status(200).send({
        status: "OK",
      });
    }
  );
});

//a

export default router;
