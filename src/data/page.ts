type Post = {
  id: number;
  title: string;
  category: string;
  previewText: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
};

const postData: Post[] = [
  {
    id: 1,
    title: "Mastering React",
    category: "Development",
    previewText: "Explore the intricacies of React for modern web development.",
    description:
      "React is a JavaScript library used for building user interfaces, and mastering it is essential for modern frontend development. It allows developers to create reusable UI components, simplifying the process of building complex applications. React’s virtual DOM ensures efficient updates and rendering, while JSX provides a syntactic advantage by blending JavaScript and HTML-like structures. Managing state and data flow is intuitive with hooks like useState and useEffect, which also enable functional components to handle lifecycle methods. Advanced state management can be achieved with tools like Redux or Context API. For developers aiming to build scalable, performant apps, understanding React’s ecosystem—including React Router for navigation and libraries like React Query for data fetching—is crucial. By combining React with tools like Next.js, developers can unlock its full potential, creating dynamic and engaging applications for both client and server-side rendering.",
    imageUrl: "/assets/img/ReactState.png",
    author: "John Doe",
    date: "2024-11-15",
  },
  {
    id: 2,
    title: "Next.js Basics",
    category: "Framework",
    previewText: "A beginner-user-friendly guide to Next.js development.",
    description:
      "Next.js is a powerful React-based framework designed to create fast, scalable, and SEO-friendly web applications. Developed by Vercel, it provides a seamless developer experience by offering built-in features such as file-based routing, server-side rendering (SSR), static site generation (SSG), and image optimization. With its hybrid rendering capabilities, Next.js allows developers to choose between static or dynamic content generation based on project requirements. It also comes with automatic code splitting, improving performance by loading only the JavaScript required for the current page. For backend functionality, Next.js includes API routes that enable developers to build server-side endpoints effortlessly. The framework is well-suited for a variety of use cases, including e-commerce websites, blogs, and marketing platforms, making it a versatile tool for modern web development.",
    imageUrl: "/assets/img/Next.jpg",
    author: "Jane Smith",
    date: "2024-11-10",
  },
  {
    id: 3,
    title: "The Rise of Tailwind CSS in Modern Web Design",
    category: "Design-Development",
    previewText:
      "Learn how Tailwind CSS revolutionizes web design with its utility-first approach.",
    description:
      "Gone are the days of struggling with traditional CSS frameworks. Tailwind CSS has introduced a new era of web design with its utility-first approach, enabling developers to style components directly in their markup. Its predefined utility classes reduce the need for writing custom CSS, resulting in cleaner, more maintainable code. The framework's responsive design utilities make it easy to build adaptive layouts without media queries. Additionally, with its JIT (Just-In-Time) compiler, Tailwind generates only the styles you use, significantly reducing the final file size. Whether you're designing a landing page or a complex dashboard, Tailwind CSS ensures efficiency and precision.",
    imageUrl: "/assets/img/Tailwind.png",
    author: "Emma Johnson",
    date: "2024-12-11",
  },
  {
    id: 4,
    title: "Building High-Performance E-Commerce Websites",
    category: "E-Commerce",
    previewText:
      "Explore best practices for creating fast, scalable e-commerce platforms.",
    description:
      "E-commerce websites demand high performance and seamless user experiences to retain customers. A key factor is optimizing loading times with server-side rendering (SSR) or static site generation (SSG) to ensure product pages load instantly. Integrating efficient payment gateways, building robust cart functionalities, and securing user data are critical for success. Tools like Next.js and React streamline the development process by offering features like dynamic routing and image optimization. Additionally, focusing on responsive design ensures accessibility across all devices. A well-optimized e-commerce platform not only boosts conversions but also enhances customer satisfaction.",
    imageUrl: "/assets/img/Ecommerce.png",
    author: "David Brown",
    date: "2024-14-11",
  },
  {
    id: 5,
    title: "The Importance of SEO in Web Development",
    category: "Digital-Marketing",
    previewText:
      "Discover why SEO is essential in today's competitive online landscape.",
    description:
      "In the digital age, visibility is key, and SEO (Search Engine Optimization) is at the forefront of driving organic traffic. Implementing SEO during development involves optimizing page titles, meta descriptions, and image alt tags for search engines. Frameworks like Next.js enhance SEO with their server-side rendering (SSR) capabilities, ensuring that content is indexed more effectively. Structured data and proper keyword research further improve rankings, making your website more discoverable to your target audience. Investing in SEO not only increases traffic but also establishes your brand's authority in a competitive online market.",
    imageUrl: "/assets/img/SEO.png",
    author: "Sarah Williams",
    date: "2024-13-11",
  },
];
export default postData;
