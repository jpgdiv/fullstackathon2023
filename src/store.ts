import { writable } from 'svelte/store';
import type { FetchResponse } from './routes/journey/+page';

export const journey = writable<FetchResponse>();

export const journeyStarted = writable<boolean>(false);
