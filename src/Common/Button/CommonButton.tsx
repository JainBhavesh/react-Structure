import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';

interface CommonButtonProps extends ButtonProps {
  label: string;
  customClass?: string;
}

export const CommonButton: React.FC<CommonButtonProps> = ({ label,customClass, ...props }) => {
  return (
    <Button className="CommonButton"
    fullWidth color='primary'
    variant='contained'>
      {label}
    </Button>
  );
};

