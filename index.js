// Slugify a string
// Remove accents, swap ñ for n, etc
const from = 'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;'
const to = 'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------'

function slugify(str) {
	str = str
	.replaceAll(/^\s+|\s+$/g, '')
	// Make the string lowercase
	.toLowerCase()

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