<template>
  <div class="flex flex-col h-full lg:flex-row lg:h-1/2 lg:max-w-2xl lg:shadow-xl lg:rounded-3xl">
    <div id="leftSide" class="flex flex-col items-center bg-gradient-to-b from-gradient-start to-gradient-end  rounded-b-3xl p-4 text-center lg:rounded-3xl lg:w-1/2">
      <h1 class="my-3 text-lavender font-semibold text-lg">Your Result</h1>
      <div class="bg-gradient-to-b from-circle-start to-circle-end w-36 h-36 p-4 rounded-full lg:w-40 lg:h-40 lg:p-8 lg:my-6">
        <div class="text-white text-6xl font-bold py-1 mt-1">{{ totalScore }}</div>
        <div class="text-lavender font-semibold">of {{ maxScore }}</div>
      </div>
      <div class="text-white font-bold text-2xl py-4">Great</div>
      <div class="text-lavender text-base mx-10 mb-6 font-medium">You scored higher than 65% of the people who have taken these tests.</div>
    </div>
    <div id="rightSide" class="flex flex-col flex-grow px-8 my-4 ">
      <h1 class="text-lg font-bold mb-2">Summary</h1>
      <div class="flex-grow">        
        <SkillRow v-for="skill in skills" :icon="skill.icon" :category="skill.category" :score="skill.score" class="px-3 py-2.5 my-4 rounded-xl "/> 
      </div>
      <button class="text-white font-bold text-lg hover:bg-gradient-to-b hover:from-gradient-start hover:to-gradient-end bg-button-normal mb-4 p-3 rounded-full ">Continue</button>
    </div>
  </div>
</template>

<script>
import SkillRow from './SkillRow.vue';
import data from '../assets/data.json';

export default {
  components: {
    SkillRow
  },
  data() {
    return {
      skills: data
    }
  },
  computed: {
    totalScore() {
      return Math.round(this.skills.reduce((sum, e) => sum + e.score, 0) / this.skills.length);
    },
    maxScore() {
      return 100;
    }
  }
}
</script>