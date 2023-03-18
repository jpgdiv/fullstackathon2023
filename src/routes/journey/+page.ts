import { journey, journeyStarted, themeInput, currentTheme } from '../../store';

export interface FetchResponse {
	mode: string;
	response: string;
	used_categories: string;
	all_categories: string;
}
export interface TransformedFetchResponse {
	mode: string;
	response: string;
	used_categories: string[];
	all_categories: string[];
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let localThemeInput = '';
	themeInput.subscribe((value) => {
		localThemeInput = value;
	});
	let localCurrentMode = 'bedtime';

	currentTheme.subscribe((value) => {
		localCurrentMode = value;
	});

	const fn = async () => {
		try {
			const response = await fetch(
				`https://smgqwfugc5djocgcfoddnspwa40qpxbt.lambda-url.eu-west-1.on.aws/?${new URLSearchParams(
					{
						mode: localCurrentMode,
						categories: localThemeInput
					}
				)}`
			);

			const responseObject = (await response.json()) as FetchResponse;

			journey.update(() => ({
				mode: responseObject.mode,
				response: responseObject.response,
				used_categories: responseObject.used_categories.split(','),
				all_categories: responseObject.all_categories.split(',')
			}));
		} catch (error) {
			console.error(error);
		}
	};

	try {
		const rawr = await fetch('https://chronicles-of-chatland.vercel.app/api/rawr');
		console.log(rawr);
	} catch (error) {
		console.error(error);
	}

	return await fn();
}
