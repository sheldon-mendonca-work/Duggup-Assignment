<script>
    import './main.css';

    const logoSvg = "Logo-Icon.png";
    const companySvg = "38795_vector.svg";
    const userProfilePic = "c135d62b39e8cc0f1e2dfce61ea32106.jpeg";
    const userName = "Krishna Kiran";
    const navigationList = [
        {
            id: 1,
            image: "home.png",
            name: "Home"
        }
    ];
    let bio = "Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.";
    let isFollowing = false;
    const posts = [  
        {
            type: "post",
            image: "steve-jobs.jpeg",
            postTitle: "",
            postBody: "",
            postSummary: "No amount of technology can convert a bad story into a good story.",
            date: "Dec 2023"
        },
        {
            type: "post",
            image: "sam-altman.jpeg",
            postTitle: "",
            postBody: "",
            postSummary: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.",
            date: "Dec 2023"
        },
        {
            type: "job",
            companyName: "Duggup",
            image: "steve-jobs.jpeg",
            companyLocation: "San Francisco Bay Area",
            jobName: "Co-Founder and CEO",
            position: "Full-time",
            location: "Remote",
            date: "Nov 2023"
        },
        {
            type: "post",
            image: "startup.jpeg",
            postTitle: "",
            postBody: "",
            postSummary: "Startup Lesson I am reflecting. Don't build for the 'average person'.",
            date: "Dec 2023"
        },
        {
            type: "post",
            image: "regret.png",
            postTitle: "",
            postBody: "",
            postSummary: "Your biggest regrets at 80 will be acts of omission.",
            date: "Dec 2023"
        },
        {
            type: "job",
            companyName: "BetterUp",
            image: "",
            companyLocation: "San Francisco Bay Area",
            jobName: "VP Engineering",
            position: "Full-time",
            location: "",
            date: "Sept 2022"
        }
    ]
    let lastPost = "job", lastDate = "";
</script>

<main class="main max-w-screen-2xl m-auto">
    <!-- header - start -->
    <header class="header">
        <div class="header-left">
            <div class="header-logoDiv">
                <img src={"duggup.png"} alt="Duggup-logo" class="header-logo"/>
            </div>
            <div class="header-nameDiv">
                <img src={"duggup-name.png"} alt="Duggup" class="header-name"/>
            </div>
        </div>

        <div class="header-right">
            <div class="access">
                <nav class="nav-bar">
                    <a class="nav-link" href="null">
                        <svg class="nav-link__img" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.601562 5.41409C0.601562 5.15141 0.735263 4.90497 0.960369 4.75274L6.50704 1.00173C6.80311 0.801507 7.20002 0.801507 7.49609 1.00173L13.0428 4.75274C13.2679 4.90497 13.4016 5.15141 13.4016 5.41409V12.4343C13.4016 13.1066 12.8285 13.6516 12.1216 13.6516H1.88156C1.17464 13.6516 0.601562 13.1066 0.601562 12.4343V5.41409Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.60156 8.05156C8.60156 8.93522 7.88522 9.65156 7.00156 9.65156C6.11791 9.65156 5.40156 8.93522 5.40156 8.05156C5.40156 7.16791 6.11791 6.45156 7.00156 6.45156C7.88522 6.45156 8.60156 7.16791 8.60156 8.05156Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div class="nav-link__name">Home</div>
                    </a>
                    <a class="nav-link" href="null">
                        <svg class="nav-link__img" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.33594L2 14.6693" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.6693 3.33594H5.33594V6.0026H14.6693V3.33594Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.6693 10H5.33594V12.6667H14.6693V10Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="2.0026" cy="11.3307" r="0.666667" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="2.0026" cy="4.66667" r="0.666667" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div class="nav-link__name">Explore</div>
                    </a>
                    <a class="nav-link" href="null">
                        <svg class="nav-link__img"  viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 14.75L8.08398 15.0274C8.17671 15.1664 8.33282 15.25 8.5 15.25C8.66718 15.25 8.82329 15.1664 8.91602 15.0274L8.5 14.75ZM8.42496 14.6374L8.00893 14.9148L8.42496 14.6374ZM7.29933 13.1824L6.98185 13.5686L7.29933 13.1824ZM6.2662 12.6295L6.12091 13.1079L6.2662 12.6295ZM1.16349 11.681L1.60899 11.454L1.16349 11.681ZM1.81901 12.3365L2.04601 11.891L1.81901 12.3365ZM6.86197 1.57698L6.63498 2.02248L6.86197 1.57698ZM8.17302 2.88803L7.72752 3.11502L8.17302 2.88803ZM1.81901 1.41349L2.04601 1.85899L1.81901 1.41349ZM1.16349 2.06901L1.60899 2.29601L1.16349 2.06901ZM8.57504 14.6374L8.99107 14.9148L8.57504 14.6374ZM9.70067 13.1824L10.0182 13.5686L9.70067 13.1824ZM10.7338 12.6295L10.8791 13.1079L10.7338 12.6295ZM15.8365 11.681L15.391 11.454L15.8365 11.681ZM15.181 12.3365L14.954 11.891L15.181 12.3365ZM10.138 1.57698L10.365 2.02248L10.138 1.57698ZM8.82698 2.88803L9.27248 3.11502L8.82698 2.88803ZM15.181 1.41349L14.954 1.85899L15.181 1.41349ZM15.8365 2.06901L15.391 2.29601L15.8365 2.06901ZM3.4 1.75H3.7V0.75H3.4V1.75ZM1.5 10.1V3.65H0.5V10.1H1.5ZM8.91602 14.4726L8.84098 14.3601L8.00893 14.9148L8.08398 15.0274L8.91602 14.4726ZM4.43112 12H3.4V13H4.43112V12ZM8.84098 14.3601C8.33727 13.6045 8.03187 13.1372 7.61681 12.7961L6.98185 13.5686C7.25511 13.7932 7.47068 14.1074 8.00893 14.9148L8.84098 14.3601ZM4.43112 13C5.40146 13 5.78246 13.0051 6.12091 13.1079L6.4115 12.151C5.89741 11.9949 5.3392 12 4.43112 12V13ZM7.61681 12.7961C7.26134 12.5039 6.85176 12.2847 6.4115 12.151L6.12091 13.1079C6.43539 13.2034 6.72794 13.36 6.98185 13.5686L7.61681 12.7961ZM0.5 10.1C0.5 10.5118 0.499611 10.8507 0.522097 11.1259C0.545059 11.407 0.594342 11.6653 0.717987 11.908L1.60899 11.454C1.56915 11.3758 1.53669 11.2637 1.51878 11.0445C1.50039 10.8194 1.5 10.5283 1.5 10.1H0.5ZM3.4 12C2.97171 12 2.68056 11.9996 2.45552 11.9812C2.23631 11.9633 2.12421 11.9309 2.04601 11.891L1.59202 12.782C1.83469 12.9057 2.09304 12.9549 2.37409 12.9779C2.6493 13.0004 2.98821 13 3.4 13V12ZM0.717987 11.908C0.909734 12.2843 1.21569 12.5903 1.59202 12.782L2.04601 11.891C1.85785 11.7951 1.70487 11.6422 1.60899 11.454L0.717987 11.908ZM3.7 1.75C4.54833 1.75 5.15451 1.75039 5.62968 1.78921C6.09901 1.82756 6.39634 1.90089 6.63498 2.02248L7.08897 1.13148C6.68586 0.926087 6.24229 0.835932 5.71111 0.792533C5.18577 0.749611 4.53183 0.75 3.7 0.75V1.75ZM9 6.05C9 5.21817 9.00039 4.56423 8.95747 4.03889C8.91407 3.50771 8.82391 3.06413 8.61852 2.66103L7.72752 3.11502C7.84911 3.35366 7.92244 3.65099 7.96079 4.12032C7.99961 4.59549 8 5.20167 8 6.05H9ZM6.63498 2.02248C7.10538 2.26217 7.48783 2.64462 7.72752 3.11502L8.61852 2.66103C8.28297 2.00247 7.74753 1.46703 7.08897 1.13148L6.63498 2.02248ZM3.4 0.75C2.98821 0.75 2.6493 0.749611 2.37409 0.772097C2.09304 0.795059 1.83469 0.844342 1.59202 0.967987L2.04601 1.85899C2.12421 1.81915 2.23631 1.78669 2.45552 1.76878C2.68056 1.75039 2.97171 1.75 3.4 1.75V0.75ZM1.5 3.65C1.5 3.22171 1.50039 2.93056 1.51878 2.70552C1.53669 2.48631 1.56915 2.37421 1.60899 2.29601L0.717987 1.84202C0.594342 2.08469 0.545059 2.34304 0.522097 2.62409C0.499611 2.8993 0.5 3.23821 0.5 3.65H1.5ZM1.59202 0.967987C1.21569 1.15973 0.909734 1.46569 0.717987 1.84202L1.60899 2.29601C1.70487 2.10785 1.85785 1.95487 2.04601 1.85899L1.59202 0.967987ZM13.6 0.75H13.3V1.75H13.6V0.75ZM8 6.05V14.75H9V6.05H8ZM16.5 10.1V3.65H15.5V10.1H16.5ZM8.91602 15.0274L8.99107 14.9148L8.15902 14.3601L8.08398 14.4726L8.91602 15.0274ZM12.5689 13H13.6V12H12.5689V13ZM8.99107 14.9148C9.52932 14.1074 9.74489 13.7932 10.0182 13.5686L9.38319 12.7961C8.96813 13.1372 8.66273 13.6045 8.15902 14.3601L8.99107 14.9148ZM12.5689 12C11.6608 12 11.1026 11.9949 10.5885 12.151L10.8791 13.1079C11.2175 13.0051 11.5985 13 12.5689 13V12ZM10.0182 13.5686C10.2721 13.36 10.5646 13.2034 10.8791 13.1079L10.5885 12.151C10.1482 12.2847 9.73866 12.5039 9.38319 12.7961L10.0182 13.5686ZM15.5 10.1C15.5 10.5283 15.4996 10.8194 15.4812 11.0445C15.4633 11.2637 15.4309 11.3758 15.391 11.454L16.282 11.908C16.4057 11.6653 16.4549 11.407 16.4779 11.1259C16.5004 10.8507 16.5 10.5118 16.5 10.1H15.5ZM13.6 13C14.0118 13 14.3507 13.0004 14.6259 12.9779C14.907 12.9549 15.1653 12.9057 15.408 12.782L14.954 11.891C14.8758 11.9309 14.7637 11.9633 14.5445 11.9812C14.3194 11.9996 14.0283 12 13.6 12V13ZM15.391 11.454C15.2951 11.6422 15.1422 11.7951 14.954 11.891L15.408 12.782C15.7843 12.5903 16.0903 12.2843 16.282 11.908L15.391 11.454ZM13.3 0.75C12.4682 0.75 11.8142 0.749611 11.2889 0.792533C10.7577 0.835932 10.3141 0.926087 9.91103 1.13148L10.365 2.02248C10.6037 1.90089 10.901 1.82756 11.3703 1.78921C11.8455 1.75039 12.4517 1.75 13.3 1.75V0.75ZM9 6.05C9 5.20167 9.00039 4.59549 9.03921 4.12032C9.07756 3.65099 9.15089 3.35366 9.27248 3.11502L8.38148 2.66103C8.17609 3.06413 8.08593 3.50771 8.04253 4.03889C7.99961 4.56423 8 5.21817 8 6.05H9ZM9.91103 1.13148C9.25247 1.46703 8.71703 2.00247 8.38148 2.66103L9.27248 3.11502C9.51217 2.64462 9.89462 2.26217 10.365 2.02248L9.91103 1.13148ZM13.6 1.75C14.0283 1.75 14.3194 1.75039 14.5445 1.76878C14.7637 1.78669 14.8758 1.81915 14.954 1.85899L15.408 0.967987C15.1653 0.844342 14.907 0.795059 14.6259 0.772097C14.3507 0.749611 14.0118 0.75 13.6 0.75V1.75ZM16.5 3.65C16.5 3.23821 16.5004 2.8993 16.4779 2.62409C16.4549 2.34304 16.4057 2.08469 16.282 1.84202L15.391 2.29601C15.4309 2.37421 15.4633 2.48631 15.4812 2.70552C15.4996 2.93056 15.5 3.22171 15.5 3.65H16.5ZM14.954 1.85899C15.1422 1.95487 15.2951 2.10785 15.391 2.29601L16.282 1.84202C16.0903 1.4657 15.7843 1.15973 15.408 0.967987L14.954 1.85899Z" fill="#666666"/>
                        </svg>
                        <div class="nav-link__name">Learn</div>
                    </a>
                </nav>
                
                <button class="btn btn-1">
                    <svg class="nav-link__img" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.33333V9.66667M4.33333 7H9.66667M4.2 13H9.8C10.9201 13 11.4802 13 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C13 11.4802 13 10.9201 13 9.8V4.2C13 3.0799 13 2.51984 12.782 2.09202C12.5903 1.71569 12.2843 1.40973 11.908 1.21799C11.4802 1 10.9201 1 9.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13Z" stroke="#4D4D4D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="btn-1__name">Post</div>
                </button>
            </div>

            <div class="user-profile-sm">
                <div class="user-profile-sm__imgDiv">
                    <img src={userProfilePic} alt={userName} class="user-profile-sm__img"/>
                </div>
                <div class="user-profile-sm__name">{userName}</div>
                <div class="user-proile-sm__down">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="user-profile-sm__svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>                      
                </div>
            </div>
        </div>
    </header>
    <!-- header - end -->

    <!-- profile-section - start -->
    <section class="profile-section">
        <section class="user-info">

            <div class="user-info-abt">
                <div class="user-info-abt__imgDiv">
                    <img src={userProfilePic} alt={userName} class="user-info-abt__img"/>
                </div>
                <div class="user-info-abt__name">{userName}</div>
            </div>

            <div class="user-info-bio">
                <div class="user-info-sum">
                    <div class="user-info-bio__bio">{bio}</div>
                    <div class="user-info-curr">
                        <div class="user-info-logoDiv">
                            <img src={"duggup.png"} alt={"Duggup"} class="user-info-logo"/>
                        </div>
                        <div class="user-info-comName">Duggup</div>
                        <div class="user-info-comPos">Co-Founder and CEO</div>
                    </div>
                </div>
                
                <div class="user-links">
                    <button class="btn btn-1">
                        <div>{isFollowing ? "Followed": "Follow"}</div>
                    </button>
                    <div class="user-more">
                        <a href="null" class="user-webDiv">
                            <div class="user-web-link">My website</div>
                            <div class="user-web-svg">
                                <svg class="nav-link__img" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.20156 1.59961H4.00156C2.67608 1.59961 1.60156 2.67413 1.60156 3.99961V11.9997C1.60156 13.3252 2.67608 14.3997 4.00156 14.3997H12.0016C13.327 14.3997 14.4016 13.3252 14.4016 11.9997V8.79961M10.4012 1.5998L14.4016 1.59961M14.4016 1.59961V5.19971M14.4016 1.59961L7.60098 8.39942" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    
                            </div>
                        </a>
                        <a href="null" class="user-dots">
                            <svg class="user-dots_svg" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.90078 2.99922C4.90078 3.71719 4.31875 4.29922 3.60078 4.29922C2.88281 4.29922 2.30078 3.71719 2.30078 2.99922C2.30078 2.28125 2.88281 1.69922 3.60078 1.69922C4.31875 1.69922 4.90078 2.28125 4.90078 2.99922ZM13.3008 2.99922C13.3008 3.71719 12.7188 4.29922 12.0008 4.29922C11.2828 4.29922 10.7008 3.71719 10.7008 2.99922C10.7008 2.28125 11.2828 1.69922 12.0008 1.69922C12.7188 1.69922 13.3008 2.28125 13.3008 2.99922ZM21.7008 2.99922C21.7008 3.71719 21.1188 4.29922 20.4008 4.29922C19.6828 4.29922 19.1008 3.71719 19.1008 2.99922C19.1008 2.28125 19.6828 1.69922 20.4008 1.69922C21.1188 1.69922 21.7008 2.28125 21.7008 2.99922Z" stroke="#A5B9D3" stroke-width="3"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </section>

        <section class="timeline">
            
            <div class="stories">
                <div class="stories__desc">

                    <div class="stories-svg-div">
                        <svg class="stories-svg" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.5" cy="8" r="6.5" fill="white" stroke="#0066FF" stroke-width="3"/>
                        </svg>
                    </div>
                    <div class="stories__date">Dec 2023</div>
                </div>

                <div class="stories__info">
                    <div class="stories-card">
                        <div class="stories-img-div">
                            <img src="steve-jobs.jpeg" alt="Steve Jobs" class="stories-img" />
                        </div>
                        <div class="stories-summary">{"No amount of technology can convert a bad story into a good story."}</div>
                    </div>

                    <div class="stories-card">
                        <div class="stories-img-div">
                            <img src="sam-altman.jpeg" alt="Sam Altman" class="stories-img" />
                        </div>
                        <div class="stories-summary">{"Your biggest regrets at 80 will be acts of omission."}</div>
                    </div>
                </div>
            </div>

            <div class="job-status">
                <div class="job-status__desc">
                    <div class="job-status-chevronDiv">
                        <svg class="job-status-chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg> 
                    </div>
                    <div class="job-status-svgDiv">
                        <svg class="job-status-svg" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_7_11018)">
                            <ellipse cx="15.5" cy="13.5" rx="14" ry="13.5" fill="white"/>
                            <path d="M25 13.5C25 18.3177 20.9024 22.5 15.5 22.5C10.0976 22.5 6 18.3177 6 13.5C6 8.68229 10.0976 4.5 15.5 4.5C20.9024 4.5 25 8.68229 25 13.5Z" stroke="#0066FF" stroke-width="9"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_7_11018" x="0.5" y="0" width="30" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="0.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.647059 0 0 0 0 0.72549 0 0 0 0 0.827451 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_11018"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_11018" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                    <div class="job-status__logoDiv">
                        <img src="duggup.png" alt="Duggup Logo" class="job-status__logo"/>
                    </div>
                    <div class="job-status__com-name">Duggup</div>
                    <div class="job-status__loc">San Francisco Bay Area</div>
                    <div class="job-status__joi">Joined</div>
                    <div class="job-status__date">Nov 2023</div>
                </div>

                <div class="job-status__info">
                    <div class="job-status__container">
                        <div class="job-status__role">Co-Founder and CEO</div>
                        <div class="job-status__emp">
                            <div class="job-status__pos">Full-time</div>
                            <div class="job-status__status">Remote</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="stories">
                <div class="stories__desc">

                    <div class="stories-svg-div">
                        <svg class="stories-svg" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.5" cy="8" r="6.5" fill="white" stroke="#0066FF" stroke-width="3"/>
                        </svg>
                    </div>
                    <div class="stories__date">Dec 2023</div>
                </div>

                <div class="stories__info">
                    <div class="stories-card">
                        <div class="stories-img-div">
                            <img src="startup.jpeg" alt="Start Up" class="stories-img" />
                        </div>
                        <div class="stories-summary">{"Startup Lesson I am reflecting. Don't build for the 'average person'."}</div>
                    </div>

                    <div class="stories-card">
                        <div class="stories-img-div">
                            <img src="regret.png" alt="Sam Altman" class="stories-img" />
                        </div>
                        <div class="stories-summary">{"Your biggest regrets at 80 will be acts of omission."}</div>
                    </div>
                </div>
            </div>

            <div class="job-status">
                <div class="job-status__desc">
                    <div class="job-status-chevronDiv">
                        <svg class="job-status-chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg> 
                    </div>
                    <div class="job-status-svgDiv">
                        <svg class="job-status-svg" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_7_11018)">
                            <ellipse cx="15.5" cy="13.5" rx="14" ry="13.5" fill="white"/>
                            <path d="M25 13.5C25 18.3177 20.9024 22.5 15.5 22.5C10.0976 22.5 6 18.3177 6 13.5C6 8.68229 10.0976 4.5 15.5 4.5C20.9024 4.5 25 8.68229 25 13.5Z" stroke="#0066FF" stroke-width="9"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_7_11018" x="0.5" y="0" width="30" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="0.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.647059 0 0 0 0 0.72549 0 0 0 0 0.827451 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_11018"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_11018" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                    <div class="job-status__logoDiv">
                        <img src="betterup.jpeg" alt="Duggup Logo" class="job-status__logo"/>
                    </div>
                    <div class="job-status__com-name">BetterUp</div>
                    <div class="job-status__loc">San Francisco Bay Area</div>
                    <div class="job-status__joi">Joined</div>
                    <div class="job-status__date">Sept 2022</div>
                </div>

                <div class="job-status__info">
                    <div class="job-status__container">
                        <div class="job-status__role">VP Engineering</div>
                        <div class="job-status__emp">
                            <div class="job-status__pos">Full-time</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </section>
    <!-- profile-section - end -->

    <!-- footer - start -->
    <footer>

    </footer>
    <!-- footer - end -->
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
</style>