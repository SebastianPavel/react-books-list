/**
 * Checks whether a given string is a valid absolute URL.
 *
 * This utility uses the native `URL` constructor instead of a regex
 * to avoid false positives and edge cases.
 *
 * Examples:
 * - isValidUrl("https://example.com") -> true
 * - isValidUrl("http://localhost:3000/image.png") -> true
 * - isValidUrl("not-a-url") -> false
 * - isValidUrl("") -> false
 *
 * @param value - The string value to validate
 * @returns `true` if the value is a valid URL, otherwise `false`
 */
export function isValidUrl(value: string): boolean {
    if (!value) {
        return false;
    }

    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
}
