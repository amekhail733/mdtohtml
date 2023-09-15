const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

function convertMarkdownToHTML(markdownContent, options = {}) {
  try {
    const { linkify = true, typographer = true } = options;

    md.set({ linkify, typographer });

    const html = md.render(markdownContent);

    return html;
  } catch (error) {
    console.error('Error converting Markdown to HTML:', error);
    return 'Error converting Markdown to HTML';
  }
}

module.exports = { convertMarkdownToHTML };
