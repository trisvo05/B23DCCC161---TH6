import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'umi';
import { Button, Card, message, Modal, Input, InputNumber, DatePicker, Row, Col } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import DestinationList from './components/DestinationList';
import { getDestinations } from '@/services/itinerary';

const ItineraryPage: React.FC = () => {
  const dispatch = useDispatch();
  const { destinations } = useSelector((state: any) => state.itinerary);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', date: '', cost: 0, duration: 0 });

  useEffect(() => {
    const data = getDestinations();
    dispatch({ type: 'itinerary/setDestinations', payload: data });
  }, [dispatch]);

  const handleAdd = () => {
    if (!form.name || !form.date) {
      message.error('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    dispatch({
      type: 'itinerary/addDestination',
      payload: { ...form, id: uuidv4() },
    });
    message.success('Thêm điểm đến thành công!');
    setOpen(false);
    setForm({ name: '', date: '', cost: 0, duration: 0 });
  };

  return (
    <Row justify="center" style={{ padding: '16px' }}>
      <Col xs={24} sm={22} md={20} lg={16} xl={12}>
        <Card title="Lịch trình du lịch của bạn">
          <DestinationList destinations={destinations} onRemove={(id) => dispatch({ type: 'itinerary/removeDestination', payload: id })} />
          <Button type="primary" onClick={() => setOpen(true)} style={{ marginTop: 16 }}>Thêm điểm đến</Button>

          <Modal
            title="Thêm điểm đến"
            open={open}
            onOk={handleAdd}
            onCancel={() => setOpen(false)}
          >
            <Input
              placeholder="Tên địa điểm"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <DatePicker
              style={{ marginTop: 8, width: '100%' }}
              value={form.date ? dayjs(form.date) : null}
              onChange={(_, dateString) => setForm({ ...form, date: dateString })}
            />
            <InputNumber
              placeholder="Chi phí"
              style={{ marginTop: 8, width: '100%' }}
              value={form.cost ?? 0}
              onChange={value => setForm({ ...form, cost: Number(value ?? 0) })}
            />
            <InputNumber
              placeholder="Thời gian di chuyển (giờ)"
              style={{ marginTop: 8, width: '100%' }}
              value={form.duration ?? 0}
              onChange={value => setForm({ ...form, duration: Number(value ?? 0) })}
            />
          </Modal>
        </Card>
      </Col>
    </Row>
  );
};

export default ItineraryPage;