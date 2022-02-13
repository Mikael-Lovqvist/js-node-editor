import { UI } from './ui_types.mjs';
import { arguments_to_bins_and_settings } from './argument_parsing.mjs';

export function implement_ui() {

	const [ui_elements, settings] = arguments_to_bins_and_settings(arguments, UI.base);

	console.log(ui_elements);
	console.log(settings)

	return
}
