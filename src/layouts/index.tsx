import Header from "./Header";

type Props = {
  children: any;
};

export default function Layouts({ children }: Props) {
  return (
    <div>
      <Header />

      <div className="">
        {children}
      </div>
    </div>
  );
}
