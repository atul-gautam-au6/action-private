import express from 'express';
const app = express();
app.use('/', (req, res) => {
  console.log('you are in......');
});

const PORT = 3000;

app.listen(PORT, console.log(`Server Running  on port ${PORT}`));
