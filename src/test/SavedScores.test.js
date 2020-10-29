import { render, screen } from '@testing-library/react';
import SavedScores from '../components/SavedScores';


describe('<SavedScores/>', () => {   
    test('should return no scores', () => {
        render(<SavedScores/>);
        expect(screen.getByText("No Saved Scores!")).toBeInTheDocument();    
    });
});