import { toTitleCase } from './to-title-case';

describe('Utils | To Title Case', () => {
    describe('toTitleCase()', () => {
        const testCases: [string, string, string][] = [
            ['one word', 'ONE', 'One'],
            ['five words', 'this is a sample message', 'This Is A Sample Message'],
            ['three words', 'ONE TWO THREE', 'One Two Three'],
        ];

        it.each(testCases)('should return the correct result for %s', (_name, value, expected) => {
            const actual = toTitleCase(value);

            expect(actual).toBe(expected);
        });
    });
});
