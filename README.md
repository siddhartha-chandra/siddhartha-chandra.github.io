# Siddhartha Chandra

A small Jekyll site for a personal homepage, resume, and Markdown blog.

## Editing

- Home page: `index.md`
- Resume page: `resume.md`
- Blog index: `blog.md`
- Styles: `assets/css/site.css`
- Resume PDF: `assets/pdf/Resume_2.1.1.pdf`

## Writing a Blog Post

Create a file in `_posts` using this name format:

```text
YYYY-MM-DD-title-in-kebab-case.md
```

Start it with:

```yaml
---
title: My Post Title
description: A short summary.
---
```

Then write the post in Markdown. GitHub Pages will rebuild the site after you push.

## Local Preview

If you already have Jekyll installed, run:

```sh
jekyll serve
```

The site does not need a custom theme, plugin stack, or generated assets.
