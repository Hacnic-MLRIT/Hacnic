import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Event 1',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Event 2',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Event 3',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Event 4',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Event 5',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
    img: CoinTrackerImg,
  },
];

export default projects;
