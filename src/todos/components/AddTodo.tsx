import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todos';
import { Button, Input } from 'antd';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <Input
        value={value}
        style={{ width: '400px' }}
        onChange={e => setValue(e.target.value)}
      />
      <Button
        type="primary"
        onClick={() => {
          if (value.trim()) {
            dispatch(addTodo(value));
            setValue('');
          }
        }}
      >
        Add Todo
      </Button>
    </div>
  );
};

export default AddTodo;
