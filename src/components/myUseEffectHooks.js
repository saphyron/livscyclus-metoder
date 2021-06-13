import React, { useState, useEffect } from "react";

class MyUseEffectHooksComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Du har klikket ${this.state.count} gange`;
      }
    componentDidUpdate() {
        document.title = `Du har klikket ${this.state.count} gange`;
    }

    render() {
        return (
            <div>
                <p>Du har klikket {this.state.count} gange</p>
                <button onClick={() => this.setState({ count: this.state.count + 1})}>
                    Tryk på mig
                </button>
            </div>
        );
    }
}

function MyUseEffectHooks() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Du har klikket ${count} gange`
    });

    return (
        <div>
            <p>Du har klikket {this.state.count} gange</p>
            <button onClick={() => setCount(count + 1)}>
                Tryk på mig
            </button>
        </div>
    );
}

export default MyUseEffectHooksComponent;
//export default MyUseEffectHooks;