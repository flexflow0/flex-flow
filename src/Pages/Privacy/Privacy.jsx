import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <div>
      <Link to="/">
        <h1 className='text-2xl text-red-600
      '> Back to Help Home</h1>
      </Link>
      <div className='mt-12'>
        <h1 className='text-5xl'>Privacy Statement</h1>
        <p className='text-[24px] mt-6'>
          This Privacy Statement explains our practices, including your choices, regarding the collection, use, and disclosure of certain information, <br />including your personal information in connection with the FlexFlow service.
        </p>
      </div>
      <div className='mt-12'>
        <h1 className='text-3xl'>Contacting Us</h1>
        <p className='text-[18px] mt-6'>
          If you have general questions about your account or how to contact customer service for assistance, please visit our online help center at help.flexflow.com. For questions specifically about this Privacy Statement, or our use of your personal information, cookies or similar technologies, please contact our Data Protection Officer/Privacy Office by email at privacy@flexflow.com.
        </p>
        <p className='text-[18px]'>
          The data controller of your personal information is FlexFlow Pte. Ltd. Please note that if you contact us to assist you, for your safety and ours we may need to authenticate your identity before fulfilling your request.
        </p>
      </div>
      <div className='mt-12'>
        <h1 className='text-3xl'>Collection of Information</h1>
        <p className='text-[18px] mt-6'>
          We receive and store information about you such as:
        </p>
        <span className='text-3xl'>
          Information you provide to us:
        </span> <span className='text-[16px]'>We collect information you provide to us which includes:</span>
        <ul className='ml-10 text-[18px] mt-4'>
          <li>
            <p>your name, email address, payment method(s), telephone number, and other identifiers you might use (such as an in-game name). We collect this information in a number of ways, including when you enter it while using our service, interact with our customer service, or participate in surveys or marketing promotions;</p>
          </li>
          <li>
            <p>information when you choose to provide ratings, taste preferences, account settings (including preferences set in the Account section of our website), or otherwise provide information to us through our service or elsewhere.
            </p>
          </li>

        </ul>
      </div>
      <div className='mt-12'>
        <h1 className='text-3xl'>Information we collect automatically:</h1>
        <p className='text-[18px] mt-6'>
          We collect information about you and your use of our service, your interactions with us and our advertising, as well as information regarding your network, network devices, and your computer or other flexflow capable devices you might use to access our service (such as gaming systems, smart TVs, mobile devices, set top boxes, and other streaming media devices). This information includes:
          your activity on the flexflow service, such as title selections, shows you have watched, search queries, and a
        </p>
        <span className='text-3xl'>
          Information you provide to us:
        </span> <span className='text-[16px]'>We collect information you provide to us which includes:</span>
        <ul className='ml-10 text-[18px] mt-4'>
          <li>
            your activity on the flexflow service, such as title selections, shows you have watched, search queries, and activity in flexflow games;

          </li>
          <li>
            your interactions with our emails and texts, and with our messages through push and online messaging channels;


          </li>
          <li>
            details of your interactions with our customer service, such as the date, time and reason for contacting us, transcripts of any chat conversations, and if you call us, your phone number and call recordings;

          </li>
          <li>
            device IDs or other unique identifiers, including for your network devices (such as your router), and devices that are flexflow capable on your network;


          </li>

        </ul>
      </div>
      <div>
        <h1 className='text-3xl'>Security</h1>
        <p className='text-[20px]'>We use reasonable administrative, logical, physical and managerial measures to safeguard your personal information against loss, theft and unauthorized access, use and modification. These measures are designed to provide a level of security appropriate to the risks of processing your personal information.</p>
      </div>
      <div>
        <h1 className='text-3xl'>Other Websites, Platforms and Applications</h1>
        <p className='text-[20px]'>The flexflow service may be provided through and/or utilize features (such as the display of social media content, or the provision of voice controls) operated by third party platforms, or contain links to sites operated by third parties whose policies regarding the handling of information may differ from ours. For example, you may be able to access the flexflow service through platforms such as gaming systems, smart TVs, mobile devices, set top boxes and a number of other Internet connected devices. These websites and platforms have separate and independent privacy or data policies, privacy statements, notices and terms of use, which we recommend you read carefully. In addition, you may encounter third party applications that interact with the flexflow service.

        </p>
      </div>
      <div>
        <h1 className='text-3xl'>Children</h1>
        <p className='text-[20px]'> You must be at least 18 years of age or older to subscribe to the flexflow service. Minors may only use the service with the involvement, supervision, and approval of a parent or legal guardian.

        </p>
      </div>
      <div>
        <h1 className='text-3xl'>Changes to This Privacy Statement</h1>
        <p className='text[20px] mt-4'> We will update this Privacy Statement from time to time in response to changing legal, regulatory or operational requirements. We will provide notice of any such changes (including when they will take effect) in accordance with law. Your continued use of the flexflow service after any such updates take effect will constitute acknowledgement and (as applicable) acceptance of those changes. If you do not wish to acknowledge or accept any updates to this Privacy Statement, you may cancel your use of the flexflow service. To see when this Privacy Statement was last updated, please see the Last Updated section below.

        </p>

        <p className='text[16px] mt-4'>To see the prior version of this document, please go to flexflow.com/privacyupdates </p>

      </div>
      
    </div>
  )
}

export default Privacy