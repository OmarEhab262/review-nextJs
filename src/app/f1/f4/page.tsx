import Link from "next/link";

const F3 = () => {
  return (
    <div>
      <h1>F3 Page</h1>

      <Link
        href="/f1/f3"
        className="underline text-black font-bold mt-3 bg-white px-3 rounded-md mx-3"
      >
        F3
      </Link>
    </div>
  );
};

export default F3;
