import { useDispatch, useSelector } from 'react-redux';
import { changeColorBg } from '../../store/reducers/changeColor';

export default function B3() {
    const change = useSelector((state: any) => state.changeColor.color);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeColorBg());  
    };

    return (
        <div>
            <div style={{
                background: change ? "white" : "black",
                color: change ? "black" : "white",
                padding: '100px',
                borderRadius: '5px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <button onClick={handleClick} style={{
                    padding: '10px',
                    color: change ? "black" : "white",
                    backgroundColor: change ? "white" : "black",
                    border: '1px solid',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>{change ? "Light" : "Dark"}</button>
            </div>
        </div>
    );
}
