export type ICTextInputProps = {
  error?: boolean;
  label?: string;
  type?: 'email' | 'password' | 'text';
  value?: string;
  onChangeText?: (((text: string) => void) & (() => unknown)) | undefined;
};

export type ICTextInputsState = {
  hidden?: boolean;
};
