import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getEmailFromCookie,
  saveAuthToCookie,
  saveEmailToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';
import { fetchMissions, fetchMission } from '@/api/missions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: getEmailFromCookie() || '',
    token: getAuthFromCookie() || '',
    todayMission: [],
    mission: {},
  },
  getters: {
    isLogin(state) {
      return state.email !== '';
    },
    getToken(state) {
      return state.token;
    },
    getTodayMission(state) {
      return state.todayMission;
    },
    getMissoin(state) {
      return state.mission;
    }
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    clearEmail(state) {
      state.email = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
    setTodayMission(state, todayMission) {
      state.todayMission = todayMission;
    },
    setMission(state, mission) {
      state.mission = mission;
    }
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.data);
      commit('setToken', data.data);
      commit('setEmail', userData.email);
      saveAuthToCookie(data.data);
      saveEmailToCookie(userData.email);
      return data;
    },
    async FETCH_MISSIONS({ commit }, params) {
      console.log('FETCH_MISSIONS', params);
      const { data } = await fetchMissions(params);
      console.log(data);
      commit('setTodayMission', data.todayMission);
    },
    async FETCH_MISSION({ commit }, params) {
      const { data } = await fetchMission(params);
      console.log(data);
      commit('setMission', data);
    }
  },
});