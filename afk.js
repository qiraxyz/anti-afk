// library import
const express = require('express');
const axios = require('axios');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// dex

const afk = express();
const port = 3000;





// status
afk.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})

