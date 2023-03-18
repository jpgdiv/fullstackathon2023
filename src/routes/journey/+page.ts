import { journey, journeyStarted } from '../../store';

export interface FetchResponse {
	mode: string;
	response: string;
	used_categories: string;
	all_categories: string;
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let started = false;
	journeyStarted.subscribe((value) => (started = value));


	const returnValue: any = {
		"mode": "bedtime",
		"response": "Once upon a time, in a far away land of make-believe, there lived a young girl named Derpina. Derpina was a courageous, kind-hearted girl who had a fascination with the stars and the galaxies beyond. \n\nOne night, Derpina was woken from her sleep by a strange noise coming from outside her window. She looked out and saw a strange-looking spaceship hovering in the night sky. Suddenly, a voice from the ship said \"Derpina, I am here to help you fulfill your destiny.\" \n\nDerpina was taken onboard the spaceship and whisked away to a mysterious planet. As she arrived, Derpina was startled to find herself in the middle of an epic battle between the forces of good and evil. On one side was an army of brave warriors from a long-forgotten galaxy, led by a wise Jedi master. On the other side were hideous creatures, summoned by a powerful wizard from the dark side. \n\nDerpina was amazed by the skill of the Jedi master and his warriors as they fought off the creatures. But then, suddenly, the wizard used a powerful spell to summon a giant tentacled monster. The monster was so powerful that it seemed unstoppable. \n\nJust then, Derpina suddenly remembered something her grandmother had told her about the legendary Lovecratian god, Cthulhu. She knew that in order to defeat the monster, she needed to summon the power of Cthulhu. \n\nUsing her courage and her knowledge of the ancient rituals, Derpina was able to summon Cthulhu and use his power to defeat the monster. With the help of Cthulhu, the Jedi master and his warriors were able to destroy the monster and save the planet. \n\nAs a reward for her bravery, Derpina was given a magical staff made from the same material as the spaceship she had arrived in. She was told that with this staff, she could explore the stars and galaxies beyond her own. \n\nDerpina was so happy that she ran back home and showed her grandmother her new staff. Her grandmother smiled and said, \"Derpina, you have fulfilled your destiny. Now, you can explore the galaxies and find your own adventure.\" \n\nAnd so, Derpina did just that. She used her staff to explore the stars and galaxies beyond her own, and found her own adventures. She made new friends, battled evil creatures, and uncovered secrets that had been hidden away for centuries. \n\nAnd to this day, Derpina is still exploring the stars, discovering new galaxies and uncovering new secrets. All thanks to her courage, her knowledge, and her magical staff.",
		"used_categories": "derp,Star Wars,Lovecraft".split(','),
		"all_categories": "derp,Harry Potter,The Witcher,Lord of the Rings / The Hobbit,Star Wars,Star Trek,Donald Duck,The Avengers,Game of Thrones,World Wrestling Entertainment (WWE),World Economic Forum (WEF),South Park,Family Guy,Spongebob,Simpsons,Smurfs,Halloween,Pirates of the Caribbean,Goonies,Frontend frameworks,Java,Hitchhiker's Guide to the Galaxy,Discworld,Lovecraft,Diablo,World of Warcraft,Walking Dead,Stranger Things".split(',')
	}

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

				const responseObject = (await response.json()) as FetchResponse;

				return {
					mode: responseObject.mode,
					response: responseObject.response,
					used_categories: responseObject.used_categories.split(","),
					all_categories: responseObject.all_categories.split(",")
				}
			} catch (error) {
				console.error(error);
			}

			journey.update(() => returnValue);
		}
		: async () => {
			journey.update(() => returnValue);
		};

	return await fn();
}
