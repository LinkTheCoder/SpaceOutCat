import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderTimer from '../../components/mindfulness/meditation/HeaderTimer';

describe('HeaderTimer', () => {
    test('renders Timer component with correct interactions', () => {
        // Render the HeaderTimer component
        render(<HeaderTimer />);

        // Check if Timer component is rendered
        const minutesElement = screen.getByTestId('minutes');
        const secondsElement = screen.getByTestId('seconds');
        const tensElement = screen.getByTestId('tens');
        expect(minutesElement).toBeInTheDocument();
        expect(secondsElement).toBeInTheDocument();
        expect(tensElement).toBeInTheDocument();

        // Check if play, pause, and backward buttons are rendered
        const playButton = screen.getByTestId('play');
        const pauseButton = screen.getByTestId('pause');
        const backwardButton = screen.getByTestId('backward');
        expect(playButton).toBeInTheDocument();
        expect(pauseButton).toBeInTheDocument();
        expect(backwardButton).toBeInTheDocument();

        // Check if the Timer starts when the play button is clicked
        fireEvent.click(playButton);
   
        // Check if the Timer pauses when the pause button is clicked
        fireEvent.click(pauseButton);

        // Check if the Timer resets when the backward button is clicked
        fireEvent.click(backwardButton);
    });
});
