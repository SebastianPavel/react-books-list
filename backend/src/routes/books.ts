import { Router } from "express";
import { books, Book } from "../data/books";
import { randomUUID } from "crypto";

const router = Router();

/**
 * GET /api/books
 */
router.get("/", (_req, res) => {
    res.json(books);
});

/**
 * POST /api/books
 */
router.post("/", (req, res) => {
    const { title, description, imageUrl } = req.body as Partial<Book>;

    if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Title is required" });
    }

    const newBook: Book = {
        id: randomUUID(),
        title,
        description,
        imageUrl
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

export default router;
