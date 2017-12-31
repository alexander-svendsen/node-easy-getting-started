// This file is used for setting up an example database
const sqlite3 = require('sqlite3').verbose();

const DATABASE_PATH = 'tmp.sqlite3'

// open the database connection
let db = new sqlite3.Database(DATABASE_PATH);

db.serialize(() => {
  // Queries scheduled here will be serialized.
  db.run('CREATE TABLE guestlist(name text)')
    .run(`INSERT INTO guestlist(name)
          VALUES('Alex'),
                ('Roger'),
                ('Susan')`)
});

db.close();
