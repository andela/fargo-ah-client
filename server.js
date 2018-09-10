import express from 'express';
import cors from 'cors';
import path from 'path';

const corOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const port = process.env.PORT || 3000;
const app = express();

// configure third party middleware
app.use(cors(corOptions));

app.use(express.static(__dirname));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`App started on ${port}`));
