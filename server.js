const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins (you can restrict this in production)
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'CORS proxy server is running' });
});

// CORS proxy endpoint for fetching TradingView images
app.post('/api/fetch-image', async (req, res) => {
    try {
        const { imageUrl } = req.body;

        // Validate the request
        if (!imageUrl) {
            return res.status(400).json({
                error: 'Missing imageUrl parameter'
            });
        }

        // Security: Only allow TradingView snapshot URLs
        if (!imageUrl.includes('tradingview.com/snapshots/')) {
            return res.status(403).json({
                error: 'Only TradingView snapshot URLs are allowed'
            });
        }

        console.log(`Fetching image: ${imageUrl}`);

        // Fetch the image from TradingView
        const response = await fetch(imageUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
        }

        // Get the image buffer
        const buffer = await response.buffer();

        // Convert to base64
        const base64Data = buffer.toString('base64');
        const dataUri = `data:image/png;base64,${base64Data}`;

        console.log(`Successfully converted image (${buffer.length} bytes)`);

        // Return the base64 data
        res.json({
            success: true,
            dataUri: dataUri,
            size: buffer.length
        });

    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).json({
            error: 'Failed to fetch and convert image',
            message: error.message
        });
    }
});

// Serve the static HTML file
app.use(express.static('.'));

// Start the server
app.listen(PORT, () => {
    console.log(`\n🚀 CORS Proxy Server running on http://localhost:${PORT}`);
    console.log(`📊 Trading Journal available at http://localhost:${PORT}/index.html`);
    console.log(`🔧 API endpoint: POST http://localhost:${PORT}/api/fetch-image\n`);
});
