// generates random id
import { v4 as uuidv4 } from 'uuid';

const dataDevelop = [
  {
    id: uuidv4(),
    title: 'Our Building',
    subTitle: 'Building',
  },
  {
    id: uuidv4(),
    title: 'Our Showroom',
    subTitle: 'Showrooom',
  },
  {
    id: uuidv4(),
    title: 'Contact Us Today!',
    subTitle: 'Sign',
  },
];

export default dataDevelop;
