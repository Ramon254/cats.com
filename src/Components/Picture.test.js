import { render } from '@testing-library/react';
import Picture from './Picture';

test('renders the correct image description', () => {
    const { container } = render(<Picture id={1} />);
    const expected = 'This cat is cooking some fire breakfast';
  
    const linkElement = container.getElementsByClassName('image-container');
    
    expect(linkElement.length).toBe(1);
    expect(linkElement[0].textContent).toBe(expected);
});
