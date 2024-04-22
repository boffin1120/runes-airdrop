import Header from "./Header";

type Props = {
  children: any;
};

export default function Layouts({ children }: Props) {
  return (
    <div>
      <Header />

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-[40px]">
        {children}
      </div>
    </div>
  );
}
