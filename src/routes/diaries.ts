import express from "express"; // ESModule

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("valorant");
});

router.post("/", (_req, res) => {
  res.send("saving valorant");
});

export default router;
