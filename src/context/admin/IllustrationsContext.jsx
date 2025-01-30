import { createContext, useContext} from 'react';


const IllustrationsContext = createContext(null);
const IllustrationsDispatchContext = createContext(null);

export function useIllustrations() {
    return useContext(IllustrationsContext);
}

export function useIllustrationsDispatch() {
    return useContext(IllustrationsDispatchContext);
}