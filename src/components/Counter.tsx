"use client";

import { useState, useTransition } from "react";
import { sleep } from "@/lib/sleep";
import Button from "./Button";

export default function Counter() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(count * 2);

  function handleCountDownClick() {
    const newCount = count - 1;

    setCount(newCount);

    startTransition(async () => {
      await sleep(500);

      startTransition(() => {
        setDouble(newCount * 2);
      });
    });
  }

  function handleCountUpClick() {
    const newCount = count + 1;

    setCount(newCount);

    startTransition(async () => {
      await sleep(500);

      startTransition(() => {
        setDouble(newCount * 2);
      });
    });
  }

  return (
    <div>
      <div className="text-3xl font-bold">Count: {count}</div>
      <div className="mt-4 text-3xl font-bold">
        Double: {isPending ? "pending..." : double}
      </div>
      <div className="mt-8 flex gap-4">
        <Button
          className="min-w-36"
          type="button"
          onClick={handleCountDownClick}
        >
          Count Down
        </Button>
        <Button className="min-w-36" type="button" onClick={handleCountUpClick}>
          Count Up
        </Button>
      </div>
    </div>
  );
}
