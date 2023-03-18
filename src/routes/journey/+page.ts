import { journey, journeyStarted } from '../../store';

export interface FetchResponse {
	mode: string;
	response: string;
	used_categories: string[];
	all_categories: string[];
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let started = false;
	journeyStarted.subscribe((value) => (started = value));

	const returnValue = {
		mode: 'bedtime',
		response:
			'Once upon a time, there was a little creature named Derp. Derp was a curious creature who loved to explore the world around him.\n\nOne day, Derp decided to take a walk in the woods. As he was walking, he heard a strange noise coming from the trees. He looked up and saw a group of zombies from the Walking Dead TV show! Derp was so scared that he ran away as fast as he could.\n\nBut then, he heard a familiar voice calling out to him. It was Donald Duck! Donald was also scared of the zombies, but he was brave enough to stand up to them. He told Derp that he could help him get away from the zombies if he followed him.\n\nSo Derp followed Donald Duck through the woods, and eventually they made it to safety. Derp was so thankful to Donald for saving him, and they became good friends.\n\nFrom then on, Derp and Donald Duck went on many adventures together. They explored the world, and even faced off against the zombies from the Walking Dead.\n\nAnd they lived happily ever after.',
		used_categories: 'derp,Walking Dead,Donald Duck'.split(','),
		all_categories: 'marvel,dc,south park,family guy,bla,blabla,bark,barf,foo,bar'.split(',')
	};

	const fn = started
		? async () => {
			try {
				const response = await fetch(
					`https://smgqwfugc5djocgcfoddnspwa40qpxbt.lambda-url.eu-west-1.on.aws/?${new URLSearchParams(
						{
							mode: 'bedtime',
							categories: 'derp'
						}
					)}`,

				);

				// console.log(response)

				return (await response.json()) as FetchResponse;
			} catch (error) {
				console.error(error);
			}

			// journey.update(() => returnValue);
		}
		: async () => {
			journey.update(() => returnValue);
		};

	return await fn();
}
