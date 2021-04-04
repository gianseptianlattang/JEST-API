const randomstring = require('randomstring');

export const request = () => ({
        name: 'morpheus2',
        job: 'member',
});

//Untuk Update biasanya cek negatif case token, namun reqres.in tidak pake token.
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

export const negativeCase = [
    {
        title: 'null on name field',
        request: {
          name: null,
        },
      },
      {
        title: 'empty string on name field',
        request: {
          name: '',
        },
      },
      {
        title: 'number on name field',
        request: {
          name: randomstring.generate({ charset: 'numeric', length: '10' }),
        },
      },
      {
        title: 'less than 3 char on name field',
        request: {
          name: randomstring.generate({ charset: 'alphabetic', length: '2' }),
        },
      },
      {
        title: 'greater than 30 char on name field',
        request: {
          name: randomstring.generate({ charset: 'alphabetic', length: '31' }),
        },
      },
      {
        title: 'symbol @ on name field',
        request: {
          name: `@${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol . on name field',
        request: {
          name: `.${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol , on name field',
        request: {
          name: `,${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol _ on name field',
        request: {
          name: `_${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol ! on name field',
        request: {
          name: `!${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol / on name field',
        request: {
          name: `/${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol ? on name field',
        request: {
          name: `?${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol # on name field',
        request: {
          name: `#${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol $ on name field',
        request: {
          name: `$${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
    
      {
        title: 'symbol % on name field',
        request: {
          name: `%${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol ^ on name field',
        request: {
          name: `^${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol & on name field',
        request: {
          name: `&${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol * on name field',
        request: {
          name: `*${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'null on job field',
        request: {
          job: null,
        },
      },
      {
        title: 'empty string on job field',
        request: {
          job: '',
        },
      },
      {
        title: 'number on job field',
        request: {
          name: randomstring.generate({ charset: 'numeric', length: '10' }),
        },
      },
      {
        title: 'less than 3 char on job field',
        request: {
          job: randomstring.generate({ charset: 'alphabetic', length: '2' }),
        },
      },
      {
        title: 'greater than 30 char on job field',
        request: {
          job: randomstring.generate({ charset: 'alphabetic', length: '31' }),
        },
      },
      {
        title: 'symbol @ on job field',
        request: {
          job: `@${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol . on job field',
        request: {
          job: `.${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol , on job field',
        request: {
          job: `,${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol _ on job field',
        request: {
          job: `_${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol ! on job field',
        request: {
          job: `!${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol / on job field',
        request: {
          job: `/${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol ? on job field',
        request: {
          job: `?${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol # on job field',
        request: {
          job: `#${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol $ on job field',
        request: {
          job: `$${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
    
      {
        title: 'symbol % on job field',
        request: {
          job: `%${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol ^ on job field',
        request: {
          job: `^${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol & on job field',
        request: {
          job: `&${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
      {
        title: 'symbol * on job field',
        request: {
          job: `*${randomstring.generate({ charset: 'alphabetic', length: '4' })}`,
        },
      },
];

export const snapEx = {
    updatedAt: expect.any(String),
};