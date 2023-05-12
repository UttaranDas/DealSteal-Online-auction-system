<div className="my-10 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Upload Your Product Details</h1>
    <form className="space-y-4">
      <div>
        <label className="block font-medium text-gray-700">Product Name</label>
        <input type="text" className="form-input border mt-1 block w-full rounded-md text-lg" placeholder="Enter product name" />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Product Description</label>
        <textarea className="form-textarea border mt-1 block w-full rounded-md text-lg" placeholder="Enter product description"></textarea>
      </div>
      <div>
        <label className="block font-medium text-gray-700">Starting Bid Price</label>
        <input type="number" className="form-input border mt-1 block w-full rounded-md text-lg" placeholder="Enter starting bid price" min="1" max="999999999999" />
        <button type="submit" className=" bg-blue-500 my-2 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded-md">Get an Estimated Price</button>
      </div>
      <div>
        <label className="block font-medium text-gray-700">Product Image</label>
        <input type="file" className="form-input border mt-1 block w-full rounded-sm text-lg" />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Bid Closing Date and Time</label>
        <input type="datetime-local" className="form-input border mt-1 block w-full rounded-sm text-lg" />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Upload Product Details</button>
      </div>
    </form>
  </div>
</div>