const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps Deployment Demo</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #111827;
                    color: white;
                    text-align: center;
                    padding-top: 100px;
                }

                .card {
                    max-width: 600px;
                    margin: auto;
                    padding: 40px;
                    border-radius: 15px;
                    background: #1f2937;
                }

                .status {
                    color: #22c55e;
                    font-size: 24px;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>DevOps Deployment Demo 🚀</h1>

                <p class="status">
                    Application is running successfully ✅
                </p>

                <p>Version: 2.0.0</p>
                <p>Environment: AWS EC2</p>
                <p>Deployment: GitHub Actions + Docker</p>
            </div>
        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});