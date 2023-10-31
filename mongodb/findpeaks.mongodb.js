

// Select the database to use.
use('peaksdb');

// Calculate the budget to do peaks of more than 3.000.
const budget = [
  {
    $match: {
      category: "More_than_3.000",
    },
  },
  {
    $group: {
      _id: null,
      totalsum: { $sum: { $toDouble: '$price' } },
    },
  },
];

const result = db.products.aggregate(budget).toArray();
// Print a message to the output window.
console.log(result[0].totalsum+' is the total price for all the peaks with more than 3.000 meters.');