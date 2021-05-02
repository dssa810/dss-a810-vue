<template>
  <div class="contents">
    <div class="points-header">
      <div>
        원샷요플레 님, 오늘까지<br>
        18,820 포인트 모았어요!<br>
        오늘 모을 수 있는 포인트가 80 남았어요
      </div>
    </div>
    <h1 class="header-title">Weekly History</h1>
    <div class="div-graph">
    </div>
    <div class="div-history">
      
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      listOfMissions: [],
      listOfPlayerState: [],
      hobbyId: '',
      pointList: '',
      pointSummary: '',
    };
  },
  mounted() {
    this.initComp();
  },
  computed: {
    token() {
      return this.$store.getters.getToken;
    },
    todayMission() {
      return this.$store.getters.getTodayMission;
    },
    fetchedPointList() {
      return this.$store.getters.getPointList;
    },
    fetchedPointSummary() {
      return this.$store.getters.getPointSummary;
    }
  },
  watch: {
    todayMission: {
      deep: true,
      handler() {
        this.listOfMissions = this.todayMission;
      }
    },
    fetchedPointList: {
      deep: true,
      handler() {
        this.pointList = this.fetchedPointList;
      }
    },
    fetchedPointSummary: {
      deep: true,
      handler() {
        this.pointSummary = this.fetchedPointSummary;
      }
    }
  },
  methods: {
    initComp() {
      this.hobbyId = this.$route.params.hobbyId;
      this.fetchPoints();
    },
    async fetchPoints() {
      try {
        // 비즈니스 로직
        const params = {
          token: this.token,
          missionId: this.hobbyId,
        };
        await this.$store.dispatch('FETCH_POINTS', params);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  }
};
</script>

<style scoped>
  .img-header {
    width: 100%;
  }
  .dash-header {
    padding: 20px;
  }
  .div-info {
    padding: 20px;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .div-inner-info {
    height: 100%;
    width: 100%;
    overflow-x: auto;
    padding-right: 20px;
  }
  .ul-info {
    overflow-x: scroll;
    display: Block;
    white-space: nowrap;
  }
  .li-info {
    display: inline-block;
    border: 1px solid red;
    width:250px;
    height:150px;
    border-radius: 15px;
    margin-right: 15px;
    padding: 10px;
  }
  .div-choice {
    border: 1px solid red;
    margin-bottom: 15px;
    padding: 10px;
  }
  .header-title {
    padding-left: 20px;
    font-size:24px;
    font-weight: 700;
    text-align: left;
  }
  .vcc {
    height: 50vh;
    width: 100%;
  }
  .div-mission {
    border: 1px solid red;
    margin-bottom: 15px;
  }
</style>