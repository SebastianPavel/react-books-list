export type Book = {
    id: string;
    title: string;
    description?: string;
    imageUrl?: string;
};

export const books: Book[] = [
    {
        id: "1",
        title: "Clean Code",
        description: "A Handbook of Agile Software Craftsmanship"
    },
    {
        id: "2",
        title: "Designing Data-Intensive Applications",
        description:
            "The Big Ideas Behind Reliable, Scalable, and Maintainable Systems"
    }
];
