
import Card from './Card';
import useCounter from './custom-Hooks/Use-counter';
const BackwardCounter = () => {
 const counter = useCounter(false)
 
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
