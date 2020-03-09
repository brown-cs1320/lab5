const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'bdognom-v2.cs.brown.edu',
    user: 'cs132',
    password : 'csci1320',
    database: 'cdquery1', // switch cdquery when you are ready
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// example query:
//
// pool.query('show tables', function(err, rows, fields) {
//     // Connection is automatically released when query resolves
//     console.log(rows);
// });

async function related(artist1, artist2) {
    // TODO
    console.log(`TODO: provide your implementation to test whether ${artist1} is related with ${artist2}`);
}

async function search(artist1, limit) {
    // TODO
    console.log(`TODO: provide your implementation to get ${limit} artists related to ${artist1}`);
}

function close() {
    pool.end(function (err) {
        // all connections in the pool have ended
        console.error(err);
    });
}

const argc = process.argv.length;
if (argc == 5) {
    switch (process.argv[2]) {
    case 'related':
        related(process.argv[3], process.argv[4]).then(() => close());
        break;
    case 'search':
        search(process.argv[3], Number.parseInt(process.argv[4])).then(() => close());
        break;
    default:
        console.error(`Invalid command ${process.argv[2]}`);
        close();
    }
} else {
    console.error(`Invalid number of arguments: ${argc} != 5`);
    close();
}