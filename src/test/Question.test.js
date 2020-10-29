import { render } from '@testing-library/react';
import Question from '../components/Question';
import data from '../components/data'

describe('<Question/>', () => {
    const number = 3;

    beforeEach(() => {
        const score = 0;
        const setCorrect = jest.fn();
        const setAnswer = jest.fn();
        const setNumber = jest.fn();       
        render(<Question number={number} score={score} setCorrect={setCorrect} 
            setAnswer={setAnswer} setNumber={setNumber} />);
    });

    test('check that the array of answers includes the correct answer',  () => {
        expect(data[number].incorrect).toEqual(expect.arrayContaining([data[number].correct]))
    });

    test('check that the answers array position is not equal to 3', () => {
        expect(data[number].incorrect.indexOf(data[number].correct)).not.toBe(3);
    });
});