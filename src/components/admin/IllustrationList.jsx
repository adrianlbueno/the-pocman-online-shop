import { Link } from "react-router-dom";
import { useFetchIllustrations } from "../../hooks/useFetchIllustrations.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const IllustrationList = () => {
  const [illustrations] = useFetchIllustrations();

  if (!illustrations || illustrations.length === 0) return;
  return (
    <>
      {!illustrations || illustrations.length === 0 ? (
        <p className="text-center bg-gray-100 text-gray-500 py-5">
          No illustrations available.
        </p>
      ) : (
        illustrations.map(({ id, title, description, price, image }) => (
          <div key={id} className=" flex justify-center mb-3">
            <div
              className="flex flex-col items-center basis-3xs border rounded-lg shadow-sm md:flex-row md:max-w-xl "
              key={id}
            >
              <img
                src={image}
                alt={description}
                className="object-cover w-full h-96 md:h-auto md:w-48"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <p className=" font-bold text-gray-900 leading-none">{title}</p>
                <p className=" mb-2 font-normal text-gray-700">{description}</p>
                <span className="inline-block text-sm font-semibold mt-1">
                  ${price}
                </span>
              </div>

              <div className="flex-auto text-gray-800 text-right px-4 py-2 m-2">
                <Link to={`/edit/${id}`} title="Edit Illustration">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default IllustrationList;
