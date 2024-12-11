const express = require('express');
const mongoose = require('mongoose');
const CategoryApi = require('./routes/Category.route');
const cors = require('cors');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const detailsofsurvay = require('./routes/survaydetail.route');


// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

// MongoDB Connection
const url = 'mongodb://localhost:27017/Task1';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.log('Error connecting to MongoDB:', err));

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API Routes
app.use('/api', CategoryApi);
app.use('/api', detailsofsurvay);

// Example data
const statsData = {
    totalViews: {
      value: '$3.456K',
      percentage: '0.43%',
      direction: '↑',
      icon: '👁️',
      title: 'Total views',
    },
    totalProfit: {
      value: '$45.2K',
      percentage: '4.35%',
      direction: '↑',
      icon: '🛒',
      title: 'Total Profit',
    },
    totalProduct: {
      value: '2,450',
      percentage: '2.59%',
      direction: '↑',
      icon: '🛍️',
      title: 'Total Product',
    },
    totalUsers: {
      value: '3,456',
      percentage: '0.95%',
      direction: '↓',
      icon: '👥',
      title: 'Total Users',
    },
  };
  
  app.get('/api/stats', (req, res) => {
    res.json(statsData);
  });


// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
