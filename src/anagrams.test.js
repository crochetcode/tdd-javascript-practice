import {checkForAnagram} from './anagrams';
import {expect} from 'chai';

describe('anagrams function', () => {
    it('should return false if not an anagram', () => {
        const actual = checkForAnagram('cat', 'dog');
        expect(actual).to.be.false;
    });
    it('should return true if anagram', () => {
        const actual = checkForAnagram('listen', 'silent');
        expect(actual).to.be.true;
    });
    it('conversation and voices rant on', () => {
        const actual = checkForAnagram('conversation', 'voices rant on');
        expect(actual).to.be.true;
    });
    it('STATE and taste are anagrams', () => {
        const actual = checkForAnagram('STATE', 'taste');
        expect(actual).to.be.true;
    });
});