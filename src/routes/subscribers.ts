import * as express from "express";

const router = express.Router();

// Get all subscribers
router.get("/", (req, res) => {
  res.send("Hello World");
});

// Get one subscriber
router.get("/:id", (req, res) => {});

// Create one subscriber
router.post("/", (req, res) => {});

// Update one subscriber
router.patch("/:id", (req, res) => {});

// Delete one subscriber
router.delete("/:id", (req, res) => {});

export default router;
