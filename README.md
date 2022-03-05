# Wetube Reloaded

- / -> Home
- /join -> Join
- /login -> Login
- /search -> Search
- /edit-user -> Edit user
- /delete-user -> Delete user
- /watch-video -> Watch Video
- /edit-video -> Edit Video
- /delete-video -> Delete Video

=> 이것보다 더 좋은 방법은 라우터를 도메인 별로 나누는 것

- [Global Router]
- / -> Home
- /join -> Join
- /login -> Login
- /search -> Search

- [User Router]
- /users/:id -> See user
- /users/logout -> Log out
- /users/edit -> Edit MY Profile
- /users/delete -> Delete MY Profile

- [Video Router]
- /videos/:id -> Watch Video
- /videos/:id/edit -> Edit Video
- /videos/:id/delete -> Delete Vide
- /videos/upload -> Upload Video
