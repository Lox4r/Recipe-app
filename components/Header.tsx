import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-800 p-4 text-white">
      <nav className="mx-auto flex max-w-5xl justify-between">
        <Link href="/">Recipe App</Link>
        <Link href="/recipes">Recipes</Link>
      </nav>
    </header>
  );
}