interface CatFact {
    fact: string;
    length: number;
}

interface Book {
    key: string;
    title: string;
    author_name?: string[];
    first_publish_year?: number;
    cover_i?: number;
}

interface OpenLibraryResponse {
    docs: Book[];
}

interface DogImage {
    message: string;
    status: string;
}

interface Quote {
    quote: string;
    author: string;
}

export function initFun(): void {
    const catFactButton =
        document.querySelector<HTMLButtonElement>("#cat-fact-btn");
    const catFactOutput = document.querySelector<HTMLElement>("#cat-fact");
    const bookButton = document.querySelector<HTMLButtonElement>("#book-btn");
    const bookOutput = document.querySelector<HTMLElement>("#book-result");
    const dogButton = document.querySelector<HTMLButtonElement>("#dog-btn");
    const dogImage = document.querySelector<HTMLImageElement>("#dog-img");
    const quoteButton = document.querySelector<HTMLButtonElement>("#quote-btn");
    const quoteOutput = document.querySelector<HTMLElement>("#quote-result");

    catFactButton?.addEventListener("click", async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact");

            if (!response.ok) {
                console.error("Cat Fact API error:", await response.text());
                return;
            }

            const data: CatFact = await response.json();

            if (catFactOutput) {
                catFactOutput.textContent = data.fact;
            }
        } catch (error) {
            console.error("Cat Fact request failed:", error);

            if (catFactOutput)
                catFactOutput.textContent = "failed to load cat fact... AWH!";
        }
    });

    bookButton?.addEventListener("click", async () => {
        const topics = [
            "programming",
            "cats",
            "dogs",
            "space",
            "ocean",
            "dinosaurs",
            "mythology",
            "psychology",
            "music",
            "art",
            "history",
            "science",
            "mathematics",
            "architecture",
            "philosophy",
            "food",
            "nature",
            "travel",
            "fantasy",
            "horror",
            "mystery",
            "adventure",
            "comedy",
            "poetry",
            "robots",
            "games",
            "technology",
            "medicine",
            "languages",
            "geography",
        ];

        const topic = topics[Math.floor(Math.random() * topics.length)];

        try {
            const response = await fetch(
                `https://openlibrary.org/search.json?q=${topic}&fields=key,title,author_name,first_publish_year,cover_i&sort=random&limit=1`,
            );

            if (!response.ok) {
                console.error("Open Library API error:", await response.text());
                return;
            }

            const data: OpenLibraryResponse = await response.json();

            const book: Book | undefined = data.docs?.[0];

            if (bookOutput) {
                if (!book) {
                    bookOutput.textContent = "no books found... AWH!";
                    return;
                }

                const author = book.author_name?.join(", ") ?? "Unknown author";

                const year =
                    book.first_publish_year !== undefined
                        ? String(book.first_publish_year)
                        : "Unknown year";

                bookOutput.textContent = `${book.title} — ${author} (${year})`;
            }
        } catch (error) {
            console.error("Open Library request failed:", error);

            if (bookOutput)
                bookOutput.textContent = "failed to load book... AWH!";
        }
    });

    dogButton?.addEventListener("click", async () => {
        try {
            const response = await fetch(
                "https://dog.ceo/api/breeds/image/random",
            );

            if (!response.ok) {
                console.error("Dog CEO API error:", await response.text());
                return;
            }

            const data: DogImage = await response.json();

            if (dogImage) {
                dogImage.src = data.message;
            }
        } catch (error) {
            console.error("Dog request failed:", error);
        }
    });

    quoteButton?.addEventListener("click", async () => {
        try {
            const response = await fetch("https://dummyjson.com/quotes/random");

            if (!response.ok) {
                console.error("Quote API error:", await response.text());
                return;
            }

            const data: Quote = await response.json();

            if (quoteOutput) {
                quoteOutput.textContent = `"${data.quote}" — ${data.author}`;
            }
        } catch (error) {
            console.error("Quote request failed:", error);

            if (quoteOutput)
                quoteOutput.textContent = "failed to load quote... AWH!";
        }
    });
}
