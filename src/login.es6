/* eslint-disable linebreak-style */
let login = (username, password) => {
  if (username !== 'admin' || password !== 'radical') {
    // eslint-disable-next-line no-console
    console.log('incorrect login');
  }
};

//login('admin', 'idunno');
export {
  login
}
