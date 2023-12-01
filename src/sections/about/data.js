import { LiaAwardSolid } from 'react-icons/lia';
import { CiServer } from 'react-icons/ci';
//import { PiMonitorThin } from 'react-icons/pi';
import { BsRocketFill } from 'react-icons/bs';

const data = [
  { id: 1, icon: <LiaAwardSolid />, title: 'Reputation', desc: 'We are trusted to be a genesis validator' },
  { id: 4, icon: <BsRocketFill />, title: 'Early Supporter', desc: 'prioritizes security and supports early projects on testnet or mainnet.' },
  { id: 2, icon: <CiServer />, title: 'Decentralized secure infrastructure', desc: 'Our servers spread across the globe with the best security possible' },
 // { id: 3, icon: <PiMonitorThin />, title: '24 / 7 Monitoring', desc: '99% uptime across all networks secured by our validator leading to optimal performance' },

];

export default data;
