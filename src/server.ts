import * as express from "express";
import subscribersRouter from "./routes/subscribers";

const app = express();

//Accept JSON
app.use(express.json());

app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("server started"));
