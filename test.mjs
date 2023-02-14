import { slugify } from 'slug-web-friendly'

console.assert(slugify('.Hello World  -') === 'hello-world', 'Failed to slugify "Hello World  -a"')