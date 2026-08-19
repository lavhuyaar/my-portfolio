import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <main className="text-white w-full min-h-screen flex flex-col items-center justify-center p-3 gap-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl sm:text-9xl font-black">404</h1>
        <h2 className="text-2xl sm:text-4xl">Page Not Found :/</h2>
      </div>
      <div className="flex flex-col items-center p-3 rounded-md border border-[#363b3c] gap-3">
        <p className="text-center">View Portfolio via :</p>
        <div className="flex gap-3 items-center justify-center">
          <Link
            title="Simple View"
            to="/simple"
            className="rounded-md border border-[#363b3c] px-5 py-2.5 text-sm text-gray-300 transition hover:border-gray-500"
          >
            Simple View
          </Link>
          <Link
            title="Terminal View"
            to="/"
            className="rounded-md bg-[#e8e8e3] px-5 py-2.5 text-sm font-medium text-[#0d0f10] transition hover:opacity-90"
          >
            Terminal View
          </Link>
        </div>
      </div>
    </main>
  );
};
export default PageNotFound;
