const randomstring = require('randomstring');

export const request = () => ({
        name: 'morpheus',
        job: 'leader',
});

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
    id: expect.any(String),
    createdAt: expect.any(String),
};