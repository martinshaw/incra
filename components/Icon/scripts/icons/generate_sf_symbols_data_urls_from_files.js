/*
All Rights Reserved, (c) 2025 incra

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-02-04T23:00:16.161Z
Modified:     2025-02-04T23:00:16.161Z
File Name:   generateSFSymbolsDataUrlsFromFiles.js

Description: description

*/

import fs from 'fs';
import path from 'path';

const baseDir = '../../node_modules/sfsymbols-svg.git/symbols/';
const resolvedBaseDir = path.resolve(import.meta.dirname, baseDir);

const files = fs.readdirSync(resolvedBaseDir);

const dataUrlsKeyedByFileName = files.reduce(
    (carry, file) => {
        const svgJsxContent = fs.readFileSync(path.join(resolvedBaseDir, file), 'utf8');

        // use regex to remove the HTML comments from this svgJsxContent
        const svgJsxContentWithoutComments = svgJsxContent.replaceAll(/<!--.*?-->/gs, '');

        // return `"${file.slice(0, -4)}": ${svgJsxContentWithoutComments}`;
        // return `"${file.slice(0, -4)}": "${encodeURIComponent(svgJsxContentWithoutComments)}"`;
        // carry[file.slice(0, -4)] = `"${file.slice(0, -4)}": "${'data:image/svg+xml,' + encodeURIComponent(svgJsxContentWithoutComments)}"`;
        carry[file.slice(0, -4)] = `"${file.slice(0, -4)}": "${encodeURIComponent(svgJsxContentWithoutComments)}"`;
        return carry;
    },
    {}
);

console.log(`Generated ${Object.keys(dataUrlsKeyedByFileName).length} data URLs from ${files.length} files`);

// output file
const outputFile = path.join(import.meta.dirname, '../../src/generated.ts');

const templateFileContents = `
/*
All Rights Reserved, (c) 2025 incra

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-02-04T22:50:08.428Z
Modified:     2025-02-04T22:50:08.428Z
File Name:   generated.tsx

Description: description

*/

const generated = {${Object.values(dataUrlsKeyedByFileName).join(", ")}} as const;

type SFSymbolIconNames = ${Object.keys(dataUrlsKeyedByFileName).map((key) => `"${key}"`).join(" | ")};

export {
    generated,
    type SFSymbolIconNames
};

`

fs.writeFileSync(outputFile, templateFileContents);

console.log(`Wrote ${files.length} data URLs to ${outputFile}`);

