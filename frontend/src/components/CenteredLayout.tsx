import { ReactNode } from "react";

type CenteredLayoutProps = {
  children: ReactNode;
};

export default function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <div className="flex justify-center items-center h-[90vh]">{children}</div>
  );
}
