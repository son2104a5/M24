import Dropdown from 'react-bootstrap/Dropdown';

function B4() {
  return (
    <>
    <h2>B4:</h2>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Nguyễn Đắc Sơn
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <br />
    </>
  );
}

export default B4;