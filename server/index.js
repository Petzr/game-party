const server = require('express')();

server.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    let data = {
        "users": [
            'user1',
            'user2',
            'petur'
        ]
    }
    res.json(data)
})

server.listen(5000, () => { console.log('Server is listening to port 5000') })