<template>
  <div class="flex" :class="colorClasses">
    <img :src="icon" :alt="category" class="p-1">
    <span class="p-1 flex-grow font-semibold">{{ category }}</span>
    <span class="p-1 text-black font-bold">{{ score }}</span>
    <span class="p-1 text-grey" > / {{ maxScore }}</span>
  </div>
</template>

<script>

  export default {

    props: {
      icon: String,
      category: String,
      score: Number,
      color: String
    },
    computed: {
      maxScore() {
        return 100;
      },
      colorClasses() {
        if (this.category == 'Reaction')
          return 'bg-primary-red-transparent text-primary-red';
        if (this.category == 'Memory')
          return 'bg-primary-orange-transparent text-primary-orange';
        if (this.category == 'Verbal')
          return 'bg-primary-green-transparent text-primary-green';
        if (this.category == 'Visual')
          return 'bg-primary-blue-transparent text-primary-blue';
        return '';
      }
    }
  }
</script>