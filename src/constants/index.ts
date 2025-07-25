export const webDevFAQs: Record<string, number | string>[] = [
  {
    id: 1,
    question: "What's the difference between React and Angular?",
    answer:
      "React is a JavaScript library focused on building UI components with a virtual DOM, while Angular is a full-fledged MVC framework with two-way data binding. React offers more flexibility in choosing additional libraries, whereas Angular provides more built-in features out of the box.",
  },
  {
    id: 2,
    question: "What's new in Tailwind CSS v4.0?",
    answer:
      "Tailwind CSS v4.0 introduces lightning-fast build times, simplified configuration, improved developer experience, and enhanced customization options. It features a completely rewritten engine that's up to 10x faster, improved container queries, and a redesigned CLI for a better development workflow.",
  },
  {
    id: 3,
    question: "How does Next.js improve React applications?",
    answer:
      "Next.js enhances React applications by providing server-side rendering, static site generation, API routes, and built-in CSS/Sass support. It improves SEO, performance, and developer experience with features like file-based routing, image optimization, and middleware support.",
  },
  {
    id: 4,
    question: "What are React Hooks and why use them?",
    answer:
      "React Hooks are functions that let you use state and other React features without writing classes. They simplify component logic, reduce boilerplate code, and make stateful logic reusable across components. Common hooks include useState, useEffect, and useContext.",
  },
  {
    id: 5,
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is React's lightweight representation of the actual DOM. When state changes occur, React creates a new Virtual DOM, compares it with the previous one (diffing), and efficiently updates only the changed parts of the real DOM. This improves performance by minimizing direct DOM manipulations.",
  },
  {
    id: 6,
    question: "What are the advantages of TypeScript over JavaScript?",
    answer:
      "TypeScript adds static typing to JavaScript, catching errors during development rather than runtime. It provides better tooling with autocompletion, type checking, and improved code maintainability for large projects. TypeScript code is transpiled to JavaScript and works with any JS environment.",
  },
  {
    id: 7,
    question: "What is JAMstack architecture?",
    answer:
      "JAMstack stands for JavaScript, APIs, and Markup. It's a modern web architecture that decouples frontend from backend, serving pre-built static files via CDN and enhancing them with client-side JavaScript and serverless APIs. Benefits include better performance, security, and scalability.",
  },
  {
    id: 8,
    question: "How does GraphQL differ from REST?",
    answer:
      "GraphQL allows clients to request exactly the data they need in a single query, while REST typically returns fixed data structures across multiple endpoints. GraphQL provides more flexibility, reduces over-fetching/under-fetching, and offers strong typing via its schema system.",
  },
  {
    id: 9,
    question: "What are Web Components?",
    answer:
      "Web Components are a set of browser standards that allow creating reusable custom HTML elements with encapsulated functionality. They consist of Custom Elements, Shadow DOM, and HTML Templates. Unlike framework components, they work across all JavaScript environments without dependencies.",
  },
  {
    id: 10,
    question: "What is server-side rendering (SSR) and its benefits?",
    answer:
      "Server-side rendering generates the complete HTML for a page on the server before sending it to the client. Benefits include faster initial page loads, better SEO as content is immediately available to crawlers, and improved performance on low-powered devices.",
  },
];
