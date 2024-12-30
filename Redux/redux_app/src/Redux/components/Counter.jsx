import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementAsync,addAsyncPromise } from "../counter/_3_counterSlice.js";
import styles from './counter.module.css'

function Counter() {
  const count = useSelector(state => state.counter.value);  // Correct path to access the value
  const status = useSelector(state => state.counter.status);  // Correct path to access the value

  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <p className={styles.value}>{count}</p>
        <button className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>

      <div className={styles.row}>
        <input 
          type="text" 
          className={styles.textbox} 
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button 
          className={styles.button} 
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Add Amount
        </button>
        <button 
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementAmount))} // call goes to redux store 
        >Add Async</button>
        <button 
          className={styles.asyncButton}
          onClick={() => dispatch(addAsyncPromise(incrementAmount))} // call goes to redux store 
        >Add Async Promise {status}</button>
      </div>
    </div>
  )
}

export default Counter;