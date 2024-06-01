import Card from "../components/Card";

export default async function AboutPage() {
  let variable= process.env.NEXT_PUBLIC_local
  const getProd = async () => {
    const res = await fetch(`${variable}/api`, {
      next: { revalidate: 10 },
    });
    const data = await res.json();
    return data;
  };

  const data = await getProd();
  return (
    <div className="min-h-screen">
      {data ? (
        <div className="grid grid-cols-3 gap-2 pt-8">
          {data?.message}
          {data?.products?.map((item, ind) => (
            <Card key={ind} product={item} />
          ))}
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}
