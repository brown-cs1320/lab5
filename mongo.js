const mongoose = require('mongoose');

async function related(artist1, artist2) {
    // TODO
    console.log(`TODO: provide your implementation to test whether ${artist1} is related with ${artist2}`);
}

async function search(artist1, limit) {
    // TODO
    console.log(`TODO: provide your implementation to get ${limit} artists related to ${artist1}`);
}

(async () => {
    try {
        await mongoose.connect('mongodb://bdognom-v2.cs.brown.edu/cdquery1', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: 'cs132',
            pass: 'csci1320',
        });
    } catch (error) {
        console.error(error);
    }
})();

function close() {
    mongoose.disconnect();
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
