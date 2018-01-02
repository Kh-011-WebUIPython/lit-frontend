import React from 'react';
import SignUp from './_containers/sign-up';

const FormSection = props => {
    return(
        <section>
            <div className="container p-5">
                <h1 className="display-4 pb-2">Try LIT out</h1>
                <SignUp id='1'/>
            </div>
        </section>
    );
}

export default FormSection;