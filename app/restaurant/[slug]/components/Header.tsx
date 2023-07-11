type Props = {
  name: string;
};

export default function Header({ name }: Props) {
  const renderTitle = (title: string) => {
    const titleArray = title.split("-");

    titleArray[titleArray.length - 1] = `(${
      titleArray[titleArray.length - 1]
    })`;

    return titleArray.join(" ");
  };

  return (
    <header className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white capitalize text-center">
          {renderTitle(name)}
        </h1>
      </div>
    </header>
  );
}
