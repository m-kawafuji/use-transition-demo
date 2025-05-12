import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4">
        <h1 className="py-4 text-2xl font-bold">useTransition Demo</h1>
        <Counter />
      </section>
    </main>
  );
}
