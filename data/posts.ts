import type { Post } from '../types';

export const posts: Post[] = [
    {
        id: 'post-1',
        slug: 'the-future-of-react',
        title: 'The Future of React: Concurrent Mode and Beyond',
        excerpt: 'React 18 introduced groundbreaking features like concurrent rendering. We dive deep into what this means for developers and the web.',
        content: `
React 18 marks a new era for the popular library. With the introduction of concurrent features, developers can build more responsive and fluid user interfaces than ever before. 
<br/><br/>
Key features include:
<ul>
  <li><strong>Automatic Batching:</strong> Fewer re-renders out of the box.</li>
  <li><strong>Transitions:</strong> A new way to distinguish between urgent and non-urgent updates.</li>
  <li><strong>Suspense for Data Fetching:</strong> A powerful pattern for declarative loading states.</li>
</ul>
<br/>
These updates, while powerful, require a shift in thinking. We'll explore how to adopt these new patterns in your existing applications and what pitfalls to avoid. The future is bright, and it's concurrent.
        `,
        imageUrl: 'https://picsum.photos/seed/react/800/400',
        authorId: 'author-1',
        categoryId: 'cat-1',
        tags: ['React', 'Web Dev', 'JavaScript'],
        publishedDate: '2023-10-26',
        readTime: 8,
        featured: true,
    },
    {
        id: 'post-2',
        slug: 'journey-through-the-andes',
        title: 'A Journey Through the Andes: 10 Breathtaking Views',
        excerpt: 'From the vibrant colors of Rainbow Mountain to the ancient mysteries of Machu Picchu, the Andes are a treasure trove of wonders.',
        content: `
The Andes mountain range is not just a geological marvel; it's a cultural and spiritual backbone of South America. Our journey began in Cusco, the ancient capital of the Inca Empire.
<br/><br/>
The trek to Machu Picchu was challenging but rewarding, with every turn revealing a vista more stunning than the last. We also explored the Sacred Valley, meeting local communities and learning about their enduring traditions. This trip was more than a vacation; it was an immersion into a world where nature and history intertwine.
        `,
        imageUrl: 'https://picsum.photos/seed/andes/800/400',
        authorId: 'author-2',
        categoryId: 'cat-2',
        tags: ['Travel', 'Nature', 'Photography'],
        publishedDate: '2023-10-24',
        readTime: 6,
        featured: true,
    },
    {
        id: 'post-3',
        slug: 'mastering-tailwind-css',
        title: 'Mastering Tailwind CSS: A Practical Guide',
        excerpt: 'Go from beginner to pro with Tailwind CSS. This tutorial covers everything from setup to advanced customization and responsive design.',
        content: `
Tailwind CSS has revolutionized the way we style for the web. Instead of writing custom CSS, you use utility classes directly in your HTML. This might seem strange at first, but it leads to faster development and more maintainable codebases.
<br/><br/>
In this guide, we'll cover:
<ol>
  <li>Setting up Tailwind in your project.</li>
  <li>Understanding the core concepts of utility-first.</li>
  <li>Building responsive components without leaving your HTML.</li>
  <li>Customizing your theme and adding new utilities.</li>
</ol>
        `,
        imageUrl: 'https://picsum.photos/seed/tailwind/800/400',
        authorId: 'author-1',
        categoryId: 'cat-3',
        tags: ['CSS', 'Tutorial', 'Web Dev'],
        publishedDate: '2023-10-20',
        readTime: 12,
        featured: true,
    },
    {
        id: 'post-4',
        slug: 'the-rise-of-ai',
        title: 'The Rise of AI: A Double-Edged Sword?',
        excerpt: 'Artificial intelligence is progressing at an exponential rate. Is this the dawn of a new age of prosperity or a threat to our very existence?',
        content: `
From large language models to generative art, AI is no longer a concept from science fiction. It's here, and it's changing our world. The potential benefits are immense: curing diseases, solving climate change, and automating mundane tasks.
<br/><br/>
However, we must also consider the risks. Job displacement, algorithmic bias, and the potential for autonomous systems to act in unintended ways are serious concerns. This article explores both sides of the coin, arguing for a balanced approach to AI development that prioritizes ethics and safety.
        `,
        imageUrl: 'https://picsum.photos/seed/ai/800/400',
        authorId: 'author-1',
        categoryId: 'cat-4',
        tags: ['AI', 'Opinion', 'Technology'],
        publishedDate: '2023-10-15',
        readTime: 9,
    },
    {
        id: 'post-5',
        slug: 'creating-3d-web-experiences',
        title: 'Creating Immersive 3D Web Experiences',
        excerpt: 'Learn how to add depth and interactivity to your websites using simple CSS transforms and a touch of JavaScript. No WebGL required!',
        content: `
You don't need to be a WebGL expert to create compelling 3D effects on the web. Modern CSS provides powerful tools like \`transform-style: preserve-3d\` and \`perspective\` that can create a sense of depth and immersion.
<br/><br/>
We'll build a 3D interactive card, a parallax scrolling effect, and a rotating cube gallery, all using techniques that are accessible and performant. This is a great way to make your portfolio or product site stand out from the crowd.
        `,
        imageUrl: 'https://picsum.photos/seed/3d/800/400',
        authorId: 'author-1',
        categoryId: 'cat-3',
        tags: ['CSS', '3D', 'Web Dev', 'Multimedia'],
        publishedDate: '2023-10-11',
        readTime: 10,
    },
    {
        id: 'post-6',
        slug: 'gadget-review-2023',
        title: 'Review: The Pixel Tablet - A New Contender?',
        excerpt: 'Google has re-entered the tablet market with the Pixel Tablet. We spent a month with it to see if it can compete with the likes of Apple and Samsung.',
        content: `
The Pixel Tablet is an interesting device. Its unique selling point is the included speaker dock, which transforms it into a smart home hub when not in use. The software is clean, the performance is snappy, and the screen is great for media consumption.
<br/><br/>
However, it's not without its flaws. The app ecosystem for Android tablets still lags behind the iPad, and the pricing is ambitious. Is it the right tablet for you? Our in-depth review breaks down the pros and cons to help you decide.
        `,
        imageUrl: 'https://picsum.photos/seed/pixel/800/400',
        authorId: 'author-1',
        categoryId: 'cat-5',
        tags: ['Review', 'Gadgets', 'Technology'],
        publishedDate: '2023-10-05',
        readTime: 7,
    }
];
