import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getCurrentUser = (token) => authenticatedHttp.get('/users/me')
