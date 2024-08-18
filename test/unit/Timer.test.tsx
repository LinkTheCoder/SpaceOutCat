import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import Timer from '../../components/mindfulness/meditation/Timer';

describe('Timer', () => {
  it('renders without crashing', () => {
    render(<Timer />);
  });
});
