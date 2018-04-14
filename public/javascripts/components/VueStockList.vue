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
          <canvas />
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
    isQuerying() {
      var share = this.$store.state.queryShareCodes;
      return share.length > 0;
    }
  },
  methods: {
    eventHander(ev, data) {
      ev.bindedData = data;
      this.$store.commit("actionController", ev);
    }
  },
  created: function() {},
  beforeUpdate: function() {},
  components: {
  }
};
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

</style>