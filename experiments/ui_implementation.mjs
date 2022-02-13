import { UI } from './ui_types.mjs';
import { arguments_to_bins_and_settings } from './argument_parsing.mjs';

export function implement_ui() {

	return arguments_to_bins_and_settings(arguments, UI.base);

	const ui_elements = new Array();
	const settings = new Map();


	console.log(ui_elements, settings);

	return
}
