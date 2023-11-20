const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
const routes = require ('./routes/routes.js')

const app = express();
app.use(cors());
const port = 3000;
let oracleConnection;

app.use(bodyParser.json());

//Database Start
const dbConfig = {
  user: 'COMP214_f23_ers_18',
  password: 'Aa1!Bb2@',
  connectString: '199.212.26.208:1521/SQLD',
};

// Connect to Database
async function connectToDatabase() {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('Connected to Oracle Database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
}

// Middleware to set up the database connection
app.use(async (req, res, next) => {
  try {
    if (!oracleConnection) {
      oracleConnection = await connectToDatabase();
    }
    req.db = oracleConnection;
    next();
  } catch (error) {
    console.error('Error setting up database connection:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//Database End

app.use('/', routes);

process.on('SIGINT', async () => {
  try {
    if (oracleConnection) {
      await oracleConnection.close();
      console.log('Oracle Database connection closed');
    }
    process.exit(0);
  } catch (error) {
    console.error('Error closing Oracle Database connection:', error.message);
    process.exit(1);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


