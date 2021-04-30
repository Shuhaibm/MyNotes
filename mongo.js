//username: shuhaibm
//password: i3K7ZKNwPpLmUsx

const mongoose = require('mongoose');
const uri = "mongodb+srv://shuhaibm:i3K7ZKNwPpLmUsx@cluster0.jzkzt.mongodb.net/MyNotes?retryWrites=true&w=majority";

module.exports = async () => {
	await mongoose.connect(uri, {

		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	return mongoose
}