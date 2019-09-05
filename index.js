require('dotenv').config(); // Needs to load before any other code that needs it.
const server = require('./api/server.js');

const port = 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
