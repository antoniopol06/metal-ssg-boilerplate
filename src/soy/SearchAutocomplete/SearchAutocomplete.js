'use strict';

import Autocomplete from 'metal-autocomplete';
import core from 'metal';
import Soy from 'metal-soy';

import SearchBase from '../SearchBase/SearchBase';
import templates from './SearchAutocomplete.soy';

class SearchAutocomplete extends SearchBase {
	attached() {
		const {element} = this;

		const {input} = this.refs;

		if (input) {
			var autocomplete = new Autocomplete({
				data: this.search_.bind(this),
				format: this.format_.bind(this),
				inputElement: input,
				select: () => {}
			});
		}
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

Soy.register(SearchAutocomplete, templates);

export default SearchAutocomplete;
