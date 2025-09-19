const express = require('express');
const app = express();
const port = 3000;
//impot itme router file
const item =require('./routers/item')
const birds=require('./routers/birds')
// load into aplication
app.use('/api',item);
app.use('/filler',birds);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
