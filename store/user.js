export const state = () => ({
  userData: {}
})

export const mutations = {
  SAVE_USER_DATA(state, payload) {
    state.userData = payload
  }
}

export const getters = {
  getFullName(state) {
    if (
      !(state.userData.firstName && state.userData.lastName)
    ) {
      return;
    }
    return `${state.userData.firstName} ${state.userData.lastName}`;
  }
}
