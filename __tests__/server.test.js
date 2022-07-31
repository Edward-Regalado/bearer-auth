const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Node Server', () => {
    // it('Says Hello World', async () => {

    // The response is a promise
    // const response = await request.get('/');

    // assert or expect the result of the action
    // expect the / route to respond with hello
//     expect(response.status).toBe(200);
//     expect(response.text).toEqual('Hello, World');
// });

// it('Gets Student Data', async () => {
//     const response = await request.get('/data');

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({
//       name: 'Tony',
//       role: 'Student',
//     });
//   });

  it('404 bad route', async () => {
    const response = await request.get('/anyRouteHere');

    expect(response.status).toBe(404);
  })

//   it('200 response okay', async ()=> {
//     const response = await request.get('/data');
//     expect(response.status).toBe(200);
//   })
});
