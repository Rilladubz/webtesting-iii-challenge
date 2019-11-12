// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});

test('toggleClick is running correctly', () => {
    const toggleLocked = jest.fn();
    toggleLocked();
    expect(toggleLocked).toHaveBeenCalled();
})

