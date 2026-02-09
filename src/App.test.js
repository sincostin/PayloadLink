// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PayloadLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PayloadLink/i);
    expect(titleElement).toBeInTheDocument();
});
