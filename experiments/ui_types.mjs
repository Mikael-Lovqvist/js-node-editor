import { arguments_to_bins_and_settings, arguments_to_settings } from './argument_parsing.mjs';

export class UI {
	static base = class {
		constructor(settings) {
			this.settings = settings
		}

		implement_into(target) {
			console.error(this, 'has not implemented implement_into');
		}

	}

	static Canvas = class Canvas extends UI.base {

		constructor() {
			const defaults = {
				width: '100%',
				height: '100%',
			};

			super(arguments_to_settings(defaults, ...arguments));
		}

		implement_into(target) {

			//const {id, width, height} = this.settings;
			const canvas = target.create_element('canvas', {...this.settings});
			return canvas;

		}


	}

	static Toolbar = class Toolbar extends UI.base {
		constructor() {
			const defaults = {
				button_scaling: 'equal',
			};

			const [sub_elements, settings] = arguments_to_bins_and_settings(arguments, UI.base);
			super(arguments_to_settings(defaults, settings));

			this.sub_elements = sub_elements;

		}

		implement_into(target) {

			//const {id, width, height} = this.settings;
			const div = target.create_element('div', {style: 'display: table-row'});

			for (const se of this.sub_elements) {
				for (const sub_element of se.implement_into(target)) {
					div.appendChild(sub_element);
					//should potentially apply scaling here to sub_element.style.width
				}
			}

			return [div];

		}



	}

	static Button = class Button extends UI.base {
		constructor() {
			const defaults = {
			};

			super(arguments_to_settings(defaults, ...arguments));

		}

		implement_into(target) {

			//const {id, width, height} = this.settings;
			const button = target.create_element('button');
			button.appendChild(target.create_text(this.text | this.id | 'Button'));
			return [button];
		}
	}

}

