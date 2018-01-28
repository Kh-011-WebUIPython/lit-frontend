import React from 'react';
import Code from '../_components/code';

const HowToStart = () => (
    <section className="p-5">
        <div className="container pb-4 text-about">
            <h1 className="display-4 pb-2">How to start</h1>
            <h2 className="display-5 pb-2">PyPI</h2>
            <p className="pb-3">To install LitVCS, run this command in
                your terminal:</p>
            <Code>$ pip install litvcs</Code>
            <p className="pt-3">This is the preferred method to install
                LitVCS, as it will always install the
                most recent stable release.</p>
            <h2 className="display-5 pb-2 pt-4">Source files</h2>
            <p className="pb-3">In case you downloaded or cloned the source
                code from GitHub or your own fork, you can run the following
                to install cameo for development:</p>
            <Code>$ git clone
                https://github.com/Kh-011-WebUIPython/lit-cli</Code>
            <Code>$ cd lit-cli</Code>
            <Code>$ pip install --editable .</Code>
        </div>
    </section>
);

export default HowToStart;
