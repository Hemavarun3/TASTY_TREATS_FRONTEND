import React from 'react';

const Footer = () => {
    return (
            <div class=" mt-16 mx-16 px-6 font-sans">
                <div class="flex md:flex-row flex-col md:justify-between md:px-10 pb-4 md:pb-0">
                    <div class="flex gap-4 hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                        <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p class="font-sans text-white p-8 text-start md:text-center md:text-lg md:p-4">© 2023 TastyTreats</p>
                    </div>
                    <div class="flex gap-4 hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                        <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                        <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                        <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                    </div>
                </div>
            </div>
    );
}

export default Footer;
