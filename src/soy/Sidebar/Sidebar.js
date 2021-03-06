'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import Toggler from 'metal-toggler';

import templates from './Sidebar.soy';

class Sidebar extends Component {
	attached() {
		console.log('Sidebar attached.');

		new Toggler({
			content: '.sidebar-list-1',
			header: '.sidebar-header'
		});
	}
};

Soy.register(Sidebar, templates);

export default Sidebar;
