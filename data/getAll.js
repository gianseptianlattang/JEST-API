export const queryparam = () => ({
    page : 2
});

export const casequeryparam = [
    {
        title: 'page 1',
        request: {
          page: 1,
        },
    },
    {
        title: 'page 2',
        request: {
          page: 2,
        },
    },
];

//Untuk get biasanya cek negatif case token, namun reqres.in tidak pake token.
// export const negativeTokenRequest = [
//     {
//       desc: 'without token',
//       request: {
//         token: '',
//       },
//     },
//     {
//       desc: 'with null token',
//       request: {
//         token: null,
//       },
//     },
//     {
//       desc: 'with wrong token - Man1',
//       request: {
//         token: Man1,
//       },
//     },
//     {
//       desc: 'with wrong token - Admin1',
//       request: {
//         token: Admin1,
//       },
//     },
//     {
//       desc: 'with random token',
//       request: {
//         token: randomToken,
//       },
//     },
//   ];