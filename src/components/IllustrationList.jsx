import { useContext } from 'react';
import { GlobalContext } from '../context/globalStateContext';

export const IllustrationList = () => {
    const { illustrations } = useContext(GlobalContext);
    return (
        <>
            {illustrations.length > 0 ? (
                <>
                    {illustrations.map((illustration) => (
                        <div
                            className="flex items-center bg-gray-100 mb-10 shadow"
                            key={illustration.id}
                        >
                            <div className="flex-auto text-left px-4 py-2 m-2">
                                <div>
                                    <img src={illustration.image} />
                                </div>
                                <p className="text-gray-900 leading-none">
                                    {illustration.title}
                                </p>
                                <p className="text-gray-600">
                                    {illustration.description}
                                </p>
                                <p className="text-gray-600">
                                    {illustration.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
            )}
        </>
    );
};