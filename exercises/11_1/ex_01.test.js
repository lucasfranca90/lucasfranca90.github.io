const uppercase = (str, callback) => {
  setTimeout(() => {
    const upcase = str.toUpperCase();
    callback(upcase);
  }, 2000);
}

it('teste que verifica a chamada do callback da função uppercase', done => {
  expect.assertions(1);

  uppercase('string', str => {
    expect(str).toBe('STRING');
  });
});