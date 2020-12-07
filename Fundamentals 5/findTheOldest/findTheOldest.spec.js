let findTheOldest = require('./findTheOldest')

describe('findTheOldest', function() {

  it('finds the oldest person!', function() {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ]
    expect(findTheOldest(people).name).toEqual('Jane');
  });

});
