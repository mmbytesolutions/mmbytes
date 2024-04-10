import { ComponentProps } from 'react';
import { inputFieldCommonClassesGenerator } from '../common/styles';
import { cn } from '@/src/utils/shadcn';

export type TextareaProps = ComponentProps<'textarea'>;

function Input({ className, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={cn(
        inputFieldCommonClassesGenerator({}),
        'resize-none md:min-h-[130px]',
        className
      )}
    />
  );
}

export interface TextareaInputProps extends TextareaProps {
  icon?: React.ReactNode;
}

export function TextAreaInput({ icon, ...props }: TextareaInputProps) {
  return (
    <div className="relative w-full">
      <Input {...props} />
      {icon && (
        <span className="absolute right-5 top-[18px] w-[14px] text-primary">
          {icon}
        </span>
      )}
    </div>
  );
}
