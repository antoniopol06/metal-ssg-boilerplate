'use strict';

import Component from 'metal-component';
import core from 'metal';

class SearchBase extends Component {
	attached() {
		this.on('queryChanged', this.handleQueryChange_.bind(this));
	}

	filterResults_(data, query) {
		let {children, description, title} = data;

		let results = [];

		description = description ? description.toLowerCase() : '';
		title = title ? title.toLowerCase() : '';

		if (title.indexOf(query) > -1 || description.indexOf(query) > -1) {
			results.push(data);
		}

		if (children) {
			children.forEach(child => {
				results = results.concat(this.filterResults_(child, query));
			});
		}

		return results;
	}

	handleQueryChange_({newVal}) {
		this.results = this.search_(newVal);
	}

	search_(query) {
		const {maxResults, section} = this;

		let results = [];

		if (section && query) {
			results = this.filterResults_(section, query.toLowerCase());

			if (results.length > maxResults) {
				results = results.slice(0, maxResults);
			}
		}

		return results;
	}
};

SearchBase.STATE = {
	maxResults: {
		validator: core.isNumber,
		value: 4
	},

	query: {
		validator: core.isString,
		value: ''
	},

	results: {
		validator: core.isArray,
		value: []
	},

	section: {
		validator: core.isObject
	}
};

export default SearchBase;
