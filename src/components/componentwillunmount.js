import React from "react";

class MyComponentWillUnmount extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isLoaded: false
        }
    };

    componentDidMount() {
        //fetchData get resultset
        if (resultSet) {
            this.isLoaded = true;
        }
    }

    componentWillUnmount() {
        this.isLoaded = false;
    }

}

export default MyComponentWillUnmount;