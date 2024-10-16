const mongoose = require('mongoose');

// Connect to MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/labs-mongo-skinny-slimy-bear', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;