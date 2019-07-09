

const nexmo = {
    id: process.env.apiKey,  
    secret: process.env.apiSecret, //process.env.apiSecret,
};

const JWT_SECRET_KEY =  process.env.JWT_SECRET_KEY;

module.exports = {
    API_Key: nexmo.id,
    API_Secret: nexmo.secret, 
    JWT_SECRET_KEY: JWT_SECRET_KEY,
  } 