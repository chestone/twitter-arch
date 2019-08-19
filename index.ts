require('dotenv').config();

import rp from 'request-promise-native';

console.log(`Starting Twitter Fetch`);

interface RequestOptions {
  uri: String;
  qs: Object;
  headers: Object;
  json: Boolean;
}

const options = {
  uri: ``,
  qs: {},
  headers: {},
  json: true
};

rp(options)
  .then()
  .catch((err:Error) => { console.error(`ERROR`, err) });
