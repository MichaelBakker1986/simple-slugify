/* A list of characters that will be replaced by the characters in the `to` string. */
const from = 'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;'
const to = 'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------'

/* A string of characters that will be replaced by the characters in the `from` string. */
function slugify(str) {
	str = str
	.replaceAll(/^\s+|\s+$/g, '')
	// Make the string lowercase
	.toLowerCase()

	/* Replacing the characters in the `from` string with the characters in the `to` string. */
	for (let i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
	}

	// Remove invalid chars
	str = str
	.replaceAll(/[^a-z0-9 -]/g, '-')
	// Collapse whitespace and replace by -
	.replaceAll(/\s+/g, '-')
	// Collapse dashes
	.replaceAll(/-+/g, '-')
	// Trim - from start of text
	.replace(/^-|-$/g, '')

	return str
}

export { slugify }
export default slugify