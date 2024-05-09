const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://<username>:<password>@<your-cluster-url>/yourDatabaseName?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.error('MongoDB Atlas connection error:', err));
