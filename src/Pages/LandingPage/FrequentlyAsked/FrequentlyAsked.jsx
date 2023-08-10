

const FrequentlyAsked = () => {
    return (
        <div className="px-20 bg-[#000000] py-10">

            <h2 className="text-white text-center text-5xl sm:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
            <div className="collapse collapse-plus bg-[#333144] text-white p-4 mb-2">
                <input type="radio" className="bg-purple-700" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is FlexFlow?
                </div>
                <div className="collapse-content ">
                    <p>FlexFlow is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There are always something new to discover and new TV shows and movies are added every week!</p>
                </div>
            </div>

            <div className="collapse collapse-plus  bg-[#333144] text-white p-4 mb-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    How do I cancel?
                </div>
                <div className="collapse-content">
                    <p>Please note that the exact steps may vary based on the design and layout of the FlexFlow website, but generally, the process involves accessing your account settings and locating the subscription cancellation option. If you encounter any issues or have questions during this process, our customer support team is available to assist you.

                        Remember to cancel your subscription before the next billing cycle to avoid any further charges. We value your experience with FlexFlow and hope you've enjoyed your time with us. If you ever decide to come back, we'll be here to welcome you with open arms.</p>
                </div>
            </div>
            <div className="collapse collapse-plus  bg-[#333144] text-white p-4 mb-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What can I watch on FlexFlow?
                </div>
                <div className="collapse-content">
                    <p>FlexFlow offers an expansive and diverse range of content to cater to a wide variety of tastes and preferences. When you join FlexFlow, you can enjoy the following types of contents like Movie, Tv shows, Documentaries, Original Content, Kids Content, Personalization, Offline Viewing. </p>
                </div>
            </div>
            <div className="collapse collapse-plus  bg-[#333144] text-white p-4 mb-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Where can I watch? </div>
                <div className="collapse-content">
                    <p>FlexFlow, our cutting-edge streaming platform, offers an extensive array of content for your entertainment pleasure. To enjoy the diverse range of movies, TV shows, documentaries, and more, you can access FlexFlow on our official website. Additionally, we have user-friendly apps available for download on various devices including iOS and Android smartphones, tablets, smart TVs, and streaming media players. With FlexFlow, your entertainment desires are just a click away, anytime and anywhere.</p>
                </div>
            </div>
            <div className="collapse collapse-plus  bg-[#333144] text-white p-4 mb-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Is FlexFlow good for kids?</div>
                <div className="collapse-content">
                    <p>Absolutely! FlexFlow is designed to provide a safe and enjoyable streaming experience for viewers of all ages, including children. We prioritize creating a family-friendly environment by offering a dedicated section for kids content and implementing various features to ensure that the content is appropriate for young audiences. Here's why FlexFlow is a great choice for kids</p>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAsked;