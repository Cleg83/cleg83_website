function TestImage() {
  return (
    <img src="/Bone-Daddy-Hoods.png" alt="test-image" className="size-48" />
  );
}

export default function Home() {
  return (
    <div className="w-full p-4">
      <h1 className="text-3xl font-bold text-blue-600">Home Page</h1>
      <p className="mt-2 text-black">Welcome to the homepage!</p>
      <TestImage />
    </div>
  );
}
