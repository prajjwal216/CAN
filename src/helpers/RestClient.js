'use strict';
import NetInfo from '@react-native-community/netinfo';
import GLOBALS from '../constants';
const {BASE_URL, BASE_URL_VIDEO, NETWORK_STATUS} = GLOBALS;
import {getToken} from '../utils/common';
import axios from 'axios';
import {useSelector} from 'react-redux';

var instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    // AccessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzljNDUwMWJhZGMyZGQ0YjZmMDM2ZWQiLCJpYXQiOjE2NzE1MjIyNzEsImV4cCI6MTY3NDExNDI3MX0.CeJBtO_6rBGl3PUFGeUz2Gr79FHP5K80oQ6MbMTmK8U',
    Authorization: '',
    // ip: '',
    // deviceToken: '',
    // timeZone: '',
    // deviceDetails: '',
    // 'accesstoken': accessToken(),
  },
});
var form_instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10 * 1000,
  headers: {
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data',
    'Cache-Control': 'no-cache',
    // AccessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzljNDUwMWJhZGMyZGQ0YjZmMDM2ZWQiLCJpYXQiOjE2NzE1MjIyNzEsImV4cCI6MTY3NDExNDI3MX0.CeJBtO_6rBGl3PUFGeUz2Gr79FHP5K80oQ6MbMTmK8U',
    Authorization: '',
    // ip: '',
    // deviceToken: '',
    // timeZone: '',
    // deviceDetails: '',
    // 'accesstoken': accessToken(),
  },
});

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    instance.defaults.headers.Authorization = token;
    form_instance.defaults.headers.Authorization = token;
  } else {
    // Delete auth header
    delete instance.defaults.headers.common.Authorization;
    delete form_instance.defaults.headers.common.Authorization;
  }
};

class restClient {
  static isConnected() {
    return new Promise(function (fulfill, reject) {
      NetInfo.fetch().then(state => {
        fulfill(true);
        if (state.isConnected) {
          fulfill(state.isConnected);
        } else {
          reject(state.isConnected);
        }
      });
    });
  }

  static getCall(url, token) {
    setAuthToken(token);
    let context = this;
    return new Promise(function (fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          instance
            .get(url)
            .then(function (response) {
              if (response && response.status === 200) {
                fulfill(response.data);
              }
            })
            .catch(error => {
              reject({
                err: {errCode: error.response.data.err.msg},
                errCode: error.response.data.status,
              });
            });
        })
        .catch(function (error) {
          reject({
            err: STRING.server_is_not_reachable,
            errCode: 44,
          });
        });
    });
  }

  static async postCall(url, params, token) {
    let context = this;
    return new Promise(function (fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          instance
            .post(url, params)
            .then(function (response) {
              if (response && response.status === 200) {
                fulfill(response.data);
              }
              reject(response);
            })
            .catch(error => {
              reject({
                error: 'Server Error. Try again',
              });
            });
        })
        .catch(function (error) {
          reject({
            error: 'Server Error. Try again',
          });
        });
    });
  }

  static deleteCall(url) {
    setAuthToken(accessToken());
    // instance.setHeader('accesstoken', accessToken());
    let context = this;
    return new Promise(function (fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          instance
            .delete(url)
            .then(function (response) {
              if (response.data.status === 200) {
                fulfill(response);
              }
            })
            .catch(error => {
              reject({
                err: {errCode: error.response.data.err.msg},
                errCode: error.response.data.status,
              });
            });
        })
        .catch(function (error) {
          reject({
            err: STRING.server_is_not_reachable,
            errCode: 404,
          });
        });
    });
  }
  static putCall(url, params, token = '') {
    let context = this;
    return new Promise(function (fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          instance
            .put(url, params)
            .then(function (response) {
              if (response.data && response.status === 200) {
                fulfill(response.data);
              } else {
                reject(response.data);
              }
            })
            .catch(error => {
              reject(error.response.data);
            });
        })
        .catch(function (error) {
          reject({
            errCode: 404,
          });
        });
    });
  }
  static putCallFormdata(url, params, token = '') {
    if (token) {
      setAuthToken(token);
    }

    let context = this;
    return new Promise(function (fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          form_instance
            .put(url, params)
            .then(function (response) {
              if (response.data && response.status === 200) {
                fulfill(response.data);
              } else {
                reject(response.data);
              }
            })
            .catch(error => {
              reject(error.response.data);
            });
        })
        .catch(function (error) {
          reject({
            errCode: 404,
          });
        });
    });
  }
}

export default restClient;
