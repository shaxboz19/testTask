export const state = () => ({
    modal: false
})
export const mutations = {
    openModal(state, payload) {

        state[payload] = true
        console.log(state)
    },
    closeModal(state, payload) {
        state[payload] = false
    }
}