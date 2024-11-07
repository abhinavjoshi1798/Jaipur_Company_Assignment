export default function App() {
  return (
    <>
      <div className="flex flex-col  w-full min-h-screen p-5  bg-gradient-to-r from-startGreen to-endBlue">
        <div className="flex bg-slate-100 m-auto flex-col p-3 border border-gray-800 w-full  md:w-[80%] mb-8  max-w-[1024px] rounded-xl
        mt-8">
        <h1 className="text-2xl font-black mb-4">Get in Touch</h1>
        <div className="flex flex-col w-full md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col">
            <label>
              Tell Us Your Name <sup>*</sup>
            </label>
            <input
  className="p-2 rounded-lg m-1 border border-gray-600 bg-gray-200"
  placeholder="Enter Your Full Name"
/>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <label>
              Enter Your Email <sup>*</sup>
            </label>
            <input
              className="p-2 rounded-lg m-1 border border-gray-600 bg-gray-200"
              placeholder="Enter Your Email"
              
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-2">
          <label>Your Website</label>
          <input
            className="p-2 rounded-lg m-1 border border-gray-600 bg-gray-200"
            placeholder="https://"
          />
        </div>
        <div className="w-full flex flex-col mt-2">
          <label>Message</label>
          <textarea
            className="p-2 rounded-lg m-1 border border-gray-600 bg-gray-200"
            placeholder="Enter Your Message"
          />
        </div>
        <button
          className="bg-gradient-to-r from-startGreen to-endBlue text-white border border-black p-2 inline-block w-[100px] flex mx-auto justify-center
        rounded-[10px] mt-3"
        >
          Submit
        </button>
        
        </div>
        
      </div>
    </>
  );
}
