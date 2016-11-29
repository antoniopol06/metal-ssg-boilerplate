'use strict';

import Affix from 'metal-affix';
import Component from 'metal-component';
import core from 'metal';
import dom from 'metal-dom';
import ReadingProgress from 'metal-reading-progress';
import Soy from 'metal-soy';

import templates from './GuideProgress.soy';

class GuideProgress extends Component {
	attached() {
		this.renderReadingProgress_();
	}

	renderReadingProgress_() {
		const {
			articleContainer,
			articleSelector,
			element,
			offsetTop,
			titleSelector
		} = this;

		if (articleContainer) {
			const articles = articleContainer.querySelectorAll(articleSelector);

			const articleIds = [].map.call(articles, article => {
				return `#${article.id}`;
			});

			this.progress = new metal.ReadingProgress({
				items: articleIds,
				titleSelector: titleSelector,
				trackerConfig: {
					activeClass: 'reading',
					completedClass: 'read'
				}
			}, this.refs.readingContainer);

			this.affix = new metal.Affix({
				element: element,
				offsetTop: offsetTop
			});
		}
	}
};

GuideProgress.STATE = {
	articleContainer: {
		setter: dom.toElement,
		value: '.docs-guide'
	},

	articleSelector: {
		validator: core.isString,
		value: 'article'
	},

	offsetTop: {
		validator: core.isNumber,
		value: 230
	},

	titleSelector: {
		validator: core.isString,
		value: 'h2'
	}
};

Soy.register(GuideProgress, templates);

export default GuideProgress;
