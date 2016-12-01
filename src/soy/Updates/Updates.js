'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './Updates.soy';

class Updates extends Component {
	attached() {
	}
};

Updates.STATE = {
	updates: {
		validator: core.isArray,
		value: []
	}
};

Soy.register(Updates, templates);

export default Updates;
