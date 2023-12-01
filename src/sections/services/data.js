import { GiWavyChains } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi';
import { VscListTree } from 'react-icons/vsc';
import { SiRelay } from 'react-icons/si';

const data = [
  {
    id: 1,
    icon: <GiWavyChains />,
    title: 'Cosmos Interchain Utility',
    desc: 'Huge variety of utility tools and data analytics for the Cosmos Ecosystem',
  },
  {
    id: 2,
    icon: <FiMonitor />,
    title: 'Monitoring Tool',
    desc: 'A powerfull and easy-to-use monitoring tool for server hardware and validator nodes with alert',
  },
  {
    id: 3,
    icon: <VscListTree />,
    title: 'Public Endpoint',
    desc: 'tjair offers public tools for easy access, including RPC, gRPC, and API services.',
  },
  {
    id: 4,
    icon: <SiRelay />,
    title: 'IBC Relayers',
    desc: 'Interchain communication support',
  },
];

export default data;
