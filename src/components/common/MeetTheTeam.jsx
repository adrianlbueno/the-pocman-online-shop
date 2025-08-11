import secondUserImage from "/src/assets/images/adrianbueno.jpg";
import thirdUserImage from "/src/assets/images/papichulo.jpg";

const MeetTheTeam = () => {
  return (
    <div className="mainCtn about  py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-nunito text-4xl font-bold text-center text-gray-800 mb-6">
          Meet the Team
        </h1>

        <div className="flex flex-wrap justify-center mt-8">
          <div className="text-center px-4 mb-6">
            <img
              className="w-32 h-32 object-cover rounded-full mx-auto"
              src={secondUserImage}
              alt="image of Adrian"
            />
            <p className=" font-nunito text-xl mt-2">Adrian, CEO</p>
          </div>
          <div className="text-center px-4 mb-6">
            <img
              className="w-32 h-32 object-cover rounded-full mx-auto"
              alt="image of Ribert"
            />
            <p className=" font-nunito text-xl mt-2">Ribert, Co-founder</p>
          </div>
          <div className="text-center px-4 mb-6">
            <img
              className="w-32 h-32 object-cover rounded-full mx-auto"
              src={thirdUserImage}
              alt="image of Jonathan"
            />
            <p className="font-nunito text-xl mt-2">Jonathan, Co-founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
