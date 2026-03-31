import DisplayData from '@/components/DisplayData';

export default async function Home() {
  return (
    <main className="bg-linear-90 from-purple-600 to-indigo-600 min-h-screen flex flex-col gap-10 items-center justify-center">
      <h1 className="text-3xl md:text-5xl text-slate-100 font-semibold text-center max-w-4xl mx-auto leading-tight ">
        Hello World! We are now practicing Tailwind CSS, Frontend and Backend in
        Same folder, also Dockerize with Github Actions
      </h1>

      <DisplayData />
    </main>
  );
}
