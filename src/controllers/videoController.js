const fakeUser = {
    username: "Nicolas",
    loggedIn: true
};

export const trendings = (req, res) => { 
    const videos = [
        {
            title:"해리포터와 마법사의 돌",
            rating: 4,
            comments: 112,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        },
        {
            title:"해리포터와 비밀의 방",
            rating: 4,
            comments: 112,
            createdAt: "2 minutes ago",
            views: 59,
            id: 2,
        },
        {
            title:"해리포터와 아즈카반의 죄수",
            rating: 4,
            comments: 112,
            createdAt: "2 minutes ago",
            views: 59,
            id: 3,
        },

    ];
    return res.render("home", {pageTitle: "Home", fakeUser: fakeUser, videos});
};
export const see = (req, res) => res.render("watch");
export const edit = (req,res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");