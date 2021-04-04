import * as data from '../data/getAll';
import * as endpoint from '../endpoint/test';
// import * as schema from '../schema/create'; untuk jest terbaru tidak ada fungsi tomatchschema

let body;
let response;

describe('Get All User -- Positif Case', () => {
//   beforeAll(async () => {
//     await base.seedingData('');
//   });
    (data.casequeryparam).forEach(async (element) => {
        test(`Get All User on ${element.title}`, async () => {
            body = data.queryparam();
            const param = Object.keys(element.request);
            body[param]= element.request[param];
            response = await endpoint.getAll(body);
            expect(response.status).toEqual(200); 
            expect(response.body).toMatchSnapshot(); 
        });
    });
});