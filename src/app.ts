import express from "express";
import allAoutes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes file
allAoutes(app);

export default app;
