import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const createProduct = (product) => authenticatedHttp.post('/products', product);

export const listProduct = () => unauthenticatedHttp.get('/products');

export const buyProduct = (id) => authenticatedHttp.patch(`/products/${id}`)

export const productDetail = (id) => unauthenticatedHttp.get(`/products/${id}`)