import mongoose from "mongoose";

class DB {
	constructor({
		url,
		login,
		password,
		database,
	}: {
		url: string;
		login: string;
		password: string;
		database: string;
	}) {
		mongoose
			.connect(`mongodb+srv://${login}:${password}@${url}/${database}`, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log(`MongoDB connected`));
	}
}

export default DB;