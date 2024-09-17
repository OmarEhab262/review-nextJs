import Link from "next/link";

const F4 = () => {
  return (
    <>
      <div>F4 Page </div>

      <Link
        href="/f1/f4"
        className="underline text-black font-bold mt-3 bg-white px-3 rounded-md mx-3"
      >
        F4
      </Link>
    </>
  );
};

export default F4;
