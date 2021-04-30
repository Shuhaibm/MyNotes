const db = require('./db')

async function myFunc(){   
    var result = await db.getAllTitles() 
    console.log(result)}


myFunc()

    