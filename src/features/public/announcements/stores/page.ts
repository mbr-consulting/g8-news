import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.name)

export const useAnnouncementStore = defineStore('announcement', () => {
  //
})
