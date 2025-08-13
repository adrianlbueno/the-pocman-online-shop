import firstuserImage from "/src/assets/images/ribertRodriguez.jpg";
import secondUserImage from "/src/assets/images/adrianbueno.jpg";
import thirdUserImage from "/src/assets/images/jonathanSaona.jpeg";

const MeetTheTeam = () => {
  return (
    <div className="py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="">
          <h1 className="font-nunito text-[30px] font-bold  text-gray-800 mb-6">
            who we are?
          </h1>
          <p className="font-nunito text-[50px] text-gray-600 mb-8">
            We are creators, photographers and entrepreneurs.
          </p>
        </div>

        <hr className="border-separate"></hr>
        <div>
          <h1 className="font-nunito text-[30px] font-bold  text-gray-800 mb-6">
            how we do it?
          </h1>
          <p className="font-nunito text-[50px] text-gray-600 mb-8">
            with love, passion and dedication. We believe in the power of
            creativity
          </p>
        </div>
        <hr className="border-separate"></hr>

        <div className="flex flex-wrap justify-center mt-8">
          <div className="text-center px-4 mb-6">
            <img
              className="w-32 h-32 object-cover rounded-full mx-auto"
              src={secondUserImage}
              alt="image of Adrian"
            />
            <div className=" font-nunito text-xl mt-2">Adrian</div>
            <div className=" font-nunito text-xl mt-2">
              Founder & Creative Director
            </div>
          </div>
          <div className="text-center px-4 mb-6">
            <img
              className="w-32 h-32 object-cover rounded-full mx-auto"
              src={firstuserImage}
              alt="image of Ribert"
            />
            <p className=" font-nunito text-xl mt-2">Ribert</p>
            <div className=" font-nunito text-xl mt-2">Co-founder</div>
          </div>
          <div className="text-center px-4 mb-6">
            <img
              className="w-32 h-32 object-cover rounded-full mx-auto"
              src={thirdUserImage}
              alt="image of Jonathan"
            />
            <div className="font-nunito text-xl mt-2">Jonathan</div>
            <div className="font-nunito text-xl mt-2">Co-founder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
