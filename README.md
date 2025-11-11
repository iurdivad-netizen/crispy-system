# Trading Journal (Z-APP)

A comprehensive, professional-grade forex trading journal application for tracking, analyzing, and optimizing your trading performance. This single-file application runs entirely in your browser with no installation required.

## Features Overview

### Core Trade Management
- **Complete Trade Tracking**: Record entry/exit prices, dates, volume, commission, swap, and balance
- **Trade Categorization**: Setup type, market condition, emotional state tracking
- **Custom Notes & Journaling**: Document trade rationale and lessons learned
- **Rule Adherence Tracking**: Mark which trading rules were followed per trade
- **Screenshots & Charts**: Upload entry/exit screenshots or link TradingView charts
- **Edit & Delete**: Modify or remove trades at any time

### Performance Statistics
- **Win Rate**: Track your success percentage
- **Profit Factor**: Ratio of gross profit to gross loss
- **Risk-Reward Ratio**: Average win/loss ratio
- **Expectancy**: Expected value per trade
- **Sharpe Ratio**: Risk-adjusted returns
- **Max Drawdown**: Largest peak-to-trough decline ($ and %)
- **Recovery Factor**: P/L divided by max drawdown
- **Streak Analysis**: Current, longest win/loss streaks
- **Configurable Display**: Show/hide individual statistics
- **Monthly Filtering**: View stats for specific months or all-time

### Advanced Charts & Visualizations
- **Equity Curve**: Account balance progression over time
- **Daily P/L Chart**: Profit/loss by trading day
- **Win/Loss Distribution**: Visual breakdown of winning vs losing trades
- **Chart Zoom Controls**: 1 month, 3 months, 6 months, 1 year, all time
- **Toggle Individual Charts**: Show/hide specific charts

### Time-Based Analytics
- **Monthly Performance**: P/L trends and statistics by month
- **Day of Week Analysis**: Identify your best and worst trading days (Monday-Sunday)
- **Hourly Performance**: Analyze performance by entry and exit hour (0-23)
- **Calendar View**: Visual monthly calendar with color-coded P/L per day

### Performance Breakdowns
- **By Setup Type**: Performance analysis per setup pattern (Breakout, Pullback, Reversal, Range, Trend Following)
- **By Market Condition**: Results in Trending, Ranging, or Volatile markets
- **By Emotional State**: How psychology affects your trading (Confident, Uncertain, Fearful, Greedy, Disciplined, Impulsive)
- **By Rule Adherence**: Compare performance when following vs breaking rules

### Custom Trading Rules System
- **Create Up to 10 Rules**: Define personalized trading criteria
- **Rule Performance Tracking**: Win rate and P/L per rule
- **Rule Combinations Analysis**: Identify winning patterns from all possible rule combinations
- **Enable/Disable Rules**: Flexible rule management

### Monte Carlo Simulation
- **Standard Mode**: Run 100-10,000 simulations with configurable parameters
- **Prop Firm Challenge Mode**: Test your strategy against challenge requirements
  - Profit targets, max drawdown, daily loss limits
  - Minimum trading days requirement
  - Customizable win rate, average win/loss, position sizing
  - Risk-to-reward ratio calculator
  - Success rate analysis with violation tracking
- **Visualization**: Distribution charts, equity curves, drawdown analysis
- **Probability Analysis**: 10th, 50th, 90th percentile projections
- **Risk of Ruin**: Calculate probability of significant account loss

### AI-Powered Analysis
- **Auto-Generated Prompts**: Pre-formatted for ChatGPT or Claude
- **Strategy Context**: Include your trading strategy description
- **Example Strategies**: Load pre-written templates (ICT, Supply/Demand, Price Action, etc.)
- **Customizable Sections**: Choose which analysis components to include
- **One-Click Copy**: Easy clipboard copying for AI tools

### Data Management
- **Auto-Save System**: Optional 30-second automatic saving with status indicator
- **Multiple Import Formats**:
  - CSV (cTrader, MT4, MT5 with platform-specific parsing)
  - JSON (full restore, append, overwrite, or update modes)
  - MetaTrader API (real-time import via MetaApi integration)
- **Flexible Export Options**:
  - Full export (trades, screenshots, settings)
  - Trades only
  - Without screenshots
  - Screenshots only
  - CSV format
- **Storage Monitor**: Real-time usage tracking with size estimates
- **IndexedDB Storage**: Supports large datasets (100MB limit)

### Trade History Table
- **Customizable Columns**: Show/hide specific data fields
- **Sortable**: Click any column header to sort
- **Expandable Details**: Click trades to view complete information
- **Column Configuration**: Save your preferred layout

### Printing
- **Single Trade Print**: Print icon on each trade card
- **Batch Printing**: Print all trades at once
- **Auto Chart Loading**: TradingView images automatically preloaded
- **Print-Optimized Layout**: Clean formatting for physical/PDF output

### Account & API Settings
- **Starting Balance**: Configure initial account equity
- **Platform Selection**: Choose cTrader, MT4, or MT5
- **MetaTrader API**: Enable real-time trade import with auth token and account ID
- **Secure Credential Storage**: Password masking and persistent configuration

### User Interface
- **Dark Mode**: Automatic dark theme based on system preferences
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Collapsible Sections**: Expand/collapse all major sections
- **Info Tooltips**: Detailed help icons throughout the interface
- **Color Coding**: Green for profits, red for losses
- **Modern, Professional Design**: Clean and intuitive layout

## What Makes This Special

- **Single File Application**: Entire app in one HTML file - no installation, no setup, just open in browser
- **100% Privacy**: All data stored locally in your browser, never sent to external servers
- **No Backend Required**: Completely client-side operation
- **Offline Capable**: Works without internet (except for API imports)
- **Zero Dependencies**: No npm, no build process, no configuration
- **Cross-Platform**: Works on any device with a modern browser
- **Professional-Grade**: Enterprise-level analytics and risk management tools
- **Prop Firm Ready**: Monte Carlo simulations specifically designed for challenge testing

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
- **Export Options:** Choose from multiple export formats:
  - Full export (everything including screenshots)
  - Trades only
  - Without screenshots
  - Screenshots only
  - CSV format
- **Import Options:**
  - **JSON Import:** Restore or merge trade data with append/overwrite/update modes
  - **CSV Import:** Import from cTrader, MT4, or MT5 with platform-specific parsing
  - **API Import:** Real-time import from MetaTrader via MetaApi integration

### Using Performance Analytics
1. **View Statistics:** Scroll to the Performance Statistics section to see key metrics
2. **Configure Visible Stats:** Click the gear icon to show/hide specific statistics
3. **Filter by Month:** Use the month selector to view stats for specific time periods
4. **Explore Breakdowns:** View performance by setup type, market condition, emotional state, or rule adherence

### Viewing Charts
1. Navigate to the Charts section
2. Use zoom controls to adjust time range (1 month to all time)
3. Toggle individual charts on/off using the configuration panel
4. View equity curve, daily P/L, and win/loss distribution

### Using Custom Trading Rules
1. Navigate to the Custom Rules section
2. Create up to 10 custom trading rules with descriptive names
3. When adding/editing trades, select which rules you followed
4. View rule performance statistics and combinations analysis
5. Identify which rule patterns lead to the best results

### Running Monte Carlo Simulations
1. **Standard Mode:**
   - Set number of simulations (100-10,000)
   - Configure trade count and position sizing
   - View probability analysis and risk of ruin
2. **Prop Firm Challenge Mode:**
   - Enter challenge parameters (profit target, max drawdown, daily loss limit)
   - Set minimum trading days and trades per day range
   - Configure win rate, average win/loss, and position sizing
   - Run simulation to see pass rate and violation analysis
   - Review detailed statistics and equity curve distributions

### Using AI-Powered Analysis
1. Navigate to the AI Analysis section
2. Optionally add your trading strategy description
3. Select which data sections to include in the prompt
4. Choose specific trades or include all trades
5. Click "Copy Prompt to Clipboard"
6. Paste into ChatGPT, Claude, or your preferred AI tool
7. Get personalized insights and recommendations

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
All trade data is stored locally in your browser using IndexedDB (primary storage, 100MB limit) with localStorage as fallback. The application includes:
- **Auto-Save System:** Optional 30-second automatic saving
- **Storage Monitor:** Real-time usage tracking
- **Large File Support:** Handle extensive trade histories and screenshots
- **Data Privacy:** No data is ever sent to external servers (except when using optional API imports)

## License
MIT
