import { writable } from 'svelte/store';
import type { TransformedFetchResponse } from './routes/journey/+page';

export const journey = writable<TransformedFetchResponse | undefined>();

export const journeyStarted = writable<boolean>(false);
export const loadingState = writable<boolean>(false);

export const currentStep = writable<number>(0);
export const themeInput = writable<string>('');
export const currentTheme = writable<string>('');
export const themeToggleCounter = writable<number>(0);

export function reset() {
	journey.update(() => undefined);
	journeyStarted.update(() => false);
	currentStep.update(() => 0);
	themeInput.update(() => '');
	themeToggleCounter.update(() => 0);
}
