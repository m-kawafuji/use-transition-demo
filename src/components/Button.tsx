import clsx from "clsx";

export default function Button({
  className,
  ...props
}: React.JSX.IntrinsicElements["button"]) {
  return (
    <button
      className={clsx(
        "px-4 py-2 bg-black text-white font-bold cursor-pointer hover:opacity-70",
        className,
      )}
      {...props}
    />
  );
}
