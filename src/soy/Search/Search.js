'use strict';

import core from 'metal';
import Soy from 'metal-soy';

import SearchBase from '../SearchBase/SearchBase';
import templates from './Search.soy';

class Search extends SearchBase {
	attached() {
		SearchBase.prototype.attached.apply(this);

		const queryString = window.location.search;
		const queryIndex = queryString.indexOf('q=');

		if (queryIndex !== -1) {
			this.query = queryString.substr(queryIndex + 2);
		}
	}

	handleInput_(event) {
		const {target} = event;

		this.query = target.value;
	}
};

Soy.register(Search, templates);

export default Search;
