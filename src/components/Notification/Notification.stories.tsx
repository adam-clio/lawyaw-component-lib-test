import React, { useState } from 'react';
import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CollapsibleNotification, Notification } from './Notification';
import { Collapse, Link } from '@mui/material';

export default {
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Notification {...args} onClose={() => setOpen(false)} />
    </Collapse>
  );
};

export const Error = Template.bind({});
Error.args = {
  severity: 'error',
  children: (
    <>
      You&apos;re subscription was canceled on October 17, 2022.{' '}
      <Link color={'inherit'} href={'#'}>
        Renew Subscription
      </Link>
    </>
  ),
};

export const Collapsible: ComponentStory<typeof CollapsibleNotification> = (
  args,
) => {
  const setArgs = useArgs()[1];
  return (
    <CollapsibleNotification
      {...args}
      onClose={() => setArgs({ open: false })}
    />
  );
};
