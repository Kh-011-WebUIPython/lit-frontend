import React, {Component} from 'react';
import SignUpForm from './sign-up-form';

class FormSection extends Component {
    render() {
        return(
            <section>
                <div className="container p-5">
                    <h1 className="display-4 pb-2">Try LIT out</h1>
                    <SignUpForm id='1'/>
                </div>
            </section>
        );
    }
}

export default FormSection;