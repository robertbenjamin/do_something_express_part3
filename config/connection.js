var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///do_something_db");
var List = sequelize.import("../models/list");
var Task = sequelize.import("../models/task");

Task.belongsTo(List);
List.hasMany(Task);

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize,
	models: {
		Task: Task,
		List: List
	}
}