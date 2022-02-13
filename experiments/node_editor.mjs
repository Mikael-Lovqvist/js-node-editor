import { UI } from './ui_types.mjs';
import { implement_ui } from './ui_implementation.mjs';



export class NodeEditor {
	constructor(width, height) {
		this.initial_parameters = {width, height};
	}

	implement(target) {
		/* Adds the HTML DOM elements needed to the target as children */

		this.dom = implement_ui(
			new UI.canvas(),
			new UI.toolbar(
				new UI.button('navigate.forward', {text: '→'}),
				new UI.button('navigate.back', {text: '←'}),
				new UI.button('reset_view', {text: 'Reset View'}),
				{button_scaling: 'text.character_length'},
			),
			{test: 123},
		);

		console.log('dom:', this.dom);

	}

}
