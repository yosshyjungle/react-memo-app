import { useCounter } from "../hooks/useCounter";

const CounterComponent = () => {
    const { count, increment, reset } = useCounter();
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CounterComponent