const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth.routes');
const userRoute = require('./routes/users.routes');


dotenv.config();
app.use(express.json());


const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, {})
    .then(() => console.log("Connected to the MongoDB"))
    .catch((error) => console.log(error));

app.use('/api/auth', authRoute);
app.use('/api/users/', userRoute);


app.listen(port, () => {
    console.log(`server is running on port ${port}.  BOOM BABY!!!`)
});