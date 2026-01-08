
import Home from "./Component/Home/Home";
import Build from "./Component/Home/Build";
import Mobile from "./Component/Home/Mobile";
import WeDo from "./Component/Home/Wedo";
import Results from "./Component/Home/Result";
import Client from "./Component/Home/Client";

 export default function page() {
  return (
    <div>
      <Home />
      <Build />
      <Mobile />
      <WeDo />
      <Results />
     <Client />
     <ul>
      <li> About </li>
     </ul>
      
    </div>

  
  );
}

