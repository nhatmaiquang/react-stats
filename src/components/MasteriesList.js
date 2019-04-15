import React from 'react';
import MasteriesItem from './MasteriesItem';

const MasteriesList = ({ masteries }) => {
  const renderedList = masteries.map((mastery) => {
    return <MasteriesItem mastery={mastery}/>;
  });

  return (
    <div>{renderedList}</div>
  );
}

export default MasteriesList;
