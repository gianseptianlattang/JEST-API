export const queryparam = () => ({
    id : 2
});

export const casequeryparamid = [
    {
        title: 'id 1',
        request: {
          id: 1,
        },
    },
    {
        title: 'id 2',
        request: {
          id: 2,
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