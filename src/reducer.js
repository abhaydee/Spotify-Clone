export const initialState = {
  user: null,
  item: null,
  playing: false,
  playlists: [],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        user: action.user,
      };
    default:
      return state;
  }
};
