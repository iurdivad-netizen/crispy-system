# Trading Journal

A comprehensive forex trading journal application for tracking and analyzing your trades.

## Features

- Track trade entries and exits with detailed information
- Upload screenshots or link TradingView charts
- Print individual trades or all trades with chart display
- Export/import data as JSON
- Dark-themed, responsive interface

## Recent Fix: TradingView Charts in Print Preview

TradingView chart URLs now display in print preview with automatic image preloading. When you click print:

1. **Automatic Preloading**: The app automatically preloads all TradingView chart images in the background
2. **Loading Indicator**: You'll see a message showing how many charts are being loaded
3. **Smart Display**: The print preview will:
   - Show uploaded screenshots if available
   - Fall back to displaying TradingView chart images directly from URLs
   - Display a fallback link if the image cannot be loaded

This ensures charts are cached and ready for printing, providing the best print quality.

## How to Use

Simply open `index.html` in your web browser. No installation or server required.

### Adding a Trade
1. Click "Add New Trade" button
2. Fill in the trade details (entry/exit prices, dates, etc.)
3. Optionally add TradingView chart URLs or upload screenshots

### Adding TradingView Charts
1. Enter a TradingView snapshot URL (format: `https://tradingview.com/x/ABC123/`)
2. Click "🔗 Open" to view the chart in a new window
3. The chart will automatically display in print preview

**Tip:** To save TradingView charts as screenshots:
- Open the TradingView link
- Take a screenshot using your OS screenshot tool
- Upload the screenshot using the "Entry Screenshot" or "Exit Screenshot" upload buttons

### Printing Trades
- **Single Trade:** Click the print icon on any trade card
- **All Trades:** Use the "Print All Trades" button at the top

**Automatic Chart Loading:**
When you click print, the app will:
1. Show a loading message indicating how many TradingView charts are being preloaded
2. Automatically fetch and cache all TradingView chart images in the background
3. Wait up to 5 seconds per image for loading
4. Open the print preview with all charts ready to display

This ensures the best print quality and prevents broken images in your printed reports.

### Exporting/Importing Data
- **Export:** Click "Export to JSON" to download all your trade data
- **Import:** Click "Import from JSON" to restore or merge trade data

## Technical Details

### File Structure
```
├── index.html          # Main application (standalone HTML file)
├── README.md          # This file
└── API_INTEGRATION_GUIDE.md  # API documentation
```

## Troubleshooting

### Print Preview Shows No Charts
1. Verify that you've either:
   - Uploaded screenshots, OR
   - Entered valid TradingView snapshot URLs
2. Check that the TradingView snapshot is publicly accessible
3. Try opening the TradingView URL directly in your browser to confirm it's valid

### TradingView Images Not Loading
If TradingView images don't load in print preview despite automatic preloading:
- Check your internet connection (images are fetched from TradingView's CDN)
- The app waits up to 5 seconds per image - if your connection is slow, some images may timeout
- TradingView may have content delivery restrictions for certain regions
- **Workaround**: Take a screenshot and upload it manually for guaranteed inclusion
- A fallback link will still be displayed so you can reference the chart

### Slow Print Preview Loading
If the print preview takes a long time to open:
- This is normal when you have many TradingView URLs without uploaded screenshots
- The app is preloading all chart images in the background (up to 5 seconds per image)
- Wait for the loading message to complete
- To speed this up: upload screenshots instead of using URLs only

## Browser Compatibility
- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with ES6+ support

## Data Storage
All trade data is stored locally in your browser's localStorage. No data is sent to external servers.

## License
MIT
