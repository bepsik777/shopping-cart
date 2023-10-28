import { afterAll, afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import {setupServer} from 'msw/node'
import {http} from 'msw'


const mockData = [
  {
    id: 1,
    title: 'titleOne',
    price: 10,
  },
  {
    id: 2,
    title: 'titleTwo',
    price: 10,
  },
  {
    id: 3,
    title: 'titleThree',
    price: 10,
  },
  {
    id: 4,
    title: 'titleFour',
    price: 10,
  },
]

export const restHandlers = [
  http.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData))
  })
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({onUnhandledRequest: 'error'}))

afterAll(() => server.close())

// afterEach(() => server.resetHandlers())

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
  server.resetHandlers()
});