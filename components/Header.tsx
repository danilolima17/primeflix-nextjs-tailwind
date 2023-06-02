import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 px-5 bg-teal-400">
      <Link href="/" className="text-xl text-white font-bold">
        PrimeFlix
      </Link>
    </header>
  );
};

export default Header;
