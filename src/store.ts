import { writable } from 'svelte/store';
import type { FetchResponse } from './routes/journey/+page';

export const journey = writable<FetchResponse>();

export const journeyStarted = writable<boolean>(false);

export const currentStep = writable<number>(0);
export const themeInput = writable<string>("");
export const themeToggleCounter = writable<number>(0);

