const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const movieRoutes = require('./routes/movieRoutes');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: `${process.env.FRONTEND_URL}`,
    // Other CORS options if needed
  };
// MongoDB connection
mongoose.connect(process.env.DB_URL, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
})
.then(() => console.log('\nMongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));
app.use(cors(corsOptions));
// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api/movies/v1', movieRoutes);

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));