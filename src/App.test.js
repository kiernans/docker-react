import { render, screen } from '@testing-library/react';
import App from './App';

test('renders goodbye link', () => {
	render(<App />);
	const linkElement = screen.getByText(/goodbye/i);
	expect(linkElement).toBeInTheDocument();
});
test('renders goodbye link', () => {
	render(<App />);
	const linkElement = screen.getByText(/goodbye/i);
	expect(linkElement).toBeInTheDocument();
});
