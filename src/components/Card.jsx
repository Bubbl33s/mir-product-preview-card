import CardPayment from "./CardPayment";

export default function Card() {
  return (
    <>
      <div className="text-[15px] rounded-lg mx-auto max-w-96 md:max-w-md bg-white text-gray-500 font-medium md:text-base">
        <header className="rounded-t-lg overflow-hidden">
          <img
            src="/image-product-mobile.jpg"
            alt="Listening to music ilustration"
            className="w-full"
          />
        </header>
        <div className="px-[25px] py-7 md:px-8">
          <section>
            <p className="text-sm tracking-wider mb-2">P E R F U M E</p>
            <h1 className="font-['Fraunces'] font-extrabold text-gray-800 text-3xl md:text-4xl mb-3">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="mb-5">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </section>
          <CardPayment />
        </div>
      </div>
    </>
  );
}
