import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getComedianByUid = (uid) => new Promise((resolve, reject) => {
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

export default { getComedianByUid };
