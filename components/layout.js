import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-fuchsia-100 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/">🏡</Link>
          <span className="mx-auto">Welcome to Option5 blog</span>{" "}
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-fuchsia-100 mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022 Option5
        </div>
      </footer>
    </div>
  );
}
