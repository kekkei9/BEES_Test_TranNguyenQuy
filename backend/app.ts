import express from "express";
import userRoute from "./routes/userRoutes";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3001;

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
