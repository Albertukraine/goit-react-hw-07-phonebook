import style from './Filter.module.css';
import { setFilterValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);

  const handleInput = evt => {
    const input = evt.target;
    // console.log(input.value);
    dispatch(setFilterValue(input.value));
  };

  return (
    <div className={style.filterWrapper}>
      <label>Find contacts by name</label>
      <input
        className={style.input}
        onInput={handleInput}
        value={value}
        type="text"
        name="filter"
        placeholder="Type name to find"
      />
    </div>
  );
};
