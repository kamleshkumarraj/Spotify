import { createContext } from "react";

export const FullPageContext = createContext();

function FullPageWrapper({children}) {
    return (
        <FullPageContext.Provider value={''}>
            {children}
        </FullPageContext.Provider>
    )
}

export default FullPageWrapper