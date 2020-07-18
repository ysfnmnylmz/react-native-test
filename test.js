const axios = require('axios');
const fs = require('fs');


axios.get('https://api.footystats.org/league-teams', {
    params: {
      key: 'test85g57',
      season_id: 2012,
      include: 'stats'
    }
  })
  .then(function (response) {
    fs.writeFile("F:/Projects/backend/backend/fixtures/first/teams.json", JSON.stringify(response.data, null, 2), err => {
    if (err) throw err;
    console.log('İşlem tamamlandı');
    });
  })
  .catch(function (error) {
    console.log('e:', error);
  });

// const catalogue = Axios.get('https://api.footystats.org/league-season?key=test85g57&season_id=2012', headers=header)
// fs.writeFile("./test.json", JSON.stringify(catalogue), err => {
//     if (err) throw err;
//     console.log(catalogue);
//     console.log('İşlem tamamlandı');
// });