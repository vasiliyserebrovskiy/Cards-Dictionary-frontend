import type { ChangeEvent } from "react";

interface Props {
  name: string;
  type: "number" | "text" | "email" | "password" | "tel";
  placeholder: string;
  title: string;
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errorMsg?: string;
}
export default function FormInput({
  name,
  type,
  placeholder,
  title,
  id,
  onChange,
  value,
  errorMsg,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[#6F6F6F] text-[16px]">
        {title}
      </label>
      <input
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        className="p-3 text-[#1E1E1E] text-[16px] border border-[#3F3F3F] rounded-[4px]"
        onChange={onChange}
      />
      {/* {errorMsg ? <p>{errorMsg}</p>: null} */}
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </div>
  );
}
