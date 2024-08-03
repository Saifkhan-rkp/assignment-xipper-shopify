require('dotenv').config();
//Database Connection
require('./utils/db_connection');

const http = require('http');
const app = require('./App');

const serevr= http.createServer(app);

serevr.listen(process.env.PORT,()=>{
    console.log(`Server is On\n link http://localhost:${process.env.PORT}`);
});