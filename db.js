const mongo = require("./mongo")
const noteSchema = require("./schemas/noteSchema")


module.exports.addNote = async (text) => {
    //make it so it cant add if it exists
	return await mongo().then(async mongoose => {
		const note = { name : text  }
		return await new noteSchema(note).save();
	})
}
module.exports.deleteNote = async (text) => {
	return await mongo().then(async mongoose => {
		mongo.deleteOne({ name: text }, function (err) {
        if (err) return handleError(err);
        }); 
	})
}

module.exports.getAllTitles = async () => {
	return await mongo().then(async mongoose => {
		list = await noteSchema.find()
        finalList = []
        for (let x in list){
            finalList.push(list[x].name)
        }
        return finalList

	})
}