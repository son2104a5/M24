import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function B9() {
  return (
    <div>
        <h2>B9:</h2>
        <form action="#" className="flex flex-col justify-center items-center ">
            <p><strong className="text-3xl">Đăng ký tài khoản:</strong></p>
            <div className='flex gap-10'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Nhập email" className='w-64'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Nhập mật khẩu" className='w-64'/>
            </Form.Group>
            </div>
            <div>
            <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control placeholder="Ví dụ: Nguyễn Văn A" className='w-[554px]'/>
            </Form.Group>
            </div>
            <div>
            <Form.Group className="mb-3">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control placeholder="Ví dụ: Thanh Xuân, Hà Nội" className='w-[554px]'/>
            </Form.Group>
            </div>
            <div className='flex gap-10'>
                <div>
                    <Form.Label>Thành phố</Form.Label>
                    <Form.Select aria-label="Default select example" className='w-[135px]'>
                        <option>Hà Nội</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
                <div>
                    <Form.Label>Quận</Form.Label>
                    <Form.Select aria-label="Default select example" className='w-[135px]'>
                        <option>Thanh Xuân</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
                <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mã bưu điện</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                </div>
            </div>
            <div>
            <Button variant="primary" type="submit" className='w-[340px]'>
                Submit
            </Button>
            </div>
        </form>
        <br />
    </div>
  )
}
