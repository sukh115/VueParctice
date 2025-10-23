<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 영역
        <P @click.self="clickP">
          P 영역
          <span @click="clickSpan"> SPAN 영역 </span>
        </P>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('DIV 클릭됨')
    }
    const clickP = () => {
      console.log('P 클릭됨')
    }
    const clickSpan = () => {
      console.log('SPAN 클릭됨')
      alert('좋아요')
    }
    return {
      clickDiv,
      clickP,
      clickSpan,
    }
  },
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}
#modifiers div {
  background-color: #ccc;
}
#modifiers p {
  background-color: #999;
}
#modifiers span {
  background-color: #666;
  display: block;
}
</style>
