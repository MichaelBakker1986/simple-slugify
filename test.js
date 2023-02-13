import { slugify } from './index.js'

console.assert(slugify('.Hello World  -') === 'hello-world', 'Failed to slugify "Hello World  -a"')