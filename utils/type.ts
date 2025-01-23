type Post = {
    title: string;
    description: string;
    image: string;
    date: Date;
    author: User;
    likes: number;
    comments: Comment[];
    dislikes: number;
}
type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatar: string;
}
type Comment = {
    id: number;
    author: User;
    content: string;
    date: Date;
    replies: Comment[];
    likes: number;
    dislikes: number;
}

export type { Post, User,Comment };