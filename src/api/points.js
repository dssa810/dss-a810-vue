import { instance } from './index';

function fetchPoints(params) {
  console.log('fetchPoints', params);
  return instance.post('/main/points', {
  },{
    headers: {
      'x-access-token' : params.token
    },
  })
}
export { fetchPoints };