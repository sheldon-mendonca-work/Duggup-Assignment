<script lang="ts">
  import "./main.css";

  import userProfilePic from "$lib/assets/c135d62b39e8cc0f1e2dfce61ea32106.jpeg";
  import duggupHeaderLogo from "$lib/assets/duggup.png";
  import duggupHeaderName from "$lib/assets/duggup-name.png";
  import steveJobsPhoto from "$lib/assets/steve-jobs.jpeg";
  import samAltmanPhoto from "$lib/assets/sam-altman.jpeg";
  import startUpPhoto from "$lib/assets/startup.jpeg";
  import regretPhoto from "$lib/assets/regret.png";
  import betterUpPhoto from "$lib/assets/betterup.jpeg";

  import HomeSVG from "$lib/components/icons/home.svelte";
  import ExploreSVG from "$lib/components/icons/explore.svelte";
  import LearnSVG from "$lib/components/icons/learn.svelte";
  import PlusSVG from "$lib/components/icons/plus.svelte";
  import ChevronDownSVG from "$lib/components/icons/chevron-down.svelte";
  import ExternSVG from "$lib/components/icons/extern.svelte";
  import DotsSVG from "$lib/components/icons/dots.svelte";
  import Ellipse5SVG from "$lib/components/icons/Ellipse 5.svelte";
  import Ellipse6SVG from "$lib/components/icons/Ellipse 6.svelte";

  const user = {
    name: "Krishna Kiran",
    bio: "Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.",
    photo: userProfilePic,
    companyName: "Duggup",
    companyImage: duggupHeaderLogo,
    jobPosition: "Co-Founder and CEO"
  }
    
  let isFollowing = false;

    type postType = {
        type: string;
        image: string;
        postTitle: string;
        postBody: string;
        postSummary: string;
        date: string;
    };

    type jobType = {
        type: string;
        companyName: string;
        image: string;
        companyLocation: string;
        jobName: string;
        position: string;
        location: string;
        date: string;
    };

    type postsType = {
        [key: string] : postType[] | jobType;
    }

  const posts: postsType = {
    "post_Dec_23" : [{
      type: "post",
      image: steveJobsPhoto,
      postTitle: "",
      postBody: "",
      postSummary:
        "No amount of technology can convert a bad story into a good story.",
      date: "Dec 2023",
    },
    {
      type: "post",
      image: samAltmanPhoto,
      postTitle: "",
      postBody: "",
      postSummary:
        "Most people don't have original ideas. Here is how Sam Altman pushes himself.",
      date: "Dec 2023",
    }],
    "job_Nov_23": {
      type: "job",
      companyName: "Duggup",
      image: duggupHeaderLogo,
      companyLocation: "San Francisco Bay Area",
      jobName: "Co-Founder and CEO",
      position: "Full-time",
      location: "Remote",
      date: "Nov 2023",
    },
    "post_Oct_23" : [{
      type: "post",
      image: startUpPhoto,
      postTitle: "",
      postBody: "",
      postSummary:
        "Startup Lesson I am reflecting. Don't build for the 'average person'.",
      date: "Oct 2023",
    },
    {
      type: "post",
      image: regretPhoto,
      postTitle: "",
      postBody: "",
      postSummary: "Your biggest regrets at 80 will be acts of omission.",
      date: "Dec 2023",
    }],
    "job_Sept_23": {
      type: "job",
      companyName: "BetterUp",
      image: betterUpPhoto,
      companyLocation: "San Francisco Bay Area",
      jobName: "VP Engineering",
      position: "Full-time",
      location: "",
      date: "Sept 2022",
    },
};

const followClickHandler = ()=>{
  isFollowing = !isFollowing;
}
</script>

<main class="main">
  <!-- header - start -->
  <header class="header">
    <div class="header-left">
      <div class="header-logoDiv">
        <img src={duggupHeaderLogo} alt="Duggup-logo" class="header-logo" />
      </div>
      <div class="header-nameDiv">
        <img src={duggupHeaderName} alt="Duggup" class="header-name" />
      </div>
    </div>

    <div class="header-right">
      <div class="access">
        <nav class="nav-bar">
          <a class="nav-link" href="null">
            <HomeSVG className="nav-link__img" />
            <div class="nav-link__name">Home</div>
          </a>
          <a class="nav-link" href="null">
            <ExploreSVG className="nav-link__img" />
            <div class="nav-link__name">Explore</div>
          </a>
          <a class="nav-link" href="null">
            <LearnSVG className="nav-link__img" />
            <div class="nav-link__name">Learn</div>
          </a>
        </nav>

        <button class="btn btn-1">
          <PlusSVG className="nav-link__img" />
          <div class="btn-1__name">Post</div>
        </button>
      </div>

      <div class="user-profile-sm">
        <div class="user-profile-sm__imgDiv">
          <img
            src={user.photo}
            alt={user.name}
            class="user-profile-sm__img"
          />
        </div>
        <div class="user-profile-sm__name">{user.name}</div>
        <div class="user-proile-sm__down">
          <ChevronDownSVG className="user-profile-sm__svg"/>
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
          <img src={userProfilePic} alt={user.name} class="user-info-abt__img" />
        </div>
        <div class="user-info-abt__name">{user.name}</div>
      </div>

      <div class="user-info-bio">
        <div class="user-info-sum">
          <div class="user-info-bio__bio">{user.bio}</div>
          <div class="user-info-curr">
            <div class="user-info-logoDiv">
              <img
                src={user.companyImage}
                alt={user.companyName}
                class="user-info-logo"
              />
            </div>
            <div class="user-info-comName">{user.companyName}</div>
            <div class="user-info-comPos">{user.jobPosition}</div>
          </div>
        </div>

        <div class="user-links">
          <button class="btn btn-1" on:click={followClickHandler}>
            <div>{isFollowing ? "Followed" : "Follow"}</div>
          </button>
          <div class="user-more">
            <a href="null" class="user-webDiv">
              <div class="user-web-link">My website</div>
              <div class="user-web-svg">
                <ExternSVG className="nav-link__img" />
              </div>
            </a>
            <a href="null" class="user-dots">
              <DotsSVG className="user-dots_svg" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline">
        {#each Object.keys(posts) as postArray}
            {#if postArray.split('_')[0] === "post"}
                <div class="stories__desc">
                    <div class="stories-svg-div">
                      <Ellipse5SVG className="stories-svg" />
                    </div>
                    <div class="stories__date">{postArray.split("_")[1]} {postArray.split("_")[2]}</div>
                </div>

                <div class="stories__info">
                {#each posts[postArray] as post}
                    <div class="stories-card">
                        <div class="stories-img-div">
                        <img
                            src={post.image}
                            alt="Steve Jobs"
                            class="stories-img"
                        />
                        </div>
                        <div class="stories-summary">
                        {post.postSummary}
                        </div>
                    </div>
                {/each}
                </div>
            {:else}
            <div class="job-status__desc">
                <div class="job-status-chevronDiv">
                  <ChevronDownSVG className="job-status-chevron" />
                </div>
                <div class="job-status-svgDiv">
                  <Ellipse6SVG className="job-status-svg" />
                </div>
                <div class="job-status__logoDiv">
                  <img
                    src={posts[postArray].image}
                    alt="{posts[postArray].companyName} Logo"
                    class="job-status__logo"
                  />
                </div>
                <div class="job-status__com-name">{posts[postArray].companyName}</div>
                <div class="job-status__loc">{posts[postArray].companyLocation}</div>
                <div class="job-status__joi">Joined</div>
                <div class="job-status__date">{posts[postArray].date}</div>
              </div>
      
              <div class="job-status__info">
                <div class="job-status__container">
                  <div class="job-status__role">{posts[postArray].jobName}</div>
                  <div class="job-status__emp">
                    <div class="job-status__pos">{posts[postArray].position}</div>
                    {#if posts[postArray].location.length}
                        <div class="job-status__status">{posts[postArray].location}</div>
                    {/if}
                  </div>
                </div>
              </div>
            {/if}
            
        {/each}
    </section>
  </section>
  <!-- profile-section - end -->

  <!-- footer - start -->
  <footer></footer>
  <!-- footer - end -->
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
</style>
