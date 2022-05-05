import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// This configures the server to respond to requests with the given handlers.
export const server = setupServer(...handlers);
