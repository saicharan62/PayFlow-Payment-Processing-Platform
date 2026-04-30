const express = require("express");

const app = express();

// middleware
app.use(express.json());

// routes
const routes = require("./routes");
app.use("/api", routes);

// health check
app.get("/", (req, res) => {
    res.send("API running 🚀");
});

// start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
