import userModel from '../models/user.model';

const userQuery = async (filter, projection) => {
	let query = { email: filter.email };
	filter = filter && filter.orQuery ? query : filter;
	console;
	const data = await userModel.findOne(filter, projection);
	return data;
};

const findAllQuery = async (query) => {
	let { search, _id, limit, page, role } = query;
	let whereClause = {};
	if (search) {
		search = new RegExp(search, 'ig');
		whereClause = { email: search };
	}
	if (_id) {
		whereClause = { ...whereClause, _id };
	}

	const users = await userModel
		.find(whereClause)
		.skip(page > 0 ? +limit * (+page - 1) : 0)
		.limit(+limit || 20);

	const totalCount = await userModel.find().countDocuments();
	return { users, totalCount };
};

export default {
	userQuery,
	findAllQuery,
};
