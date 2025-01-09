export const state = () => ({
  // กำหนด state เริ่มต้นของคุณที่นี่
  user: null,
  isAuthenticated: false,
})

export const mutations = {
  // กำหนด mutations ของคุณที่นี่
  setUser(state, user) {
    state.user = user;
    state.isAuthenticated = !!user;
  },
}

export const actions = {
  // กำหนด actions ของคุณที่นี่
  async nuxtServerInit({ commit }, { req }) {
    // ตัวอย่างการตั้งค่า user จาก request
    if (req.session && req.session.user) {
      commit('setUser', req.session.user);
    }
  },
}
