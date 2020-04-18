const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
  6: { name: 'Ana'},
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }
      
  test ('Testa se encontrou uma ID', () => {
    expect.assertions(1);

    getUserName(6).then(name => expect(name).toBe('Ana'));
  })