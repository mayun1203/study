import { SunButton } from "@/components/about";
import { Header } from "@/components/common"

export default function About(){
  const title="＼＼How are you fooling now?／／"

  return(
    <div style={{textAlign:"center"}}>
      <Header />
      <h1>{title}</h1>
      <SunButton />
    </div>
  );
}

