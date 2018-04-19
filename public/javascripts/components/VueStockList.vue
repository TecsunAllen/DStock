<template>
    <div class="shareApp">
        <div class="stockList">
            <ul class="list-group">
                <li data-action="stockDetail" v-bind:key="item" v-for="item in stockList" @dragstart="eventHander($event,item)">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="stockBody">
          <span v-show="false">{{stockData.stock }}</span>
          <canvas ref="canvas" />
        </div>
    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    stockList(){
      return this.$store.state.stockList;
    },
    stockData() {
      return this.$store.state.stockData;
    }
  },
  methods: {
    eventHander(ev, data) {
      ev.bindedData = data;
      this.$store.commit("actionController", ev);
    }
  },
  created: function() {
    
  },
  mounted:function(){
    resizeCanvas(this.$refs.canvas);
  },
  beforeUpdate: function() {
    resizeCanvas(this.$refs.canvas);
  },
  components: {
  }
};


function resizeCanvas(canvas){
    var parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;  
}
</script>




<style>
* {
  margin: 0px;
  padding: 0px;
}
body {
  background-color: #ecf0f1;
  font-family: DIN, "Microsoft YaHei", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
}
.shareApp{
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  right:0;
  display: flex;
}
.shareApp .stockList{
  flex:1;
}
.shareApp .stockBody{
  flex:6;
}

</style>