import clsx from "clsx";
import { Subheading } from "./ui/heading";

export function Card({
  children,
  className,
  heading,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  heading: string;
} & React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "max-w-xl h-min p-12 rounded-2xl ring-1 ring-gray-300 bg-white"
      )}
    >
      <Subheading className="mb-4">{heading}</Subheading>
      {children}
    </div>
  );
}
