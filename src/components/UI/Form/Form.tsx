import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { fetchPointA, fetchPointB } from '../../../actions/formActions';
import { Place } from '../../interfaces/Place';

function Form() {
  const dispatch = useDispatch();
  const pointA = useSelector((state: RootState) => state.form.pointA);
  const pointB = useSelector((state: RootState) => state.form.pointB);

  const [inputPointA, setInputPointA] = useState('');
  const [inputPointB, setInputPointB] = useState('');

  useEffect(() => {
    dispatch(fetchPointA());
    dispatch(fetchPointB());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(fetchPointA(inputPointA));
    dispatch(fetchPointB(inputPointB));
  };

  return (
    <div>
      <label>Point A: </label>
      <input
        placeholder="Enter address here..."
        type="input"
        value={inputPointA}
        onChange={(e) => setInputPointA(e.target.value)}
      />
      <br />
      <label>Point B: </label>
      <input
        placeholder="Enter address here..."
        type="input"
        value={inputPointB}
        onChange={(e) => setInputPointB(e.target.value)}
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
      <button
        onClick={() => {
          console.log(`PointA: ${pointA.display_name} PointB: ${pointB.display_name}`);
        }}
      >
        Log Address
      </button>
    </div>
  );
}

export default Form;
