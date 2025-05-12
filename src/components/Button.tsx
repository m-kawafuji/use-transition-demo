import clsx from "clsx";

export default function Button({
  className,
  ...props
}: React.JSX.IntrinsicElements["button"]) {
  return (
    <button
      className={clsx(
        "cursor-pointer bg-black px-4 py-2 font-bold text-white hover:opacity-70",
        className,
      )}
      {...props}
    />
  );
}
