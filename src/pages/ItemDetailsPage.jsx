
const ItemDetailsPage = () => {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Illustration Name</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Random Text</h1>
            <p className="leading-relaxed">Description goes here </p>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <button
                className="px-6 py-2 transition ease-in duration-200 uppercase  hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                to cart</button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default ItemDetailsPage;
