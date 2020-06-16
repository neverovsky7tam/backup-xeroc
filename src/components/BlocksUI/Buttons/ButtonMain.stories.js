import React from 'react';
import { ButtonMain } from './ButtonMain';

export default {
  title: 'Buttons',
  component: ButtonMain,
};

export const Button = () => <ButtonMain text={'ButtonMain'} func={() => 'test'}>Hello Button</ButtonMain>;

Button.story = {
  name: 'ButtonMain',
};
