import Link from "next/link";

const F2 = () => {
  return (
    <>
      <div>F2 Page </div>

      <Link
        href="/f1/"
        className="underline text-black font-bold mt-3 bg-white px-3 rounded-md"
      >
        F1
      </Link>
    </>
  );
};

export default F2;
