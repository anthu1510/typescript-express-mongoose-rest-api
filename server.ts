import Env from "dotenv";
import { createServer } from "http";
import app from "./src/app";
import { connect } from "mongoose";
import path from "path";

if (process.env.NODE_ENV === "development") {
  Env.config({ path: path.join(__dirname, ".env") });
} else {
  Env.config({ path: path.join(__dirname, ".env_prod") });
}
const server = createServer(app);

connect(`${process.env.MONGODB_URL}`)
  .then(() => {
    server.listen(process.env.PORT, () =>
      console.log(
        `server started at http://${process.env.HOST}:${process.env.PORT}`
      )
    );
  })
  .catch((err) => console.log(err.message));
