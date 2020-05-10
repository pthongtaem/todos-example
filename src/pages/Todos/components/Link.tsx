import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducers';
import { VisibilityFilters } from '../../../reducers/types/visibilityFilter';
import { setVisibilityFilter } from '../../../reducers/visibilityFilter';
import { Button } from 'antd';

const Link: React.FC<{ filter: VisibilityFilters }> = ({
  filter,
  children,
}) => {
  const active = useSelector(
    (state: RootState) => state.visibilityFilter === filter,
  );
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(setVisibilityFilter(filter))}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </Button>
  );
};

export default Link;
