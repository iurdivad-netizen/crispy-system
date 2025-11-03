# Trading Journal

A comprehensive forex trading journal application for tracking and analyzing your trades.

## Features

- Track trade entries and exits with detailed information
- Upload screenshots or link TradingView charts
- Convert TradingView charts to embedded screenshots
- Print individual trades or all trades
- Export/import data as JSON
- Dark-themed, responsive interface

## Recent Fixes

### 1. TradingView Charts in Print Preview
TradingView chart URLs now display in print preview even if not converted to screenshots. The print preview will:
- Show converted screenshots if available
- Fall back to displaying TradingView chart images directly if only URLs are provided
- Display a fallback link if the image cannot be loaded

### 2. Convert to Image Button
The "Convert to Image" button now works using a proxy server to bypass CORS restrictions. See setup instructions below.

## Setup & Installation

### Option 1: Using Without Proxy (Limited Functionality)
Simply open `index.html` in your web browser. The app will work fully, but the "Convert to Image" button will not function due to CORS restrictions.

### Option 2: With Proxy Server (Full Functionality)

#### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

#### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the proxy server:**
   ```bash
   npm start
   ```

3. **Open the application:**
   Open your browser and navigate to:
   ```
   http://localhost:3000/index.html
   ```

#### Development Mode
For auto-restart on file changes:
```bash
npm run dev
```

## How to Use

### Adding a Trade
1. Click "Add New Trade" button
2. Fill in the trade details (entry/exit prices, dates, etc.)
3. Optionally add TradingView chart URLs or screenshots

### Converting TradingView Charts to Screenshots
1. Enter a TradingView snapshot URL (format: `https://tradingview.com/x/ABC123/`)
2. Click the "📸 Convert to Image" button
3. The chart will be fetched via the proxy server and saved as a screenshot
4. **Note:** Proxy server must be running for this feature to work

### Printing Trades
- **Single Trade:** Click the print icon on any trade card
- **All Trades:** Use the "Print All Trades" button at the top
- TradingView charts will automatically appear in the print preview

### Exporting/Importing Data
- **Export:** Click "Export to JSON" to download all your trade data
- **Import:** Click "Import from JSON" to restore or merge trade data

## Technical Details

### Proxy Server
The proxy server (`server.js`) provides a CORS workaround for fetching TradingView snapshot images:

- **Endpoint:** `POST /api/fetch-image`
- **Security:** Only allows TradingView snapshot URLs
- **Process:** Fetches image server-side and converts to base64 data URI

### File Structure
```
├── index.html          # Main application (standalone HTML file)
├── server.js           # Express proxy server
├── package.json        # Node.js dependencies
├── README.md          # This file
└── .gitignore         # Git ignore rules
```

### API Endpoint

**POST /api/fetch-image**

Request body:
```json
{
  "imageUrl": "https://s.tradingview.com/snapshots/x/ABC123.png"
}
```

Response:
```json
{
  "success": true,
  "dataUri": "data:image/png;base64,iVBORw0KG...",
  "size": 123456
}
```

## Troubleshooting

### Convert to Image Not Working
1. Ensure the proxy server is running (`npm start`)
2. Check that you're accessing the app via `http://localhost:3000/index.html`
3. Verify the TradingView URL is in the correct format: `https://tradingview.com/x/ABC123/`
4. Check the browser console and server logs for error messages

### Print Preview Shows No Charts
1. Verify that you've either:
   - Converted TradingView URLs to screenshots, OR
   - Entered valid TradingView snapshot URLs
2. Check that the TradingView snapshot is publicly accessible
3. Try opening the TradingView URL directly in your browser to confirm it's valid

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
PORT=3001 npm start
```

## Browser Compatibility
- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with ES6+ support

## Data Storage
All trade data is stored locally in your browser's localStorage. No data is sent to external servers except when using the "Convert to Image" feature (which fetches images from TradingView via the proxy).

## License
MIT
