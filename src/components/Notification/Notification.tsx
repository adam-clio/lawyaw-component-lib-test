import React, { useState } from 'react';
import { Alert, AlertProps, Collapse } from '@mui/material';

export const Notification = (props: AlertProps) => <Alert {...props} />;

export const CollapsibleNotification = ({
  defaultOpen,
  open,
  ...props
}: AlertProps & { defaultOpen?: boolean; open?: boolean }) => {
  const [localOpen, setOpen] = useState(defaultOpen);

  return (
    <Collapse in={localOpen || open}>
      <Notification onClose={() => setOpen(false)} {...props} />
    </Collapse>
  );
};
