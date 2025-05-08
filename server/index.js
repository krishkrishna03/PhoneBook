const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/phonebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected...'))
.catch(err => console.log('Database connection error: ', err));

// Import the PhoneBook model after establishing the database connection
const PhoneBook = require('./models/PhoneBook');

// Create a new phonebook entry
app.post('/phonebook', async (req, res) => {
    const { name, phone } = req.body;
    const newEntry = new PhoneBook({ name, phone });
    try {
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create entry' });
    }
});

// Get all phonebook entries
app.get('/phonebook', async (req, res) => {
    try {
        const entries = await PhoneBook.find();
        res.status(200).json(entries);
    } catch (err) {
        res.status(400).json({ error: 'Failed to fetch entries' });
    }
});

// Update a phonebook entry
app.put('/phonebook/:id', async (req, res) => {
    const { name, phone } = req.body;
    try {
        const updatedEntry = await PhoneBook.findByIdAndUpdate(
            req.params.id,
            { name, phone },
            { new: true }
        );
        res.status(200).json(updatedEntry);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update entry' });
    }
});

// Delete a phonebook entry
app.delete('/phonebook/:id', async (req, res) => {
    try {
        await PhoneBook.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Entry deleted' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to delete entry' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
});
