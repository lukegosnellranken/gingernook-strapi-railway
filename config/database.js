module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-58.railway.app'),
      port: env.int('PGPORT', 5970),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'IEE59PaXKyQe1WWVT2ce'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
