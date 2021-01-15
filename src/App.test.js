import { cleanup, fireEvent, render, queryByAttribute, waitFor } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

let container;


beforeEach(() => {

  var mockResponse = {
    "_id": "8mHI-1eW7cg",
    "tags": [
      "famous-quotes"
    ],
    "content": "Change me.",
    "author": "Dummy",
    "length": 53
  }
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  });
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  jest.restoreAllMocks();
});
test('expect to have a query box', () => {
  const dom = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(dom.container, 'quote-box');
  expect(queryBox).toBeInTheDocument();
});
test('expect to have a text element in the query box', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(container, 'quote-box');
  const textElement = getById(queryBox, 'text');
  expect(textElement).toBeInTheDocument();
});
test('expect to have an author element in the query box', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(container, 'quote-box');
  const authorElement = getById(queryBox, 'author');
  expect(authorElement).toBeInTheDocument();
});
test('expect to have an new-quote button in the query box', () => {
  const dom = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(dom.container, 'quote-box');
  const newQuoteButton = getById(queryBox, 'new-quote');
  expect(newQuoteButton).toBeInTheDocument();
});
test('expect to have an tweet quote button in the query box', () => {
  const dom = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(dom.container, 'quote-box');
  const tweetQuoteButton = getById(queryBox, 'tweet-quote');
  expect(tweetQuoteButton).toBeInTheDocument();
});
test('expect to have a quote on load', async () => {
  act(() => {
    ReactDOM.render(<App />, container);

  });
  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(container, 'quote-box');
  const textElement = getById(queryBox, 'text');
  await waitFor(() => expect(textElement).toHaveTextContent("Change me"));
});
test('expect to have the quote author on load', async () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(container, 'quote-box');
  const authorElement = getById(queryBox, 'author');
  await waitFor(() => expect(authorElement).toHaveTextContent("Dummy"));
});
test('get a new quote on click', async () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  jest.restoreAllMocks();

  var mockResponse = {
    "_id": "8mHI-1eW7cg",
    "tags": [
      "famous-quotes"
    ],
    "content": "Changed .",
    "author": "Dummy2",
    "length": 53
  }
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  });

  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(container, 'quote-box');
  const quoteElement = getById(queryBox, 'text');
  const newQuoteButton = getById(queryBox, 'new-quote');
  fireEvent.click(newQuoteButton);
  await waitFor(() => expect(quoteElement).toHaveTextContent("Changed"));
});
test('get a new quote author on click', async () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  jest.restoreAllMocks();

  var mockResponse = {
    "_id": "8mHI-1eW7cg",
    "tags": [
      "famous-quotes"
    ],
    "content": "Changed .",
    "author": "Dummy2",
    "length": 53
  }
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  });

  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(container, 'quote-box');
  const authorElement = getById(queryBox, 'author');
  const newQuoteButton = getById(queryBox, 'new-quote');
  fireEvent.click(newQuoteButton);
  await waitFor(() => expect(authorElement).toHaveTextContent("Dummy2"));
});
test('expect to be able to tweet quote', async () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });

  const getById = queryByAttribute.bind(null, 'id');
  var queryBox = getById(container, 'quote-box');
  const tweetButton = getById(queryBox, 'tweet-quote');
  await waitFor(() => expect(tweetButton).toHaveAttribute('href', "https://www.twitter.com/intent/tweet?text=Dummy:%0AChange%20me."));
});
test('expect quote-box to be centered', () => {
  act(() => {
    ReactDOM.render(<App />, container);

  });
  const getById = queryByAttribute.bind(null, 'id');
  var quoteBox = getById(container, 'quote-box');
  expect(quoteBox).toHaveClass("center");
});
