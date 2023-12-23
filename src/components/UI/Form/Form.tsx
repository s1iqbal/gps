import {  useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { fetchPointA, fetchPointB } from '../../../actions/formActions';

import './Form.css'
function Form() {
  const dispatch = useDispatch();
  const pointA = useSelector((state: RootState) => state.form.pointA);
  const pointB = useSelector((state: RootState) => state.form.pointB);

  const [inputPointA, setInputPointA] = useState('');
  const [inputPointB, setInputPointB] = useState('');

  const handleSubmit = () => {
    dispatch(fetchPointA(inputPointA));
    dispatch(fetchPointB(inputPointB));
    console.log(pointA, pointB);
  };

  return <div className='form'>
    <h1>Route Planner</h1>
    <button
        onClick={() => {
          console.log(`PointA: ${pointA.display_name} PointB: ${pointB.display_name}`);
        }}
      >
        Log Address
      </button>
      <br />
      <input
        placeholder="Enter address here..."
        type="input"
        value={inputPointA}
        onChange={(e) => setInputPointA(e.target.value)}
      />
      <input
        placeholder={'Enter address here...'}
        type="input"
        value={inputPointB}
        onChange={(e) => {setInputPointB(e.target.value)}}
      />
      <button
        style={{ backgroundColor: 'Blue' }}
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit Route
      </button>
      <br />
    </div>;
}

export default Form;
