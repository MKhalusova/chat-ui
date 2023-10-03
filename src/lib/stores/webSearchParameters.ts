import { writable } from "svelte/store";
export interface WebSearchParameters {
	useSearch: boolean;
	nItems: number;
	domainFilters: string;
}
export const webSearchParameters = writable<WebSearchParameters>({
	useSearch: false,
	nItems: 5,
	domainFilters: "",
});
