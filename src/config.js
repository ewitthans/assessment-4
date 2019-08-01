export const INGREDIENT_SEARCH_API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
export const DRINK_SEARCH_API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// This is the documentation for the API:
// https://www.thecocktaildb.com/api.php

// You just need the two APIs that are provided.

// The DRINK_SEARCH_API_URL will return a list of drinks. You just need the first one (it will only be a list of one.)
// Use drinks[0] to get the first element