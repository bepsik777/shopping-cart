import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '../components/Home';

describe("App component", () => {
  it('render home', () => {
    render(<Home/>)
    const homeText = screen.getByText("I am Home")
    expect(homeText).toMatchSnapshot()
  })
})

