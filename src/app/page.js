export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        PVS YouthForce
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Empowering Young Volunteers Through Tech 🚀
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
          Get Started
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition">
          Learn More
        </button>
      </div>
    </main>
  );
}
