const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
console.log("Supabase Client Initialized!");

// API Route: Save an email to the database
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Insert the email into the 'subscribers' table in Supabase
        const { data, error } = await supabase
            .from('subscribers')
            .insert([{ email: email }]);

        if (error) throw error;

        res.status(200).json({ message: "Successfully subscribed!" });
    } catch (error) {
        console.error("Database Error:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));