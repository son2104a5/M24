import { useDispatch, useSelector } from "react-redux";
import Profile from "./components/Profile/Profiles";
import ChangeColor from "./components/changeColor/ChangeColor";
import ChangeState from "./components/changeState/ChangeState";
import Count from "./components/count/Count";
import RandomNumber from "./components/createRandomNumber/RandomNumber";
import ListProduct from "./components/listProduct/ListProduct";
import ListUser from "./components/listUser/ListUser";
import { RootType } from "./store/rootReducer";

export default function App() {
  const color = useSelector((state: RootType) => state.changeColor)
    const dispatch = useDispatch()
    const handleChangeAllBg = () => {
        dispatch({ type: 'CHANGE_COLOR' })
    }
  return (
    <div style={{
      backgroundColor: `${color ? 'black' : 'white'}`,
      color: `${color? 'white' : 'black'}`,
    }}>
      <h1>Bài 1:</h1>
      <Profile></Profile>
      <h1>Bài 2:</h1>
      <ListUser></ListUser>
      <h1>Bài 3:</h1>
      <ListProduct></ListProduct>
      <h1>Bài 4:</h1>
      <Count></Count>
      <h1>Bài 5:</h1>
      <RandomNumber></RandomNumber>
      <h1>Bài 6:</h1>
      <ChangeState></ChangeState>
      <h1>Bài 7:</h1>
      <ChangeColor></ChangeColor>
      <h1>Bài 8:</h1>
      <input type="checkbox" onChange={handleChangeAllBg}/>
    </div>
  )
}
