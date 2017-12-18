import React, {Component} from 'react';


const ManualLit = (props) => {
    return (
        <div className="container-fluid pb-4">
            <h5 className="py-4">{props.title}</h5>
            <span className="pb-2">{props.manual}</span>
            <br/>
            <code className="py-1 ml-3">{props.code}</code>
            <br/>
            <span className="pb-2">{props.description}</span>
        </div>
    );
};

class HowBegin extends Component {
    render() {
        let descriptionLit = [
            {
                title: 'PyPI',
                manual: 'To install LitVCS, run this command in your terminal:',
                code: '$ pip install litvcs',
                description: 'This is the preferred method to install LitVCS, as it will always install the most recent stable release.',
            },
            {
                title: 'Source files',
                manual: 'In case you downloaded or cloned the source code from GitHub or your own fork, you can run the following to install cameo for development:',
                code: ['$ git clone https://github.com/Kh-011-WebUIPython/lit-cli ',
                    <br/>, '$ cd lit-cli ', <br/>, '$ pip install --editable .'],
                description: 'Note: Don\'t forget about \'sudo\'!',
            }
        ];

        return (
            <section className="p-5">
                <div className="container pb-4">
                    <h1 className="display-4 pb-2">How to start</h1>
                    <section className="howBegin p-2">
                        {descriptionLit.map((item, index) => <div><ManualLit key={index}
                                                                             title={item.title}
                                                                             manual={item.manual}
                                                                             code={item.code}
                                                                             desciption={item.description}/>
                        </div>)}
                    </section>
                </div>
            </section>
        );
    }
}

export default HowBegin;