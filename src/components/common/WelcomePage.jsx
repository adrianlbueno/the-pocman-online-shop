const WelcomePage = (isLoading) => {
  return (
    <div
      className={`flex font-nunito font-extrabold text-[64px] text-white  bg-[#F406E6] justify-center text-center items-center transition-all duration-500 ease-in-out ${
        isLoading ? 'h-screen' : 'max-h-0'
      } `}
    >
      Loading...
    </div>
  );
};
export default WelcomePage;
