const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passport = require('passport');
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

app.use('/docs', express.static('./docs'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes middlewares
app.get('/', (req,res) => {
  res.send("Accueil");
});
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoutes);
app.listen(3000, () => console.log("Server up and running on localhost:3000"));
