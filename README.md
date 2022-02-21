# Wetube Reloaded

/ -> Home
/join -> Join
/login -> Login
/search -> Search
/edit-user -> Edit user
/delete-user -> Delete user
/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

=> 이것보다 더 좋은 방법은 라우터를 도메인 별로 나누는 것
[Global Router]
/ -> Home
/join -> Join
/login -> Login
/search -> Search

[User Router]
/users/edit -> Edit user
/users/delete -> Delete user

[Video Router]
/videos/watch -> Watch Video
/videos/edit -> Edit Video
/videos/delete -> Delete Video
