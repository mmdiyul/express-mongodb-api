const express = require('express')
let port = process.env.PORT || 3000
let app = express()

app.listen(port, () => {
    console.log(`Server started on ` + port);
});