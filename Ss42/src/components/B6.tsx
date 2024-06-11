import Spinner from 'react-bootstrap/Spinner';

function B6() {
  return (
    <>
    <h2>B6:</h2>
    <div className='flex flex-col gap-2'>
        <br />
        <Spinner animation="border" role="status" className='text-blue-500'>
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        <Spinner animation="border" role="status" className='text-gray-400'>
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        <Spinner animation="border" role="status" className='text-green-600'>
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        <br />
    </div>
    </>
  );
}

export default B6;