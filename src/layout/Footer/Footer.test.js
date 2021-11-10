import { Footer } from './index';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {

    test('renders footer', () => {
        render(<Footer />)
        const footer = screen.getByRole('footer');
        expect(footer.textContent).toBe('James & Zerh');
    });
})