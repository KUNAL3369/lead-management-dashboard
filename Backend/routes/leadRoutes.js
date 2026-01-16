const express = require("express");
const Lead = require("../models/Lead");
const router = express.Router();

// GET /api/leads
router.get("/", async (req, res) => {
  const { search = "", status, page = 1, limit = 10 } = req.query;

  const query = {
    name: { $regex: search, $options: "i" }
  };

  if (status) query.status = status;

  const leads = await Lead.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Lead.countDocuments(query);

  res.json({ leads, total });
});

// GET /api/leads/:id
router.get("/:id", async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  res.json(lead);
});

module.exports = router;
