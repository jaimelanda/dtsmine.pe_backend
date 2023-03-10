import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createRoles } from "./libs/initialSetup";
import newsRoutes from "./routes/news.routes";
import authRoutes from "./routes/auth.routes";
import userRouter from "./routes/user.routes";

const app = express();
createRoles();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({
    name: "jaime",
    author: "autorjaiem",
    description: "description",
  });
});

app.use("/api/news", newsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRouter);

export default app;
