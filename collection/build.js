/*
All Rights Reserved, (c) 2025 ffs

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-02-04T15:26:11.217Z
Modified:     2025-02-04T15:26:11.217Z
File Name:   build.js

Description: description

*/

import { $, chalk } from 'zx-cjs' 
 
console.log("\n")

await $`basename $(pwd)`

try { 
    await `rm -rf lib` 
    await $`npx tsc -p tsconfig.lib.json --module nodenext --outDir lib/esm` 
    await $`echo '{"type": "module"}' > lib/esm/package.json` 
 
    // await $`npx tsc -p tsconfig.lib.json --module commonjs --outDir lib/cjs` 
    // await $`echo '{"type": "commonjs"}' > lib/cjs/package.json` 
 
    console.log(chalk.green('Compilation successful')) 
} catch (error) { 
    console.error(chalk.red('Compilation failed :'), chalk.red(error.message)) 
} 

console.log("\n")