const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const webCategoriesRoutes = require('./routes/categories');
const navigationRoutes = require('./routes/navigation')
const cors = require('cors');

app.use(cors());  
app.use(cors({ origin: 'http://localhost:3000',    
                credentials: true,
            }));

mongoose.connect('mongodb+srv://lohtester:MLjU7nEYl3Ek50NH@cluster0.knkingd.mongodb.net/tester').then((value) => {
    console.info('Connected to MongoDB');
}).catch((e) => {
    console.error('Connection error', e.message);
});

app.use('/api/web-categories', webCategoriesRoutes);
app.use('/api/navigations', navigationRoutes);

app.get('/', async (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
