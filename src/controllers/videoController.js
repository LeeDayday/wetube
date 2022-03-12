import res from "express/lib/response";

let videos = [
  {
    title: "해리포터와 마법사의 돌",
    rating: 4,
    comments: 112,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "해리포터와 비밀의 방",
    rating: 4,
    comments: 112,
    createdAt: "2 minutes ago",
    views: 1,
    id: 2,
  },
  {
    title: "해리포터와 아즈카반의 죄수",
    rating: 4,
    comments: 112,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];
export const trendings = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};

export const postUpload = (req, res) => {
  const newVideo = {
    title: req.body.title,
    rating: 0,
    comments: 12,
    createdAt: "2 minutes ago",
    views: 50,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
