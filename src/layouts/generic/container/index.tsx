import React from 'react';

const ContainerLayout = ({children}:any) => {
    return (
        <div className={"container"}>
            {children}
        </div>
    );
};

export default ContainerLayout;