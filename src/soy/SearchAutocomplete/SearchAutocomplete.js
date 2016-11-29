'use strict';

import Autocomplete from 'metal-autocomplete';
import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './SearchAutocomplete.soy';

class SearchAutocomplete extends Component {
	rendered() {
		const {element} = this;

		const input = element.querySelector('input');

		if (input) {
			var autocomplete = new Autocomplete({
				data: this.data_.bind(this),
				format: this.format_.bind(this),
				inputElement: input,
				select: () => {}
			});
		}
	}

	data_(query) {
		const {maxResults, site} = this;

		let results = [];

		if (site && query) {
			results = this.filterResults_(site, query.toLowerCase());

			if (results.length > maxResults) {
				results = results.slice(0, maxResults);
			}
		}

		return results;
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

	format_(data) {
		let {title, description, url} = data;

		if (description && description.length > 100) {
			description = `${description.substr(0, 100)}...`;
		}

		return {
			textPrimary: `<a class="autocomplete-link" href="${url}">
				<div class="autocomplete-result">
					<p class="autocomplete-title">${title}</p>
					<p class="autocomplete-text">${description}</p>
				</div>
			</a>`
		};
	}
};

SearchAutocomplete.STATE = {
	site: {
		validator: core.isObject
	},

	maxResults: {
		validator: core.isNumber,
		value: 4
	}
};

Soy.register(SearchAutocomplete, templates);

export default SearchAutocomplete;
