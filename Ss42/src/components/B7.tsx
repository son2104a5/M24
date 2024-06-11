import Toast from 'react-bootstrap/Toast';

function B7() {
  return (
    <>
        <h2>B7:</h2>
        <Toast>
        <Toast.Header>
            <strong className="me-auto">Cảnh báo</strong>
        </Toast.Header>
        <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
        </Toast>
    </>
  );
}

export default B7;