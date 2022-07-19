import React from 'react';
class Loading extends React.Component {
    render() {
        return (
            <>
                <div className='overlay'></div>
                <div className='dashed-loading'></div>;
            </>
        );
    }
}

export default Loading;
