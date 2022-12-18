<template>
  <header id="header">
    <div class="container-fluid">
      <div class="l">
        <NuxtLink to="/" @click='menuOpen = false' :class="{ white: !black }">Public Interface</NuxtLink>
      </div>
      <div class="c">
        <div class="anchor"><span :class="{ white: !black }">Search function here</span></div>
      </div>
      <div class="r">
        <a href="#" class="toggle" @click="menuOpen = !menuOpen" :class="{ white: !black }"><span v-if="!menuOpen">Menu</span><span v-else>Close</span></a>
      </div>
    </div>
  </header>
</template>
<script setup>
  import {ref, watch} from "vue"
  const menuOpen = useState('menuOpen', () => false)
  const black = useState('black', () => true)
  const wasBlack = useState('wasBlack', () => true)
  const isOpen = ref(menuOpen)
  
  watch(menuOpen, ()=>{
    if(menuOpen.value) {
      wasBlack.value = black.value
      black.value = false
    } else {
      console.log('menu is closed')
      black.value = wasBlack.value
      // console.log(black.value)
    }
    // console.log('menu toggled')
    // wasBlack.value = black
  })

  // const question = ref('')
  // const answer = ref('Questions usually contain a question mark. ;-)')

  // // watch works directly on a ref
  // watch(question, async (newQuestion, oldQuestion) => {
  //   if (newQuestion.indexOf('?') > -1) {
  //     answer.value = 'Thinking...'
  //     try {
  //       const res = await fetch('https://yesno.wtf/api')
  //       answer.value = (await res.json()).answer
  //     } catch (error) {
  //       answer.value = 'Error! Could not reach the API. ' + error
  //     }
  //   }
  // })
  // if nav is open, black = false
  // if nav is closed, black is wasBlack... 

</script>
<style>

#header {
  position: fixed;
  top: 0;
  width: 100%;
  display: block;
  z-index: 900;
}

.container-fluid {
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
}

.toggle {
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.l {
  flex: 1; /* shorthand for: flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.c {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.r {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#header .white {
  color: #FFF;
}

</style>