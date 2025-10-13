const WelcomePage = ({ isLoading }) => {
  return (
    <div
      className={`flex font-nunito font-extrabold text-[120px] text-white  bg-[#F406E6] justify-center text-center items-center transition-all duration-500 ease-in-out ${
        isLoading ? 'h-screen' : 'max-h-0'
      } `}
    >
      Are you who you want to be?
    </div>
  );
};
export default WelcomePage;
