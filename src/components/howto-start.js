import React, {Component} from 'react';

const Code = props => {
    return (
        <p><span className="bg-grey py-1 monospaced f-9">{props.children}</span></p>
    );
};

class HowBegin extends Component {
    render() {
        return (
            <section className="p-5">
                <div className="container pb-4">
                    <h1 className="display-4 pb-2">How to start</h1>
                    <h2 className="display-5 pb-2">PyPI</h2>
                    <p className="pb-3">To install LitVCS, run this command in your terminal:</p>
                    <Code>$ pip install litvcs</Code>
                    <p className="pt-3">This is the preferred method to install LitVCS, as it will always install the
                        most recent stable release.</p>
                    <h2 className="display-5 pb-2 pt-4">Source files</h2>
                    <p className="pb-3">In case you downloaded or cloned the source code from GitHub or your own fork,
                        you can run the following to install cameo for development:</p>
                    <Code>$ git clone https://github.com/Kh-011-WebUIPython/lit-cli</Code><br/>
                    <Code>$ cd lit-cli</Code><br/>
                    <Code>$ pip install --editable .</Code>
                </div>
            </section>
        );
    }
}

export default HowBegin;