export const config = {
  db: {
    extra: {
      connectionLimit: 10,
    },
    /* ssl: {
        rejectUnauthorized: false,
      }, */
    synchronize: true,
    logging: true,
  },
};
