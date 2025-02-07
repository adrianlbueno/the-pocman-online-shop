import { createContext, useContext} from 'react';

export const IllustrationsContext = createContext(null);
export const IllustrationsDispatchContext = createContext(null);

export function useIllustrations() {
    return useContext(IllustrationsContext);
}

export function useIllustrationsDispatch() {
    return useContext(IllustrationsDispatchContext);
}