import {isEqual} from 'lodash';
import {getLetterCount} from './letter-count';

export const checkForAnagram = (string1, string2) => {

    string1 = string1.split(' ').join('')
    string2 = string2.split(' ').join('')
    
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    console.log(string2);

    const string1LetterCount = getLetterCount(string1);
    const string2LetterCount = getLetterCount(string2);

    return isEqual(string1LetterCount, string2LetterCount);
};