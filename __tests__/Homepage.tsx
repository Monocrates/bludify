import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home page tests', () => {
  const setup = () => render(<Home />);

  beforeEach(() => {});

  it('renders home page', () => {
    setup();
    expect(screen.getByText('Log-in application')).toBeInTheDocument();
  });
});
