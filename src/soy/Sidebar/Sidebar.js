'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Sidebar.soy';

class Sidebar extends Component {
	attached() {
		console.log('Sidebar attached.');
	}
};

Soy.register(Sidebar, templates);

export default Sidebar;
