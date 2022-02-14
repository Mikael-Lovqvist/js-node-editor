import { UI } from './ui_types.mjs';
import { arguments_to_bins_and_settings } from './argument_parsing.mjs';


export function implement_into(document, target) {

	// Get the ui_elements and settings. ui_elements shall have a class method for implementing UI into a target object
	const [ui_elements, settings] = arguments_to_bins_and_settings(arguments, UI.base);
	for (const element of ui_elements) {
		element.implement_into(target);
	}

}
