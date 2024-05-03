type BlueRoundedButtonProps = {
  text: string;
};

export default function BlueRoundedButton({ text }: BlueRoundedButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full">
      {text}
    </button>
  );
}
