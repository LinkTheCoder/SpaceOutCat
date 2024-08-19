import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Timer from '../../components/mindfulness/meditation/Timer';
import '@testing-library/jest-dom/vitest';

describe('Timer Component', () => {
  it('renders timer display with initial value and the buttons', () => {
    render(<Timer />);
    
    // Check timer display
    expect(screen.getByTestId('minutes').textContent).toBe('00');
    expect(screen.getByTestId('seconds').textContent).toBe('00');
    expect(screen.getByTestId('tens').textContent).toBe('00');
    
    // Check buttons
    expect(screen.getByTestId('play')).toBeInTheDocument();
    expect(screen.getByTestId('pause')).toBeInTheDocument();
    expect(screen.getByTestId('backward')).toBeInTheDocument();
  });
});