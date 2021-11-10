import { Footer } from '.';
import { screen } from '@testing-library/react';

describe('Footer', () => {

    it('renders footer', () => {
        render(<Footer />);
        const footer = screen.getByRole('footer');
        expect(footer.textContent).toBe('James & Zerh');
    });
})