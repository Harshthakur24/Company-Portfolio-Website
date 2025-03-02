import Banner from '../components/Banner/Banner';
import Buyers from '../components/Buyers/index';
import Provide from '../components/Provide/index';
import Why from '../components/Why/index';
import Network from '../components/Contact/index';
import Clientsay from '../components/Clientsay/index';
import Contact from '../components/Contact/Contact';


export default function Home() {
  return (
    <main>
      <Banner />
      <Buyers />
      <Provide />
      <Why />
      <Clientsay />
      <Contact />
    </main>
  )
}
