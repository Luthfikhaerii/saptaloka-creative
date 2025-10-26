export default function contact(){
    return (
    <>
     <main
      className="w-full min-h-screen text-white bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/cards/card2.png')" }}
    >
      {/* Overlay */}
      <div className="bg-black/50 w-full min-h-screen">
        
        {/* Section 1: Form & Contact Info */}
        <section className="w-full flex flex-col lg:flex-row justify-between gap-12 px-10 lg:px-24 py-28">
          
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl font-semibold leading-tight">
              Do you want to start a campaign, <br />
              or <span className="text-teal-400 font-bold">just say Hi?</span>
            </h1>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input className="bg-transparent border-b border-gray-400 focus:border-white outline-none py-2" placeholder="First Name" />
                <input className="bg-transparent border-b border-gray-400 focus:border-white outline-none py-2" placeholder="Last Name" />
              </div>
              <input className="bg-transparent border-b border-gray-400 focus:border-white outline-none w-full py-2" placeholder="Email" />
              <textarea className="bg-transparent border-b border-gray-400 focus:border-white outline-none w-full py-2" placeholder="Write a message" rows={3} />

              <button className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="w-full lg:w-1/2 lg:text-right space-y-4">
            <h3 className="text-xl font-semibold opacity-80">Global Headquarters</h3>
            <h2 className="text-2xl font-bold">Saptaloka Creative</h2>
            <p className="opacity-75">
              Jl. Dummy Raya No. 123 <br />
              Jakarta, Indonesia 10220
            </p>

            <div className="pt-4">
              <p className="font-semibold">Email</p>
              <p className="text-teal-400">contact@saptaloka.com</p>
            </div>

            <div className="pt-4 space-y-1">
              <p className="font-semibold">Social Media</p>
              <ul className="space-y-1 opacity-85">
                <li>Instagram: @saptaloka.creative</li>
                <li>LinkedIn: Saptaloka Creative</li>
                <li>Website: saptaloka.id</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Map & Office Info */}
        <section className="flex flex-col lg:flex-row justify-between gap-10 px-10 lg:px-24 pb-28">
          
          {/* Map */}
          <div className="w-full lg:w-3/5 relative">
            <img
              src="/assets/map-indonesia-white.svg"
              alt="Map Indonesia"
              className="w-full opacity-90"
            />

            {/* Map Marker Dummy */}
            <div className="absolute top-1/2 left-1/2 bg-orange-500 w-4 h-4 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Office Locations */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-3">
            <h3 className="text-xl font-semibold">Office Locations</h3>

            <ul className="bg-black/40 p-4 rounded-xl w-fit space-y-2">
              <li className="bg-white text-black px-4 py-1 rounded">Jakarta, Indonesia</li>
              <li className="bg-white text-black px-4 py-1 rounded">Surabaya, Indonesia</li>
              <li className="bg-white text-black px-4 py-1 rounded">Bandung, Indonesia</li>
              <li className="bg-white text-black px-4 py-1 rounded">Bali, Indonesia</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
    </>)
}