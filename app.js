// Initially following the documenation
const level = require('level')

// Create a db, supply location and opts 
const db = level('./dopedb') 

// key,value 
db.put('name', 'Level', function(err) {
	if (err) return console.log('aH shit', err)  // wtf!?!

	db.get('name', function(err, value) {
		if (err) return console.log("oops", err) // no key found ? 

		console.log('name=' + value) 
	})
});

