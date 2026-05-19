function sharpeRatio(returns, riskFreeRate = 0.02) {
  const excess = returns.map(r => r - riskFreeRate / 252);
  const mean = excess.reduce((a, b) => a + b, 0) / excess.length;
  const variance = excess.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (excess.length - 1);
  return (mean / Math.sqrt(variance)) * Math.sqrt(252);
}

function maxDrawdown(equity) {
  let peak = equity[0], maxDD = 0;
  for (const v of equity) {
    if (v > peak) peak = v;
    const dd = (peak - v) / peak;
    if (dd > maxDD) maxDD = dd;
  }
  return maxDD;
}

function winRate(trades) {
  const wins = trades.filter(t => t > 0).length;
  return wins / trades.length;
}

module.exports = { sharpeRatio, maxDrawdown, winRate };
