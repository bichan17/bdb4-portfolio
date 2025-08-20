# My portfolio site created using Next.js and Markdown and TypeScript

The portfolio items are stored in `/_portfolio` as markdown files with front matter support. Adding a new markdown file in there will create a new portfolio item.

To create the portfolio items we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## How to use

Install dependencies and run the example:

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

The site should be up and running on [http://localhost:3000](http://localhost:3000)!
