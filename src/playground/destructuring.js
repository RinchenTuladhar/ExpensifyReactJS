// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { title, author } = book;
// const { name: publisherName = "Self Published" } = book.publisher;

const item = ["Coffee (hot)", "$2.00", "$2.50", "$3.00"];

const [name, , medium] = item;
console.log(`A medium ${name} costs ${medium}`);
