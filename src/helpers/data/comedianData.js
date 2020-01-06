import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getComediansByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comedians.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allComediansObj = result.data;
      const comedians = [];
      if (allComediansObj != null) {
        Object.keys(allComediansObj).forEach((comedianId) => {
          const newComedian = allComediansObj[comedianId];
          newComedian.id = comedianId;
          comedians.push(newComedian);
        });
      }
      resolve(comedians);
    })
    .catch((error) => {
      reject(error);
    });
});

const saveComedian = (comedianInfo) => axios.post(`${baseUrl}/comedians.json`, comedianInfo);

const updateComedian = (comedianId, newComedianInfo) => axios.put(`${baseUrl}/comedians/${comedianId}.json`, newComedianInfo);

export default { getComediansByUid, saveComedian, updateComedian };
