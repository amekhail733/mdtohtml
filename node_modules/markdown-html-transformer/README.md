# Markdown-HTML Transformer

[![npm version](https://img.shields.io/npm/v/markdown-html-transformer.svg)](https://www.npmjs.com/package/markdown-html-transformer)
[![license](https://img.shields.io/npm/l/markdown-html-transformer.svg)](https://github.com/your-username/markdown-html-transformer/blob/main/LICENSE)

A simple npm package that transforms Markdown content into HTML using the Markdown-It library.

## Installation

```bash
npm install markdown-html-transformer
```

## Usage
```js
const MarkdownTransformer = require('markdown-html-transformer');

const markdownContent = `
# Hello, World!

This is **bold** and *italic* text.

- Item 1
- Item 2
- Item 3
`;

const htmlContent = MarkdownTransformer.convertMarkdownToHTML(markdownContent);

console.log(htmlContent);
```

## Output
```html
<h1>Hello, World!</h1>
<p>This is <strong>bold</strong> and <em>italic</em> text.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## API
`convertMarkdownToHTML(markdownContent)`
This function takes a string markdownContent as input and converts it into HTML using the Markdown-It library. It returns the generated HTML content as a string.

- `markdownContent`: The Markdown content to be transformed into HTML.


# License
This project is licensed under the MIT License.
