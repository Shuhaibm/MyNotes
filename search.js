module.exports.search = (myList, theSearch) =>{
    //search algms
}
module.exports.levenshteinDistance = (s1,s2) => {
    //initialize array + base case
    width = s1.length   
    height = s2.length
    var sol = new Array()
    for (y = 0; y<=height; y++){
        sol.push([y])
    }
    for (x=0; x<=width;x++){
        sol[0][x]=x
    }


    for (x = 1; x<=width; x++){
        for (y=1; y<=height;y++){
            if (s1.charAt(x-1) == s2.charAt(y-1)){
                //console.log(s1.charAt(x-1))
                sol[y][x] = Math.min(sol[y-1][x]+1,sol[y][x-1]+1,sol[y-1][x-1])
            } else {
                sol[y][x] = 1 + Math.min(sol[y-1][x],sol[y][x-1],sol[y-1][x-1])
            }
            
        }

    }
    return sol[height][width]
}