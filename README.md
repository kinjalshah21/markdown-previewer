# Markdown Previewer

This is a simple Markdown previewer built using HTML, CSS, and JavaScript. It allows users to type Markdown syntax in a textarea and see the formatted output in real time.

## Features

- Live preview of Markdown syntax
- Supports basic Markdown elements:
  - Headings (`# H1`, `## H2`, etc.)
  - **Bold** & *Italics* (`**bold**`, `_italic_`)
  - [Links](http://example.com)
  - Lists (ordered and unordered)
  - Code blocks (inline and multi-line)
- Sanitization of HTML for security
- Clear button to reset the input field

## Dependencies

- [Marked.js](https://marked.js.org/) - Parses Markdown to HTML
- [DOMPurify](https://github.com/cure53/DOMPurify) - Sanitizes HTML output

## Installation & Usage

1. Download or clone this repository.
2. Open the `index.html` file in a web browser.
3. Start typing Markdown in the left textarea to see the live preview on the right.

## How It Works

- The textarea captures user input.
- The `marked.js` library converts Markdown to HTML.
- The `DOMPurify` library sanitizes the output to prevent XSS attacks.
- The preview section updates dynamically as the user types.

## Screenshot

![image](https://github.com/user-attachments/assets/996fea58-32ac-46d4-aa2e-7b2eb28dc6d6)
