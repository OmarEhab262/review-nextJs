const page = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  {
    if (params.slug?.length === 2) {
      return (
        <h1>
          {" "}
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}{" "}
        </h1>
      );
    }
  }
  return (
    <>
      <h1>Dock home </h1>
      <h1 className="text-red-700">dafd</h1>
    </>
  );
};

export default page;
