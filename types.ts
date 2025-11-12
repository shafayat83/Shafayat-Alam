export interface Author {
    id: string;
    name: string;
    avatarUrl: string;
    bio: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Post {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    authorId: string;
    categoryId: string;
    tags: string[];
    publishedDate: string;
    readTime: number; // in minutes
    featured?: boolean;
}
