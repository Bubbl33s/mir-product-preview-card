export default function CardPayment() {
  return (
    <>
      <div className="">
        <div className="flex items-center gap-4 md:gap-3">
          <h2 className="font-['Fraunces'] text-3xl font-black text-emerald-700 ">
            $149.99
          </h2>
          <p className="line-through">$169.99</p>
        </div>
      </div>
      <div className="font-black mt-4">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          className="bg-emerald-700 rounded-lg text-white py-4 flex items-center justify-center gap-2 hover:bg-emerald-900"
        >
          <img src="/icon-cart.svg" alt="Cart icon" />
          Add to Cart
        </a>
      </div>
    </>
  );
}
