import { reqTopListArtist } from "@/api";

export default {
  state: () => ({
    artists: [],
  }),
  mutations: {
    setArtists(state, newValue) {
      state.artists = newValue;
    },
  },
  actions: {
    async updateArtists(state) {
      reqTopListArtist().then((res) => {
          state.commit("setArtists", res.data.list.artists);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
