// pages/itinerary/components/DestinationItem.tsx
import React from 'react';
import { List, Button } from 'antd';
import { Destination } from '@/models/itinerary';

interface DestinationItemProps {
  item: Destination;
  onRemove: (id: string) => void;
}

const DestinationItem: React.FC<DestinationItemProps> = ({ item, onRemove }) => {
  return (
    <List.Item
      key={item.id}
      actions={[
        <Button danger onClick={() => onRemove(item.id)} key="remove">
          Xoá
        </Button>
      ]}
    >
      <List.Item.Meta
        title={item.name}
        description={`Ngày: ${item.date}, Chi phí: ${item.cost.toLocaleString()}₫, Thời gian: ${item.duration}h`}
      />
    </List.Item>
  );
};

export default DestinationItem;
