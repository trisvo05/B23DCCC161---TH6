import React from 'react';
import { List } from 'antd';
import { Destination } from '@/models/itinerary';
import DestinationItem from './DestinationItem';

const DestinationList = ({
  destinations,
  onRemove,
}: {
  destinations: Destination[];
  onRemove: (id: string) => void;
}) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={destinations}
      renderItem={(item) => (
        <DestinationItem key={item.id} item={item} onRemove={onRemove} />
      )}
    />
  );
};

export default DestinationList;
