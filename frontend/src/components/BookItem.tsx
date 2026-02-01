import { useState } from "react";
import type { Book } from "../api/books-api";

type Props = {
    book: Book;
};

const PLACEHOLDER_IMAGE = "/book-placeholder.png";

export function BookItem({ book }: Props) {
    const [showDescription, setShowDescription] = useState(false);

    const hasDescription =
        typeof book.description === "string" && book.description.trim().length > 0;

    const descriptionId = `book-description-${book.id}`;

    return (
        <div className="book-item">
            <img
                src={book.imageUrl ?? PLACEHOLDER_IMAGE}
                alt={book.title}
                onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER_IMAGE;
                }}
            />

            <div className="book-content">
                <h3>{book.title}</h3>

                {hasDescription ? (
                    <>
                        <button
                            type="button"
                            onClick={() => setShowDescription((v) => !v)}
                            aria-expanded={showDescription}
                            aria-controls={descriptionId}
                        >
                            {showDescription ? "Hide description" : "Show description"}
                        </button>

                        {showDescription && (
                            <p id={descriptionId}>{book.description}</p>
                        )}
                    </>
                ) : (
                    <p className="book-no-description">No description available.</p>
                )}
            </div>
        </div>
    );
}
