import React, { useMemo } from 'react';
import Card from '../Card';
import './column.css';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon';

function Column({ tickets, grouping, groupBy, userIdToData }) {
  
  const title = useMemo(() => {
    switch (grouping) {
      case 'status':
      case 'priority':
        return groupBy;
      case 'user':
        return userIdToData[groupBy]?.name;
      default:
        return '';
    }
  }, [grouping, groupBy, userIdToData]);

  const icon = useMemo(() => {
    switch (grouping) {
      case 'status':
        return getStatusIcon(groupBy);
      case 'priority':
        return getPriorityIcon(groupBy);
      case 'user':
        const user = userIdToData[groupBy];
        return user ? <UserIcon name={user.name} available={user.available} /> : null;
      default:
        return null;
    }
  }, [grouping, groupBy, userIdToData]);

  return (
    <div className='column'>
      <div className='column-header'>
        <div className='column-header-left-container'>
          {icon}
          <div className='column-title'>
            {title}
            <span className='count'>{tickets.length}</span>
          </div>
        </div>
        <div className='column-header-right-container'></div>
      </div>

      <div className='cards-container'>
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === 'status'}
            hideProfileIcon={grouping === 'user'}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
