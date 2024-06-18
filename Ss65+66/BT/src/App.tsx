import Profile from "./components/Profile/Profiles";
import ChangeState from "./components/changeState/ChangeState";
import Count from "./components/count/Count";
import RandomNumber from "./components/createRandomNumber/RandomNumber";
import ListProduct from "./components/listProduct/ListProduct";
import ListUser from "./components/listUser/ListUser";

export default function App() {
  return (
    <div>
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
    </div>
  )
}
