import * as data from '../data/getDetail';
import * as endpoint from '../endpoint/test';
// import * as schema from '../schema/create'; untuk jest terbaru tidak ada fungsi tomatchschema

let body;
let response;

describe('View Detail User -- Positif Case', () => {
//   beforeAll(async () => {
//     await base.seedingData('');
//   });
    (data.casequeryparamid).forEach(async (element) => {
        test(`View Detail User with ${element.title}`, async () => {
            body = data.queryparam();
            const param = Object.keys(element.request);
            body[param]= element.request[param];
            response = await endpoint.getDetail(body.id);
            expect(response.status).toEqual(200); 
            expect(response.body).toMatchSnapshot(); 
        });
    });
});