# Historic Trades API Integration Guide

## Overview

The Trading Journal now supports importing historic trades directly from trading platform APIs. This eliminates the need for manual CSV exports and enables automated trade synchronization.

## Supported Platforms

### 1. MetaTrader 4/5 (via MetaApi) ✅ **Ready**
- **Status**: Fully implemented and ready to use
- **Provider**: MetaApi Cloud Service
- **Authentication**: Auth token + Account ID
- **Rate Limit**: 10 requests per second
- **Documentation**: https://metaapi.cloud/

### 2. cTrader Open API 🔶 **Coming Soon**
- **Status**: Structure implemented, WebSocket integration required
- **Protocol**: WebSocket + Protocol Buffers
- **Rate Limit**: 5 requests per second for historical data
- **Note**: Requires additional JavaScript libraries for WebSocket and protobuf support
- **Workaround**: Use CSV import for cTrader data

## How to Use

### Setting Up MetaTrader API

1. **Get Your API Credentials**
   - Visit https://app.metaapi.cloud/token
   - Create an account or sign in
   - Copy your auth token
   - Note your account ID

2. **Configure API Settings in the App**
   - Open the Trading Journal
   - Click "🔌 API Settings" section
   - Enable MetaTrader API checkbox
   - Paste your auth token
   - Enter your account ID
   - Click "💾 Save API Settings"

3. **Import Historic Trades**
   - Click "🔌 Import from API" button (in top controls or in API Settings section)
   - Select platform: "MetaTrader (via MetaApi)"
   - Choose start date and end date
   - Select import mode:
     - **Append**: Add new trades to existing data (recommended)
     - **Overwrite**: Replace all existing trades
   - Click "Import Trades"

### Import Modes

- **Append**: Adds only new trades that don't already exist (uses smart duplicate detection)
- **Overwrite**: Replaces all existing trades with the imported data

## Features

### 1. Smart Duplicate Detection
The system automatically detects and prevents duplicate trades using a fingerprint based on:
- Symbol
- Entry/Exit prices
- Volume
- Open/Close timestamps

### 2. Rate Limiting
Automatic rate limiting prevents API throttling:
- MetaTrader: Max 10 requests per second
- cTrader: Max 5 requests per second (when implemented)

### 3. Error Handling
Comprehensive error messages for:
- Authentication failures
- Network errors
- Invalid account IDs
- API rate limit exceeded
- Missing credentials

### 4. Data Transformation
API responses are automatically transformed to match the app's trade format:
- Date/time parsing and formatting
- Field mapping (openPrice → entryPrice, etc.)
- Direction normalization (DEAL_TYPE_BUY → Buy)
- Commission and swap handling

### 5. Security
- API credentials stored securely in browser localStorage
- Password field masking for auth tokens
- No credentials sent to external servers (except the trading platform API)

## Technical Details

### API Configuration Structure

```javascript
API_CONFIG = {
  metatrader: {
    name: 'MetaTrader (via MetaApi)',
    type: 'rest',
    endpoint: 'https://metastats-api-v1.new-york.agiliumtrade.ai',
    rateLimit: 10
  },
  ctrader: {
    name: 'cTrader Open API',
    type: 'websocket',
    demoEndpoint: 'demo.ctraderapi.com:5035',
    liveEndpoint: 'live.ctraderapi.com:5035',
    rateLimit: 5,
    maxTimeRangeMs: 604800000 // 1 week max per request
  }
}
```

### MetaTrader API Endpoint

```
GET https://metastats-api-v1.new-york.agiliumtrade.ai/users/current/accounts/{accountId}/historical-trades/{startDate}/{endDate}

Headers:
  auth-token: YOUR_AUTH_TOKEN
  Content-Type: application/json
  Accept: application/json

Date Format: YYYY-MM-DD HH:MM:SS.SSS
Example: 2024-01-01 00:00:00.000
```

### Trade Data Mapping

| MetaApi Field | App Field | Notes |
|--------------|-----------|-------|
| positionId | id | Unique identifier |
| symbol | symbol | Trading pair |
| type | direction | DEAL_TYPE_BUY → Buy |
| openTime | openDate, openTime | Parsed into separate fields |
| closeTime | date, time | Parsed into separate fields |
| openPrice | entryPrice | Entry price |
| closePrice | exitPrice | Exit price |
| volume | volume | Trade size |
| profit | netPL, netProfit, grossProfit | P&L amount |
| commission | commission | Trading fees |
| swap | swap | Overnight fees |
| balance | balance | Account balance |

## Storage

### LocalStorage Keys
- `tradingJournal_apiConfig`: Stores API credentials (encrypted in production)

### API Credentials Structure
```javascript
{
  metatrader: {
    enabled: boolean,
    authToken: string,
    accountId: string
  },
  ctrader: {
    enabled: boolean,
    clientId: string,
    clientSecret: string,
    accessToken: string,
    accountId: string,
    environment: 'demo' | 'live'
  }
}
```

## Troubleshooting

### "MetaTrader API not configured"
- Ensure you've checked "Enable MetaTrader API" in API Settings
- Verify auth token is entered correctly
- Make sure credentials are saved

### "Authentication failed: Invalid auth token"
- Regenerate your token at https://app.metaapi.cloud/token
- Check for extra spaces when copying/pasting
- Ensure token hasn't expired

### "Account not found"
- Verify account ID is correct
- Check that the account is connected in MetaApi
- Ensure account is active

### "Network error: Unable to connect"
- Check your internet connection
- Verify MetaApi service is online
- Check browser console for CORS errors

### "No trades found in the specified date range"
- Verify the date range includes trades
- Check that account has trading history
- Try a different date range

## Future Enhancements

### Planned Features
1. **cTrader WebSocket Implementation**
   - Full WebSocket support with Protocol Buffers
   - Real-time trade synchronization
   - OAuth2 authentication flow

2. **Additional Platforms**
   - Interactive Brokers API
   - OANDA REST API
   - Binance (crypto) API
   - Custom broker integrations

3. **Auto-Sync**
   - Scheduled automatic imports
   - Real-time trade updates
   - Conflict resolution

4. **Advanced Features**
   - Batch imports with progress tracking
   - Import history log
   - API usage statistics
   - Custom field mapping

## Code Structure

### Key Files Modified
- `index.html`: Single-page application with integrated API functionality

### Key Functions
- `loadAPICredentials()`: Load saved API credentials
- `saveAPICredentials()`: Save API credentials to localStorage
- `populateAPICredentialsUI()`: Populate UI with saved credentials
- `fetchMetaTraderTrades(startDate, endDate)`: Fetch trades from MetaApi
- `transformMetaTraderTrades(apiResponse)`: Transform API response to app format
- `importFromAPI(platform, startDate, endDate, mode)`: Main import function
- `enforceRateLimit(platform)`: Rate limiting helper
- `toggleAPISettings()`: Toggle API settings panel
- `toggleAPIImportModal()`: Toggle import modal
- `handleAPIImport()`: Handle import form submission

### UI Components
- **API Settings Section**: Configure API credentials
- **API Import Modal**: Date range picker and import options
- **Import from API Button**: Quick access in main controls

## Security Considerations

⚠️ **Important Security Notes**:
1. API tokens are stored in browser localStorage (client-side only)
2. Never share your API tokens
3. Consider using demo accounts for testing
4. Regenerate tokens if compromised
5. Production deployment should use:
   - Server-side credential storage
   - Token encryption
   - HTTPS only
   - Rate limiting on server
   - Audit logging

## Support

For issues or questions:
1. Check browser console for error messages
2. Verify API credentials are correct
3. Test with MetaApi's API documentation
4. Review this guide for common issues

## Changelog

### Version 1.0.0 (2025-11-01)
- Initial API integration implementation
- MetaTrader 4/5 support via MetaApi
- Smart duplicate detection
- Rate limiting
- Comprehensive error handling
- API configuration UI
- Import modal with date range picker
- cTrader API structure (implementation pending)
