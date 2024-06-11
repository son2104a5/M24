import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function B3() {
  return (
    <div>
        <h2>B3:</h2>
        <div style={{
            display: 'flex',
            gap: '10px',
            textAlign: 'center'
        }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3qSsrukxHLWv4_7rCuX93grNXpeGAEL2Qj8ErWbpZg&s" />
                <Card.Body>
                    <Card.Title>Macbook Air 2018</Card.Title>
                    <Card.Text>
                    The reason Iam selling the machine is because it is too much power for what I need
                    </Card.Text>
                    <div style={{
                        display: 'flex',
                        justifyContent:'space-evenly',
                        alignItems: 'center'
                    }}>
                        <Button variant="primary">Xem chi tiết</Button>
                        <Card.Text>
                        30.000.000 đ
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://2tmobile.com/wp-content/uploads/2022/03/macbook-pro-2019-16-inch-silver.jpg" />
                <Card.Body>
                    <Card.Title>Macbook Air 2018</Card.Title>
                    <Card.Text>
                    The reason Iam selling the machine is because it is too much power for what I need
                    </Card.Text>
                    <div style={{
                        display: 'flex',
                        justifyContent:'space-evenly',
                        alignItems: 'center'
                    }}>
                        <Button variant="primary">Xem chi tiết</Button>
                        <Card.Text>
                        30.000.000 đ
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <br />
    </div>
  )
}
