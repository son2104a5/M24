
import B1 from "./components/B1";
import B2 from "./components/B2";
import B3 from "./components/B3";
import B4 from "./components/B4";
import B5 from "./components/B5";
import B6 from "./components/B6";
import B7 from "./components/B7";
import B8 from "./components/B8";
import B9 from "./components/B9";
import B10 from "./components/B10";

export default function App() {
  return (
    <div>
      <B1 userName={""}></B1>
      <B2></B2>
      <B3 company={""}></B3>
      <B4 slogan={""}></B4>
      <B5 data={""}></B5>
      <B6 message={""}></B6>
      <B7></B7>
      <B8 title={""}></B8>
      <B9 time={new Date()}></B9>
      <B10 count={0}></B10>
    </div>
  )
}
