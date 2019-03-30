const express = require(`express`);
const mongoose = require(`mongoose`);
const bodyParser = require('body-parser');
const cors = require(`cors`);
const users = require(`./routes/api/users`);
const profile = require(`./routes/api/profile`);
const posts = require(`./routes/api/posts`);

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB Config
const db = require(`./config/keys`).mongoURI;

//Connect to MongoDB

mongoose
    .connect(db)
    .then (() => console.log(`Mongodb connected`))
    .catch (err => console.loge(err));


app.get(`/`, (req, res) => res.send(`Hello World!`));

app.use(cors({
    origin: `http://localhost:3000`,
    credentials: true
  }));
  
// Use Routes
app.use(`/api/users`, users);
app.use(`/api/profile`, profile);
app.use(`/api/posts`, posts);

const port = process.env.PORT || 5080;

app.listen(port, () => console.log(`Server running on port ${port}`));
