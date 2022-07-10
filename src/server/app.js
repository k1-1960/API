import express from "express";
import { config } from "dotenv";
import apiRoutes from "../routes/api.js";
config();

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(process.env.PORT, () =>
  console.log(
    "Server in port " + process.env.PORT,
    "http://localhost:" + process.env.PORT
  )
);

export default app;
