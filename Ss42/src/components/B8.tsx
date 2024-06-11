import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function B8() {
  const [key, setKey] = useState('Trang chủ');

  return (
    <>
        <br />
        <h2>B8:</h2>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k: any) => setKey(k)}
        className="mb-3"
        >
        <Tab eventKey="home" title="Trang Chủ">
            Đây là trang chủ
        </Tab>
        <Tab eventKey="profile" title="Giới thiệu">
            Đây là trang giới thiệu
        </Tab>
        <Tab eventKey="contact" title="Liên hệ">
            Đây là trang liên hệ
        </Tab>
        </Tabs>
        <br />
    </>
  );
}

export default B8;