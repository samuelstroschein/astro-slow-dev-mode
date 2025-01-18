// @ts-nocheck


/**
 * @param {import("./runtime.js").AvailableLocale} locale
 * @param {number} input
 * @param {Intl.PluralRulesOptions} [options]
 * @returns {string}
 */
export function plural(locale, input, options) { 
	return new Intl.PluralRules(locale, options).select(input)
}

/**
 * @param {import("./runtime.js").AvailableLocale} locale
 * @param {number} input
 * @param {Intl.NumberFormatOptions} [options]
 * @returns {string}
 */
export function number(locale, input, options) {
	return new Intl.NumberFormat(locale, options).format(input)
}

/**
 * @param {import("./runtime.js").AvailableLocale} locale
 * @param {Date} input
 * @param {Intl.DateTimeFormatOptions} [options]
 * @returns {string}
 */
export function datetime(locale, input, options) {
	return new Intl.DateTimeFormat(locale, options).format(input)
}
