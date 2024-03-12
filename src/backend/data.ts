type contentType = {
    image: string; 
    content: string;
    date: string;
};

type jobType = {
    position: string;
    jobType: "Full-time" | "Part-time" | "Internship";
    location: string;
    date: string;
    image: string;
    companyName: string;
};

type userDataType = {
    _id: number;
    name: string;
    bio: string;
    posts ?: [{
        content: [contentType]
    }],
    jobs ?: [{
        job: jobType
    }];
    isFollowing: boolean;
};

const userData: userDataType = {
    _id: 1,
    name: "Krishna Kiran",
    bio: "Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.",
    isFollowing: false
}