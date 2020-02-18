const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      dotenv = require('dotenv'),
      bodyParser = require('body-parser'),
      passport = require('passport');
dotenv.config();

// Import routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

// Connexion BDD
mongoose.connect(process.env.DB_CONNECT,
                  { useNewUrlParser: true, useUnifiedTopology: true },
                  () => console.log("Connected to MongoDB"));

// Passport config
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes middlewares
app.get('/', (req,res) => {
  res.sendFile(__dirname+'/templates/welcome.html');
});
app.use('/api/user', authRoutes); // route vers l'authentification
app.use('/api/posts', postRoutes); // route vers l'API
app.use('/docs', express.static('./docs')); // route vers la documentation
app.listen(3000, () => console.log("Server up and running on localhost:3000"));
