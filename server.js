const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "Agentic AI Portfolio Web Service", timestamp: new Date().toISOString() });
});

app.get("/api/message", (req, res) => {
  res.json({
    title: "Agentic AI Customer Support Improvement",
    message: "This web service demonstrates a problem-solving solution for SME retail banking customer support operations.",
    modules: ["A1 Decisions", "A2 Corrective Actions", "A3 Root Cause", "A4 Testing", "A5 KPIs", "A6 Stakeholder Reporting"]
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Agentic AI Portfolio Web Service running on port ${PORT}`);
});
