import Button from 'react-bootstrap/Button';

function B1() {
  return (
    <>
    <h2>B1:</h2>
      <Button variant="primary">Lưu</Button>{' '}
      <Button variant="secondary">Hủy</Button>{' '}
      <Button variant="success">Thành công</Button>{' '}
      <Button variant="warning">Cảnh báo</Button>{' '}
      <Button variant="danger">Báo lỗi</Button>{' '}
      <Button variant="info">Thông tin</Button>{' '}
      <Button variant="link">Đường dẫn</Button>
    </>
  );
}

export default B1;