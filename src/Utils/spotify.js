export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "5f519c09f07447d0af2e6502b95cbf37";

const scopes = [
  "user-read-currently-playing",
  "user-read-currently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
