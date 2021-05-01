const db = require('./db')

const search = require('./search')

async function myFunc(){   
    var result = await db.getAllTitles() 
    console.log(result)}
function myFunc2(){
    return search.levenshteinDistance("test","text")
}

myFunc2()

    