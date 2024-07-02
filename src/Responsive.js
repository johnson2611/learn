import React from 'react';
import { useMediaQuery } from 'react-responsive';

const withResponsive = (WrappedComponent) =>{
    return (props) => {
        const isDesktop =  useMediaQuery({minWidth: 1200});
        const isTablet =  useMediaQuery({minWidth: 768, maxWidth: 991});
        const isMobile =  useMediaQuery({maxWidth: 767});
        return(
            <div>
                {isDesktop && <WrappedComponent deviceType = "desktop" {...props} />}
                {isTablet && <WrappedComponent deviceType = "tablet" {...props} />}
                {isMobile && <WrappedComponent deviceType = "mobile" {...props} />}
            </div>
        );
    };
};

export default withResponsive