interface Props {
  title: string;
  type: "button" | "submit";
  onClick?: () => void;
}
export default function FormButton({ title, type, onClick }: Props) {
  return (
    <button
      type={type}
      className="w-full p-5 bg-[#1F27F5] text-xl font-semibold text-center text-white rounded-[4px] hover:cursor-pointer"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
