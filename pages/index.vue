<template>
  <div class="page">
    <Header />
    <Incompleted />
    <Completed />
    
  </div>
</template>
<script>
import Completed from '@/components/Completed/Completed.vue'
import Header from '@/components/Header/Header.vue'
import InCompleted from '@/components/Incompleted/Incompleted.vue'
export default {
  name: 'App',
  components: {
    Completed,
    Header,
    InCompleted
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style scoped>
.page {
  margin-bottom: 76px;
}
</style>
