import Alert from 'react-bootstrap/Alert';

function B5() {
  return (
    <>
    <h2>B5:</h2>
        <Alert key={'success'} variant={'success'}>
            <div className='flex justify-between'>
                <p>Thêm tài khoản thành công.</p>
                <p>X</p>
            </div>
        </Alert>
        <Alert key={'danger'} variant={'danger'}>
            <div className='flex justify-between'>
                <p>Thêm mới tài khoản thất bại.</p>
                <p>X</p>
            </div>
        </Alert>
        <Alert key={'warning'} variant={'warning'}>
            <div className='flex justify-between'>
                <p>Tên không được để trống.</p>
                <p>X</p>
            </div>

        </Alert>
    </>
  );
}

export default B5;