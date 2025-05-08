import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneBook = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [entries, setEntries] = useState([]);

    // Fetch phonebook entries
    useEffect(() => {
        axios.get('http://localhost:8080/phonebook')
            .then(res => setEntries(res.data))
            .catch(err => console.log(err));
    }, []);

    // Add new entry
    const PhoneBook = require('./model/PhoneBook');

    app.post('/add-phone', async (req, res) => {
        const phoneNumber = new PhoneBook(req.body);
        try {
            await phoneNumber.save();
            res.status(201).json({
                status: 'Success',
                data: {
                    phoneNumber
                }
            });
        } catch (err) {
            res.status(500).json({
                status: 'Failed',
                message: err
            });
        }
    });
    
    // Update entry
    app.patch('/update-phone/:id', async (req, res) => {
        const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        try {
            res.status(200).json({
                status: 'Success',
                data: {
                    updatedPhone
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: 'Failed',
                message: err
            });
        }
    });
    

    // Delete entry
    app.delete('/delete-phone/:id', async (req, res) => {
        await PhoneBook.findByIdAndDelete(req.params.id);
        try {
            res.status(204).json({
                status: 'Success',
                data: {}
            });
        } catch (err) {
            res.status(500).json({
                status: 'Failed',
                message: err
            });
        }
    });
    
    return (
        <div>
            <h1>PhoneBook</h1>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                <button onClick={addEntry}>Add</button>
            </div>
            <ul>
                {entries.map(entry => (
                    <li key={entry._id}>
                        {entry.name} - {entry.phone}
                        <button onClick={() => updateEntry(entry._id)}>Update</button>
                        <button onClick={() => deleteEntry(entry._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhoneBook;
