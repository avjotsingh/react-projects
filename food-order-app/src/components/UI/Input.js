import classes from "./Input.module.css";
import {forwardRef} from 'react';

const Input = forwardRef((props, ref) => {
  const { label: _, ...input } = props;

  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} className={classes.input} {...input} />
    </div>
  );
});

export default Input;
