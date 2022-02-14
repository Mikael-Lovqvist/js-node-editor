import { UI } from './ui_types.mjs';
import { implement_into } from './ui_implementation.mjs';
import { arguments_to_settings } from './argument_parsing.mjs';



export class NodeEditor extends UI.base {
	constructor() {
		const defaults = {
		};

		super(arguments_to_settings(defaults, ...arguments));

	}

	implement_into(target) {

		const canvas = new UI.Canvas({width: this.width, height: this.height});
		const toolbar = new UI.Toolbar(
			new UI.Button({id: 'navigate.forward', text: '→'}),
			new UI.Button({id: 'navigate.back', text: '←'}),
			new UI.Button({id: 'reset_view', text: 'Reset View'}),
			{button_scaling: 'text.character_length'},
		);

		return [canvas.implement_into(target), toolbar.implement_into(target)];

	}

}
