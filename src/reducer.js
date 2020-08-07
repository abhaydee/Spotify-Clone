export const initialState = {
  user: null,
  item: null,
  playing: false,
  playlists: [],
  token:
    "BQDO76-BhalwHMZAe0_JOENXBUj8rPfvhAuwze5mUPEB32-pFNSXiwpM7N7M7Fm5SzTT8OrAYjJDg8njOv-q3_aCf5e9gnBs6mK9qw0G6L9LVcf50o2wKWzcVTWjDmF3UhTb61cijri-C5dgApoUm9Wt_qTiSA2jJX5f8XcbWQ9a-5XY",
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
