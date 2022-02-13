import { constants } from './constants.mjs';

export function arguments_to_bins_and_settings() {
	const argument_array = new Array(... arguments);
	const base_list = argument_array.slice(1);

	const settings = new Map();
	const result_bins = new Map();
	result_bins[constants.SETTINGS] = settings;
	 new Map();
	for (const base of base_list) {
		result_bins[base] = new Array();
	}

	for (const arg of argument_array[0]) {

		let found = false;
		for (const base of base_list) {
			if (arg instanceof base) {
				result_bins[base].push(arg);
				found = true;
				break;
			}
		}

		if (!found) {
			for (const [key, value] in Object.entries(arg)) {
				settings[key] = value;
			}

		}

	}

	return result_bins;
}
