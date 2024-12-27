const express = require('express');
const path = require('path');
const log = require('@vladmandic/pilogger');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/anti-spoofing/model/model', express.static(path.join(__dirname, 'model')));

app.listen(3000, () => {
  log.info('Server is running on http://localhost:3000');
});