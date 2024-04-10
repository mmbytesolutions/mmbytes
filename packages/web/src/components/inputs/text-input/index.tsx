import { ComponentProps } from 'react';
import { inputFieldCommonClassesGenerator } from '../common/styles';

export type InputProps = ComponentProps<'input'>;

function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={inputFieldCommonClassesGenerator({ className })}
    />
  );
}

export interface TextInputProps extends InputProps {
  icon?: React.ReactNode;
}

export function TextInput({ icon, ...props }: TextInputProps) {
  return (
    <div className="relative w-full">
      <Input {...props} />
      {icon && (
        <span className="absolute right-5 top-1/2 w-[14px] -translate-y-1/2 text-primary">
          {icon}
        </span>
      )}
    </div>
  );
}
