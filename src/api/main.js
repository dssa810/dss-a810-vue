import { instance } from './index';

function fetchMain(params) {
  console.log('fetchMain', params);
  return instance.post('/main/main', {
    // data: {
    //   'missionId': params.missionId
    // }
  },{
    headers: {
      'x-access-token' : params.token
    },
  })
}

export { fetchMain };