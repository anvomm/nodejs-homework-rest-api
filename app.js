const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api");
const { errorHandler } = require("./helpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/api/contacts", contactsRouter);

app.use(errorHandler);

module.exports = app;
