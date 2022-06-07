export const state = () => ({
  posts: {}
})

export const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  },
  // remove(state, { todo }) {
  //   state.list.splice(state.list.indexOf(todo), 1)
  // },
  // toggle(state, todo) {
  //   todo.done = !todo.done
  // }
}
