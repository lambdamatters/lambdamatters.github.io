import katex from 'katex';

/**
 * Parses inline LaTeX math formulas enclosed in $...$ into pre-rendered KaTeX HTML.
 * Robust against escaped dollar signs and trims interior whitespace.
 */
export function renderInlineMath(text: string): string {
  if (!text || !text.includes('$')) return text;
  return text.replace(/(?<!\\)\$([^$]+?)\$/g, (_, math) => {
    return katex.renderToString(math.trim(), {
      throwOnError: false,
      displayMode: false,
    });
  });
}

/**
 * Strips LaTeX math delimiters and returns clean plain text suitable for meta descriptions.
 */
export function stripMath(text: string): string {
  if (!text) return '';
  return text
    .replace(/(?<!\\)\$([^$]+?)\$/g, '$1')
    .replace(/\\([\$%&])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}
