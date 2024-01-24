const express = require('express');
const app = express();

app.use(express.json())
app.use(express.static('front'))

app.post('/url', (req, res) => {
console.log(req.body)
res.send('you suck')
console.log

});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
