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

function MobileNumberInput(props: Props) {
  const {
    id,
    name = "mobile",
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
    <div className={`flex flex-col ${className} ${error && "mb-6"}`}>
      <div className="flex flex-row gap-[5px] mb-2">
        <label className="text-[16px] text-text_bold font-bold">{label}</label>
        {isRequired && (
          <span className="text-[16px] font-bold text-red-500">*</span>
        )}
      </div>
      <div className="relative h-[56px] w-full border-black">
        <input
          id={id}
          className={`w-full h-[44px] bg-white rounded-[5px] drop-shadow-lg text-text_primary px-4 focus:outline-none mb-2`}
          type="tel"
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder ? placeholder : "Enter your mobile number"}
          onChange={onChange}
          {...register?.(name, {
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Invalid mobile number",
            },
          })}
        />
        {error && <div className="text-[14px] text-red-500">{error.message}</div>}
      </div>
    </div>
  );
}

export default MobileNumberInput;
