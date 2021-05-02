<template>
  <div class="contents">
    <div class="missions-header">
      <img class="img-header" src="@/assets/img/mission-header.jpg"/>
    </div>
    <h1 class="header-title">Today's Mission List</h1>
    <!-- <button @click="fetchMissions">ttt</button> -->
    <div class="div-info">
      <div class="div-inner-info">
        <ul>
          <li
            v-for="mission in listOfMissions"
            :key="mission.id"
          >
            <div class="div-mission">
              <div>
                <p>{{ mission.mission_title }}</p>
                <p style="font-size:10px">{{ mission.mission_description }}</p>
              </div>
              <div>
                {{ mission.point}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <h1 class="header-title">Player State</h1>
    <div class="div-info">
      <div class="div-inner-info">
        <ul>
          <li
            v-for="playerState in listOfPlayerState"
            :key="playerState.id"
          >
            <div class="div-choice">
              <p>{{ playerState.title }}</p>
              <p>{{ playerState.content }}</p>
            </div>
          </li>
        </ul>
      </div>
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
    }
  },
  watch: {
    todayMission: {
      deep: true,
      handler() {
        this.listOfMissions = this.todayMission;
      }
    }
  },
  methods: {
    initComp() {
      this.hobbyId = this.$route.params.hobbyId;
      this.fetchMissions();
    },
    async fetchMissions() {
      try {
        // 비즈니스 로직
        const params = {
          token: this.token,
          missionId: this.hobbyId,
        };
        await this.$store.dispatch('FETCH_MISSIONS', params);
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