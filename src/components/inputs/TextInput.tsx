import { UseFormRegister, type FieldError } from "react-hook-form";

type Props = {
  className?: string;
  isRequired?: boolean;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  error?: FieldError | undefined;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  register?: UseFormRegister<any>;
};

const TextInput = (props: Props) => {
  const {
    id,
    name = "name",
    register,
    className,
    isRequired = false,
    label,
    defaultValue,
    placeholder,
    value,
    error,
    onChange,
  } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row gap-[5px] mb-2">
        <label htmlFor={id} className="text-[16px] font-bold text-text_bold">
          {label}
        </label>
        {isRequired && (
          <span className="text-[16px] font-bold text-red-500">*</span>
        )}
      </div>
      <input
        id={id}
        type="text"
        className="w-full h-[44px] bg-white rounded-[5px] drop-shadow-lg px-4 focus:outline-none mb-2"
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...register?.(name)}
      />
      {error && <div className="text-[14px] text-red-500">{error.message}</div>}
    </div>
  );
}

export default TextInput;