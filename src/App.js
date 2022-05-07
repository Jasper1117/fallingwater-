import Faucet from "../src/faucet/Faucet"
import { ParallaxProvider } from 'react-scroll-parallax';
import Bowl from "./Bowl/Bowl";
import Middle from "./Middle/Middle";


function App() {
  return (
    <ParallaxProvider>
      <Faucet></Faucet>
      <Middle></Middle>
      <Bowl/>

    </ParallaxProvider>
  );
}

export default App;
