// @ts-nocheck
import mongoose from "mongoose";

require("dotenv").config();

const optionsConnection: Record<any, any> = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const makeNewConnection = (uri: string) => {
  const db = mongoose.createConnection(uri, optionsConnection);

  db.on("error", function (error) {
    console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
    db.close().catch(() =>
      console.log(`MongoDB :: failed to close connection ${this.name}`)
    );
  });

  db.on("connected", function () {
    mongoose.set("debug", function (col, method, query, doc) {
      console.log(
        `MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(
          query
        )},${JSON.stringify(doc)})`
      );
    });
    console.log(`MongoDB :: connected ${this.name}`);
  });

  db.on("disconnected", function () {
    console.log(`MongoDB :: disconnected ${this.name}`);
  });

  return db;
};

const mongo = makeNewConnection(process.env.MONGO_URI);

const connectionDB = {
  mongo,
};

export default connectionDB;