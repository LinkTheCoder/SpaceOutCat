import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Timer from '../../components/mindfulness/meditation/Timer';

jest.useFakeTimers();

describe('Timer', () => {
  it('renders without crashing', () => {
    render(<Timer />);
  });

  it('initially displays 00:00:00', () => {
    const { getByTestId } = render(<Timer />);
    expect(getByTestId('minutes')).toHaveTextContent('00');
    expect(getByTestId('seconds')).toHaveTextContent('00');
    expect(getByTestId('tens')).toHaveTextContent('00');
  });

  it('starts the timer when the start button is clicked', () => {
    const { getByTestId } = render(<Timer />);
    fireEvent.click(getByTestId('play'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByTestId('seconds')).not.toHaveTextContent('00');
  });

  it('pauses the timer when the pause button is clicked', () => {
    const { getByTestId } = render(<Timer />);
    fireEvent.click(getByTestId('play'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    fireEvent.click(getByTestId('pause'));
    const secondsAfterPause = getByTestId('seconds').textContent;
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByTestId('seconds')).toHaveTextContent(secondsAfterPause);
  });

  it('resets the timer when the reset button is clicked', () => {
    const { getByTestId } = render(<Timer />);
    fireEvent.click(getByTestId('play'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    fireEvent.click(getByTestId('backward'));
    expect(getByTestId('minutes')).toHaveTextContent('00');
    expect(getByTestId('seconds')).toHaveTextContent('00');
    expect(getByTestId('tens')).toHaveTextContent('00');
  });
});