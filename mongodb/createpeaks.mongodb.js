

// Select the database to use.
use('peaksdb');

// Insert a few peaks
db.products.insertMany([
    {
      name : 'Infern',
      price : '1000',
      category : 'More_than_3.000',
      description : 'Impressive peak in Catalunya',
      image : [
        {
            "length": 1000,
            "width": 1000,
            "src": "src/images/picinfern.jpg"
        }
    ],
      Attributes : {
        Height : '3.250',
        Country : 'Spain'
      }
    },
    {
      name : 'Mulleres',
      price : '2000',
      category : 'More_than_2.000',
      description : 'Long journey to arrive',
      image : [
        {
            "length": 1000,
            "width": 1000,
            "src": "src/images/bastiments.jpg"
        }
    ],
      Attributes : {
        Height : '2.250',
        Country : 'Spain'
      }
    },
    {
      name : 'Bastiments',
      price : '2500',
      category : 'More_than_3.000',
      description : 'Massive',
      image : [
        {
            "length": 1000,
            "width": 1000,
            "src": "src/images/mulleres.jpg"
        }
    ],
      Attributes : {
        Height : '3.550',
        Country : 'Spain'
      }
    },
]);

