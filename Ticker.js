const ticker = document.getElementById('ticker');

// Sample stock data (you can replace this with real API data later)
const stocks = [
  { symbol: 'AAPL', price: 173.50, change: '+1.25' },
  { symbol: 'GOOGL', price: 2850.30, change: '-12.40' },
  { symbol: 'MSFT', price: 309.20, change: '+3.10' },
  { symbol: 'TSLA', price: 790.60, change: '+5.60' },
  { symbol: 'AMZN', price: 3425.50, change: '-8.90' },
  { symbol: 'META', price: 370.40, change: '+2.45' },
  { symbol: 'NFLX', price: 595.30, change: '-3.20' },
  { symbol: 'NVDA', price: 910.10, change: '+14.75' },
  { symbol: 'INTC', price: 42.80, change: '+0.60' },
  { symbol: 'AMD', price: 112.40, change: '-1.20' },
  { symbol: 'IBM', price: 141.75, change: '+0.80' },
  { symbol: 'ORCL', price: 125.25, change: '-0.90' },
  { symbol: 'BA', price: 215.60, change: '+1.10' },
  { symbol: 'DIS', price: 98.40, change: '-0.35' },
  { symbol: 'SONY', price: 91.20, change: '+0.45' },
  { symbol: 'UBER', price: 54.60, change: '+2.10' },
  { symbol: 'LYFT', price: 15.25, change: '-0.40' },
  { symbol: 'SHOP', price: 72.30, change: '+1.90' },
  { symbol: 'TWTR', price: 48.70, change: '-0.60' },
  { symbol: 'ADBE', price: 585.20, change: '+7.35' },
  { symbol: 'SAP', price: 146.80, change: '+1.05' },
  { symbol: 'CRM', price: 268.50, change: '-2.15' },
  { symbol: 'TCS', price: 3540.75, change: '+10.60' },
  { symbol: 'INFY', price: 1520.20, change: '-5.40' },
  { symbol: 'WIPRO', price: 466.30, change: '+3.80' },
  { symbol: 'HCLT', price: 1278.10, change: '+2.90' },
  { symbol: 'RELIANCE', price: 2850.40, change: '-4.20' },
  { symbol: 'ICICIBANK', price: 1105.65, change: '+5.15' },
  { symbol: 'HDFCBANK', price: 1589.90, change: '-2.30' },
  { symbol: 'SBIN', price: 682.75, change: '+1.75' }
];
// Function to display stock ticker with arrows and better formatting
function updateTicker() {
  const ticker = document.getElementById('ticker');
  ticker.innerHTML = stocks.map(stock => {
    const isPositive = stock.change.startsWith('+');
    const color = isPositive ? 'limegreen' : 'red';
    const arrow = isPositive ? '▲' : '▼';
    const bgColor = isPositive ? 'rgba(50,205,50,0.1)' : 'rgba(255,0,0,0.1)';

    return `
      <span style="
        margin-right: 60px;
        padding: 8px 15px;
        background:${bgColor};
        border-radius: 8px;
        display:inline-block;
        font-family: 'Courier New', monospace;
      ">
        <strong>${stock.symbol}</strong> :
        $${stock.price.toFixed(2)}
        <span style="color:${color}; font-weight:bold;">
          ${arrow} ${stock.change}
        </span>
      </span>
    `;
  }).join('');
}

// Run when page loads
updateTicker();

// Optional: Auto-refresh ticker every 10 seconds (for live updates later)
setInterval(updateTicker, 10000);
