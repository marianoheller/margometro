import express from 'express';

const app = express();

app.get('/api/v1/apis', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Apis retrieved successfully',
    todos: [
        { ApiName: "Weather" },
        { ApiName: "BA Subte" },
        { ApiName: "BA Tránsito" },
        { ApiName: "BCRA" }
    ]
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});