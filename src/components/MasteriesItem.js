import React from 'react';
import champion from '../apis/champion';

const MasteriesItem = ({ mastery }) => {
  champion.get('champion.json')
  .then(function (champion) {
    console.log(champion.data.data);
  })
  return (
    <div>
      {mastery.championId}
    </div>
  );
}

export default MasteriesItem;
