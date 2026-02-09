import React from 'react';

import { TextField, type TextFieldProps } from './TextField';

/** Alias component for text inputs, kept for clearer naming in screens. */
export type InputFieldProps = TextFieldProps;

/** InputField – single-line text input using design tokens and `text-field.css`. */
export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => (
  <TextField ref={ref} {...props} />
));

InputField.displayName = 'InputField';

