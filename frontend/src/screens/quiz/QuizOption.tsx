import { ResponseOption } from "../../types/responseTypes";

type QuizOptionProps = {
  option: ResponseOption;
  isSelected: boolean;
  onClick: () => void;
};

export default function QuizOption({
  option,
  isSelected,
  onClick,
}: QuizOptionProps) {
  return (
    <div
      className={`border rounded p-4 cursor-pointer ${
        isSelected ? "border-blue-500" : "border-gray-300"
      }`}
      onClick={onClick}
    >
      <h5>{option.text}</h5>
    </div>
  );
}
