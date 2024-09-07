import CardPayment from "./CardPayment";

export default function Card() {
  return (
    <>
      <div className="rounded-3xl mx-auto w-11/12 max-w-80 md:max-w-md bg-white text-center text-gray-500 font-medium text-sm md:text-base">
        <header className="rounded-t-3xl overflow-hidden">
          <img
            src="/illustration-hero.svg"
            alt="Listening to music ilustration"
            className="w-full"
          />
        </header>
        <div className="px-5 py-7 md:px-8">
          <section>
            <h1 className="font-black text-blue-950 text-xl md:text-2xl mb-3">
              Order Summary
            </h1>
            <p className="w-10/12 mx-auto mb-5 md:w-full">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </section>
          <CardPayment />
        </div>
      </div>
    </>
  );
}
