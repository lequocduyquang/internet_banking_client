import React from 'react';
import { TableRow, TableCell, TableHead } from '@material-ui/core';

const EnhancedTableHead = () => {
  const headCells = [
    { id: 1, name: 'Số thứ tự' },
    { id: 2, name: 'Username' },
    { id: 3, name: 'Email' },
    { id: 4, name: '' },
  ];
  return (
    <TableHead>
      <TableRow>
        {headCells.map(({ id, name }) => (
          <TableCell key={id}>{name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
