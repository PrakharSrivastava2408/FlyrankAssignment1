const app=require('express')();

app.get('/Endpoint1', (req, res) => {
    res.send({
        message: 'Hello from Prakhar',
        endpoint: 'Endpoint 1'
    });
});

app.get('/Endpoint2', (req, res) => {
    res.send({
        message: 'Hello from Prakhar',
        endpoint: 'Endpoint 2'
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});