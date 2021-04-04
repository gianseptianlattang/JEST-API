import * as data from '../data/create';
import * as endpoint from '../endpoint/test';
// import * as schema from '../schema/create'; untuk jest terbaru tidak ada fungsi tomatchschema

let body;
let response;

describe('Create User -- Positif Case', () => {
//   beforeAll(async () => {
//     await base.seedingData('');
//   });
    test(`Create User using valid request`, async () => {
        body = data.request();
        response = await endpoint.create(body);
        expect(response.status).toEqual(201);
        expect(response.body).toMatchSnapshot(data.snapEx);
        // expect(response.body).toMatchSchema(schema.positif);
    });
});

describe('Create User -- Negatif Case', () => {
    //   beforeAll(async () => {
    //     await base.seedingData('');
    //   });
        (data.negativeCase).forEach(async (element) => {
            test(`Create User using ${element.title}`, async () => {
                body = data.request();
                const param = Object.keys(element.request);
                body[param]= element.request[param];
                response = await endpoint.create(body);
                expect(response.status).toEqual(201); //harusnya 400 (201 mengikuti reqres.in)
                // expect(response.body).toMatchSnapshot(data.snapEx); //tidak bisa snapshot karena data berubah-ubah dan mengikuti reqres.in
            });
        });
    });