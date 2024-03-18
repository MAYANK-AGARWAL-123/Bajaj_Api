const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req, res) =>{
    res.send("hello");
})

app.post('/bfhl', (req, res) => {
  const data = req.body.data;

 

  const oddNumbers = [];
  const evenNumbers = [];
  const alphabets = [];
 

  data.forEach(element => {
    if (!isNaN(parseInt(element))) {
        // Check if the element is a number
        if (parseInt(element) % 2 === 0) {
            evenNumbers.push(element);
        } else {
            oddNumbers.push(element);
        }
    } else {
            let str=element.toUpperCase()
            console.log(str);
            alphabets.push(str);
        
    }
});
  const user = {
    user_id: "mayank_agarwal_29112001",
    email: "mayank1759.be21@chitkara.edu.in",
    roll_number: 2110991759,
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets
  };

  console.log(user);

  res.json({ is_success: true, ...user });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});