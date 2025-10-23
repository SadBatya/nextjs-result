import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-bold mb-12">Next JS Result</h1>
        <nav>
          <ul className="flex items-center gap-4 justify-center">
            <li className="text-xl font-semibold">
              <Link href="/csr">CSR</Link>
            </li>
            <li className="text-xl font-semibold">
              <Link href="/isr">ISR</Link>
            </li>
            <li className="text-xl font-semibold">
              <Link href="/ssr">SSR</Link>
            </li>
            <li className="text-xl font-semibold">
              <Link href="/ssg">SSG</Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
