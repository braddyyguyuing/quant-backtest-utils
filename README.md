# quant-backtest-utils

> ⚡ Professional quantitative trading backtest toolkit for crypto strategies

![npm](https://img.shields.io/npm/v/quant-backtest-utils?color=blue)
![license](https://img.shields.io/github/license/braddyyguyuing/quant-backtest-utils)

## Features

- **Sharpe Ratio** — Annualized risk-adjusted return calculation
- **Maximum Drawdown** — Peak-to-trough decline analysis  
- **Win Rate** — Trade success ratio metrics
- **Full Backtest Summary** — Single-call comprehensive evaluation

## Install

```bash
npm install @braddyyguyuing/quant-backtest-utils
```

Or install directly from GitHub:

```bash
npm install github:braddyyguyuing/quant-backtest-utils
```

## Quick Start

```js
const { sharpeRatio, maxDrawdown, winRate } = require('@braddyyguyuing/quant-backtest-utils');

const returns = [0.01, -0.02, 0.03, 0.01, -0.01, 0.02, 0.015, -0.005];
console.log(`Sharpe: ${sharpeRatio(returns).toFixed(3)}`);

const equity = [10000, 10100, 10500, 10300, 10700, 11000];
console.log(`Max DD: ${(maxDrawdown(equity) * 100).toFixed(1)}%`);

const trades = [50, -30, 80, -20, 100, -15, 60];
console.log(`Win Rate: ${(winRate(trades) * 100).toFixed(1)}%`);
```

## API

| Function | Params | Returns |
|----------|--------|---------|
| `sharpeRatio(returns, riskFreeRate?)` | `number[]`, `number` (default 0.02) | `number` |
| `maxDrawdown(equity)` | `number[]` | `number` (0-1) |
| `winRate(trades)` | `number[]` (positive=win) | `number` (0-1) |

## Supported Exchanges

Integrates with Binance, OKX, Bybit via CCXT for real data backtesting.

## License

MIT
