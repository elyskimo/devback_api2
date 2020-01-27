const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Import routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

// Connexion BDD
mongoose.connect(process.env.DB_CONNECT,
                  { useNewUrlParser: true, useUnifiedTopology: true },
                  () => console.log("Connected to MongoDB"));

// Middleware
app.use(express.json());

// Routes middlewares
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoutes);
app.listen(3000, () => console.log("Server up and running on localhost:3000"));
