import React from "react";

class MyComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidUpdate(prevProps) {
        if(this.props.ID !== prevProps.ID) {
            this.fetchData(this.props.ID)
        }
    }

    fetchData() {
        //this function would fetch ID
    }
}

export default MyComponentDidUpdate;