export default function PageNotFound() {
  return (
    <section className="relative flex flex-col min-h-screen w-full justify-center items-center px-4 overflow-hidden">
      <div className="font-['lora'] mt-4 text-center flex flex-col justify-center">
        <h1 className="text-4xl text-black font-bold mb-4">404 - Page not found</h1>
        <p > The page you are trying to access does not exist</p>
        <img src="../../../../public/web.png" alt="" />
      </div>
    </section>
  );
}
