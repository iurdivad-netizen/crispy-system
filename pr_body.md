## Summary

This PR enhances the application's theme system with improved consistency and user control:

- **Theme consistency improvements**: Converted hardcoded colors to CSS variables throughout the application for consistent theming
- **User-selectable theme options**: Added UI to choose between System, Light, and Dark modes with proper state persistence
- **Text visibility fixes**: Resolved text readability issues in dark theme by using proper color variables
- **New color palette**: Extended CSS variables with additional colors (blue, purple, green, slate, gray) and their RGB variants
- **Chart theming**: Updated chart colors to use theme-aware color system via `getChartColors()` helper
- **Utility classes**: Added reusable utility classes for common theme-related styling

## Changes Made

### Theme Infrastructure
- Added comprehensive color CSS variables with RGB variants for opacity control
- Implemented theme helper functions (`getCSSVar`, `getChartColors`, `applyTheme`)
- Added theme state management in `appState.themeMode`
- Ensured theme selection persists across sessions via localStorage

### UI Components
- Converted all hardcoded colors in styles to CSS variables
- Updated buttons, cards, sections, tables, and modals to use theme tokens
- Fixed gradient headers, stat cards, and chart containers
- Updated form controls and modals to respect theme colors

### User Controls
- Added theme selection UI in settings with three options:
  - System (auto-detects OS preference)
  - Light mode
  - Dark mode
- Radio button interface with visual feedback
- Theme changes apply immediately without page reload

## Test Plan

- [ ] Verify theme switching works correctly between System, Light, and Dark modes
- [ ] Check that all UI components respect the selected theme
- [ ] Confirm charts update colors appropriately when theme changes
- [ ] Test that theme preference persists after page reload
- [ ] Validate text remains readable in all theme modes
- [ ] Ensure no hardcoded colors remain that break theming
- [ ] Test on different browsers and screen sizes
