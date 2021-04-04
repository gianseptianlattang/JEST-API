import * as data from '../data/update';
import * as endpoint from '../endpoint/test';
// import * as schema from '../schema/create'; untuk jest terbaru tidak ada fungsi tomatchschema

let body;
let response;

describe('Update User -- Positif Case', () => {
//   beforeAll(async () => {
//     await base.seedingData('');
//   });
    test(`Update User using valid request`, async () => {
        body = data.request();
        response = await endpoint.update(body, 2);
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSnapshot(data.snapEx);
        // expect(response.body).toMatchSchema(schema.positif);
    });
});

describe('Update User -- Negatif Case', () => {
    //   beforeAll(async () => {
    //     await base.seedingData('');
    //   });
        (data.negativeCase).forEach(async (element) => {
            test(`Update User using ${element.title}`, async () => {
                body = data.request();
                const param = Object.keys(element.request);
                body[param]= element.request[param];
                response = await endpoint.update(body, 2);
                expect(response.status).toEqual(200); //harusnya 400 (200 mengikuti reqres.in)
                // expect(response.body).toMatchSnapshot(data.snapEx); //tidak bisa snapshot karena data berubah-ubah dan mengikuti reqres.in
            });
        });
    });