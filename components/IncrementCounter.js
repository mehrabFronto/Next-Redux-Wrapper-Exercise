import { incrementCounter } from "@/redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";

const IncrementCounter = () => {
   const dispatch = useDispatch();
   const counter = useSelector((state) => state.counter.count);
   return (
      <div>
         <h1>
            Counter: <span>{counter}</span>
         </h1>
         <button onClick={() => dispatch(incrementCounter())}>
            Add To Count
         </button>
      </div>
   );
};

export default IncrementCounter;
