import clsx from "clsx";

export function Card({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "max-w-xl h-min p-12 rounded-2xl ring-1 ring-gray-300 bg-white"
      )}
    >
      {children}
    </div>
  );
}
