const express = require('express');
const getnumber = require('./getnumber');
const windowstore = require('./windowstore');
const app = express();
app.use(express.json());

const PORT = 3000;
const WINDOW_SIZE = 10;

app.get('/numbers/:numberid', async (req, res) => {
  const { numberid } = req.params;
  const validIds = ['p', 'f', 'e', 'r'];
  
  if (!validIds.includes(numberid)) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  const prevState = [...windowstore.window];
  
  let numbers = [];
  try {
    numbers = await getnumber(numberid);
    if(!Array.isArray(numbers) || numbers.length === 0) {
     numbers = []; 
    }
    
    console.log('Fetched numbers:', numbers);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch numbers' });
  }

  for (let num of numbers) {
    if (!windowstore.window.includes(num)) {
      windowstore.window.push(num);
    }
    if (windowstore.window.length > WINDOW_SIZE) {
      windowstore.window.shift();
    }
  }

  const average = windowstore.window.reduce((a, b) => a + b, 0) / windowstore.window.length;
 

  res.json({
    windowPrevState: prevState,
    windowCurrState: windowstore.window,
    numbers,
    avg: parseFloat(average.toFixed(2))
  });
});

app.listen(PORT, () => {
  console.log(`Server  http://localhost:${PORT}`);
});
