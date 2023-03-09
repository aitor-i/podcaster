import { render } from '@testing-library/react';
import App from 'service/ui/App';

describe('App', () => {
  it('should render App component', () => {
    render(<App />);
  });
});
