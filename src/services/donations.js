import axios from 'axios';

const baseURL = 'http://127.0.0.1:9000';

const verifyDonation = (tnxID) => {
  return axios.get(`${baseURL}/donations/verify-donation/id/${tnxID}`)
}

const getDonationsCount = () => {
  return axios.get(`${baseURL}/donations`)
}

const getDonationsList = (skip) => {
  return axios.get(`${baseURL}/donations/list`, skip)
}

export default {
  verifyDonation,
  getDonationsCount,
  getDonationsList
}