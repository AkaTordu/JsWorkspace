<template>
  <div>
    <p>XP de Goule: {{ goule.xp }}</p>
    <p>Prime de Goule: {{ goule.prime }}</p>
    <button @click="addGoule">Ajouter Goule</button>
    <p>Total XP: {{ totalXp }}</p>
    <p>Total Prime: {{ totalPrime }}</p>
  </div>
</template>

<script>

import { goule } from '@/assets/Hunt.js';

export default {
  data() {
    return {
      totalXp: 0,
      totalPrime: 0,
      // Autres données nécessaires
    };
  },
  methods: {
    addGoule() {
      this.totalXp += parseInt(goule.xp);
      this.totalPrime += parseInt(goule.prime);
      // Autres logiques
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
