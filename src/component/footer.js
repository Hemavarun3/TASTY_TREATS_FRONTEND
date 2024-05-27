import React from 'react';

const Footer = () => {
    return (
        <div class=" mt-16 mx-16 px-6 font-sans">
            <div class="flex md:flex-row flex-col md:justify-between md:px-10 pb-16 md:pb-0 gap-2">
                <div className='flex justify-center'>
                    <div class="hidden md:visible  md:flex space-x-4 hover:cursor-pointer items-center p-0">
                        <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height ="10" alt="" />
                        <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="50" alt="" />
                    </div>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                    <p class="font-sans text-white py-2 text-start md:text-center md:text-lg md:p-4">© 2023 TastyTreats</p>
                </div>
                <div className='flex justify-center'>
                    <div class="flex space-x-4 hover:cursor-pointer items-center">
                        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                        <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                        <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                        <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
