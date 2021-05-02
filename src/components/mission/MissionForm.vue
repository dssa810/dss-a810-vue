<template>
  <div class="contents">
    <div class="dash-header">
      <p>좋은 아침이에요.</p>
      <p>전창민 님</p>
    </div>
    <div class="div-info">
      <div class="div-inner-info">
        <ul class="ul-info">
          <li
            class="li-info"
            v-for="info in listOfInfo"
            :key="info.id"
          >
            <div class="li-card">
              <p>{{ info.title }}</p>
              <p>{{ info.body.content }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <h1 class="header-title">Daily Mission</h1>
    <div class="div-info">
      <div class="div-inner-info">
        <ul class="ul-info">
          <li
            class="li-info"
            v-for="mission in listOfMission"
            :key="mission.id"
          >
            <a href="javascript:;" @click="toMissionDetail(mission.id)">
              <div class="li-card">
                <p>{{ mission.title }}</p>
                <p>{{ mission.content }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <h1 class="header-title">Today's Choice</h1>
    <div class="div-info">
      <div class="div-inner-info">
        <ul>
          <li
            v-for="info in listOfChoice"
            :key="info.id"
          >
            <div class="div-choice">
              <p>{{ info.title }}</p>
              <p>{{ info.content }}</p>
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
      listOfInfo: [
        {
          id: 0,
          title : '오늘까지',
          body: {
            backgroundColor: 'yellow',
            contentType : 'point',
            content : '18820'
          }
        },
        {
          id: 1,
          title : '오늘의 미션',
          body: {
            backgroundColor: 'white',
            conatentType : 'mission',
            content : 63
          }
        },
      ],
      listOfMission: [
        {
          id : 0,
          img : '',
          content : 78
        },
        {
          id : 1,
          img : '',
          content : 78
        },
        {
          id : 2,
          img : '',
          content : 78
        }
      ],
      listOfChoice: [
        {
          img : '',
          content : 78
        },
        {
          img : '',
          content : 78
        },
        {
          img : '',
          content : 78
        }
      ],
      hideBackdrop: true,
      sideCardOpacity: 0.5,
      // headerOpt: { isVisible: true, backgroundColor: "#563d7c" },
      bodyOpt: { backgroundColor: "" },
      footerOpt: { isVisible: false, backgroundColor: "green" }
    };
  },
  computed: {
    token() {
      return this.$store.getters.getToken;
    }
  },
  methods: {
    async toMissionDetail(missionId) {
      this.$router.push('/mission/detail');
      try {
        const header = {
          'x-access-token': this.token
        };
        const params = {
          id: missionId,
        };
        options = {
          hea
        }
        await this.$store.dispatch('FETCH_MISSION', params);
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
      }
    }
  }
};
</script>

<style scoped>
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
</style>