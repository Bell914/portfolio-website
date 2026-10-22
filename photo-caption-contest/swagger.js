const swaggerUi = require('swagger-ui-express');

const specification = {
  openapi: '3.0.0',
  info: { title: 'Photo Caption Contest API', version: '1.0.0' },
  paths: {
    '/images': { get: { summary: 'List contest images', responses: { 200: { description: 'Images' } } } },
    '/images/{id}': { get: { summary: 'Get an image and its captions', parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 200: { description: 'Image' }, 404: { description: 'Not found' } } } },
    '/images/{id}/captions': { post: { summary: 'Add a caption', parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }], responses: { 201: { description: 'Caption created' }, 400: { description: 'Invalid caption' } } } },
    '/auth/register': { post: { summary: 'Register a user', responses: { 201: { description: 'User created' }, 409: { description: 'Duplicate email' } } } },
    '/auth/login': { post: { summary: 'Log in a user', responses: { 200: { description: 'Authenticated' }, 401: { description: 'Invalid credentials' } } } }
  }
};

module.exports = { specification, middleware: swaggerUi.serve, handler: swaggerUi.setup(specification) };
