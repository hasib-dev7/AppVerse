import { Children } from "react";


const Content = ({children}) => {
    return (
        <>
            <div className="md:w-11/12  lg:10/12 mx-auto px-4 md:px-3 lg:px-12 bg-[#F5F5F5]  border-2 border-green-600">
                {children}
            </div>
        </>
    );
};

export default Content;