import { instance } from './index';

function fetchMissions(params) {
  console.log('fetchMissions', params);
  return instance.post('/main/missions', {
    data: {
      'missionId': params.missionId
    }
  },{
    headers: {
      'x-access-token' : params.token
    },
  })
}

export { fetchMissions };