import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'


test("Hello World", () => {
  const { container } = render(<Button isDisable></Button>);

  expect(container.querySelector("span.disabled")).not.toBeInTheDocument();
}); 

test("Hello World loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span.disabled")).not.toBeInTheDocument();
}); 

test("Hello World <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
}); 

test("Hello World <Link> compenent", () => {
  const { container } = render( <Router> <Button href="#" type="link"></Button> </Router> )

  expect(container.querySelector("a")).toBeInTheDocument();
}); 