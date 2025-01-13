import RadioButton from "./RadioButton";
import { FieldError } from "react-hook-form";

type RadioGroupProps = {
  options: { label: string; value: string }[];
  name: string;
  selectedValue?: string;
  onChange: (value: string) => void;
  title?: string;
  isRequired?: boolean;
  error?: FieldError | undefined;
  isVertical?: boolean;
};

function RadioGroup({
  options,
  title = "Select an option:",
  name,
  selectedValue,
  onChange,
  isRequired = false,
  error,
  isVertical = false,
}: RadioGroupProps) {
  return (
    <div className={`radio-group flex ${isVertical ? "flex-row gap-2 md:gap-6" : "flex-col"} gap-2 mt-4`}>
      <div className={`flex flex-row gap-[5px] ${!isVertical && "mb-2"}`}>
        <span className="text-[16px] text-text_bold font-bold">{title}</span>
        {isRequired && (
          <span className="text-[16px] font-bold text-tertiary">*</span>
        )}
      </div>

      {/* Radio Buttons */}
      <div
        className={`flex ${
          !isVertical ? "flex-col gap-2" : "flex-col md:flex-row gap-4"
        }`}
      >
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            name={name}
            selectedValue={selectedValue || ""}
            onChange={onChange}
          />
        ))}
      </div>

      {/* Error Message */}
      {error && <div className="text-[14px] text-tertiary">{error.message}</div>}
    </div>
  );
}

export default RadioGroup;
