import React from 'react';
import { Link } from 'react-router-dom';

const LegalNotice = () => {

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className='px-8'>
            <div className='mt-10 mb-10'>
                <p>Welcome to FlexFow. This legal notice (the "Notice") governs your use of the FlexFow website and all associated services and content provided through the website. FlexFow respects your privacy. Please refer to our <span className='text-blue-900'><Link to='/privacy' onClick={scrollToTop}>Privacy Policy</Link></span>  for information on how we collect, use, and protect your personal data.</p>
            </div>
            <div className='mb-10'>
                <h2 className='text-2xl mb-3 font-semibold'>Intellectual Property Rights</h2>
                <li>All content, logos, trademarks, and other intellectual property on the FlexFow website are the property of FlexFow or its licensors and are protected by applicable intellectual property laws.</li>

                <li>You may not reproduce, distribute, modify, or use any of our intellectual property without explicit permission.
                </li>
            </div>

            <div className='mb-10'>
                <h2 className='text-2xl mb-3 font-semibold'>Content Usage</h2>
                <li>FlexFow provides streaming services for legally obtained content. Users are responsible for ensuring they have the necessary rights to access and view the content.</li>
                <li>Any illegal use, including but not limited to piracy, distribution, or unauthorized reproduction of copyrighted material, is strictly prohibited.
                </li>
            </div>

            <div className='mb-10'>
                <h2 className='text-2xl mb-3 font-semibold'>Disclaimers</h2>
                <li>FlexFow provides content "as-is" and does not guarantee the accuracy, reliability, or availability of any content.</li>
                <li>FlexFow is not responsible for the actions or content of third-party websites or services linked to or from our platform.</li>
                <li>We do not endorse any user-generated content and are not responsible for the opinions expressed by users.</li>
            </div>

            <div className='mb-10'>
                <h2 className='text-2xl mb-3 font-semibold'>Limitation of Liability</h2>
                <p>FlexFow and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the website.</p>
            </div>

            <div className='mb-10'>
            <h2 className='text-2xl mb-3 font-semibold'>Governing Law</h2>
            <p>This Notice is governed by and construed in accordance with the laws of <span className='font-bold text-blue-900'>Copyright Act, 2000.</span></p>
            </div>

            <div>
            <h2 className='text-2xl mb-3 font-semibold'>Contact Information</h2> 
            <p>If you have any questions or concerns about this Legal Notice, you may <span className='text-blue-900 font-bold'><Link to='/contactus' onClick={scrollToTop}>Contact Us</Link></span>.</p>
            </div>
        </div>
    );
};

export default LegalNotice;