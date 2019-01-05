const envv = {
  database: 'postgres',
  username: 'jacob',
  password: 'f1r3place',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = envv;
