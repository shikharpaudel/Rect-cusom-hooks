
import Card from './Card';
import useCounter from './custom-Hooks/Use-counter';
const ForwardCounter = () => {
 const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
