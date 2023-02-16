const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/user-routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    Support.use(express.static('client/build'));
}

app.use('/api/', userRoutes)

app.listen(PORT, () => 
console.log(`API server now listening on PORT ${PORT}!`),
)