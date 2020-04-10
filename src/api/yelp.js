import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer W0xLVcF9bYxM0HpD49Hy_MvHcEONcnkGY38klD-koabGGntscOwZAxgSbgIMlHlnIlcFYmVkuwUpTbBiAWQ20q9q4pkzyv2e_0YwKRAAVRCFSq5p-yyGs9iNG9uPXnYx',
	},
});
