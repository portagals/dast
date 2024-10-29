import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

// Set up Express app
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure 'uploads' directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(__dirname + '/uploads'));

// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the directory to store images
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); // Rename the file
    }
});
const upload = multer({ storage });

// MongoDB connection string
const mongoURI = 'mongodb+srv://ecitizenkpgov:pakisTan90@dastak.34xvl.mongodb.net/?retryWrites=true&w=majority&appName=dastak';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Define Mongoose Schema and Model
const weaponSchema = new mongoose.Schema({
    name: String,
    fname: String,
    cnic: String,
    address: String,
    license: String,
    weapon: String,
    cartridges: String,
    issue: Date,
    valid: Date,
    image: String
});

const Weapon = mongoose.model('Weapon', weaponSchema);

// Route to create a new entry with image upload
app.post('/weapons', upload.single('image'), async (req, res) => {
    const { name, fname, cnic, address, license, weapon, cartridges } = req.body;
    const issue = new Date();
    const valid = new Date();
    valid.setFullYear(issue.getFullYear() + 5); // Set validity to 5 years from issue date
    
    const imagePath = req.file ? req.file.path : null; // Get the path of the uploaded image

    try {
        const newWeapon = new Weapon({
            name,
            fname,
            cnic,
            address,
            license,
            weapon,
            cartridges,
            issue,
            valid,
            image: imagePath
        });
        const savedWeapon = await newWeapon.save();
        res.json(savedWeapon);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to read all entries
app.get('/weapons', async (req, res) => {
    try {
        const weapons = await Weapon.find();
        res.json(weapons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to get a single entry by CNIC and/or License
app.post('/weapons/details', async (req, res) => {
    const { license } = req.body; // Extract CNIC and License from the request body

    if ( !license) {
        return res.status(400).json({ error: 'At least one of CNIC or License must be provided' });
    }

    try {
        const searchCriteria = {};
        if (license) searchCriteria.license = license;

        const weapon = await Weapon.findOne(searchCriteria);

        if (weapon) {
            res.json(weapon);
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to update an entry with image upload
app.put('/weapons/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { name, fname, cnic, address, license, weapon, cartridges, issue, valid } = req.body;
    const imagePath = req.file ? req.file.path : null; // Get the path of the uploaded image

    try {
        const updatedWeapon = await Weapon.findByIdAndUpdate(
            id,
            {
                name,
                fname,
                cnic,
                address,
                license,
                weapon,
                cartridges,
                issue,
                valid,
                image: imagePath
            },
            { new: true } // Return the updated document
        );

        if (updatedWeapon) {
            res.json(updatedWeapon);
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to delete an entry
app.delete('/weapons/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Weapon.findByIdAndDelete(id);
        if (result) {
            res.json({ message: 'Data deleted successfully' });
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
