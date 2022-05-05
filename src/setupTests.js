import '@testing-library/jest-dom';
import { server } from './mocks/server.js';
// Establish AP mcking before all tests
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());