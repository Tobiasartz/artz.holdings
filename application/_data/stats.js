import properties from "./properties.js";

// Aggregate numbers used on the homepage trust strip, derived from properties.js.
const reviewCount = properties.reduce((sum, p) => sum + p.reviewCount, 0);
const weighted = properties.reduce((sum, p) => sum + p.rating * p.reviewCount, 0);
const averageRating = Math.round((weighted / reviewCount) * 100) / 100;

export default {
	reviewCount,
	averageRating,
	homes: properties.length,
	guestsPerHome: Math.max(...properties.map(p => p.guests)),
};
