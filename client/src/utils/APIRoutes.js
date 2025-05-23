const host = "http://localhost:8080";

const APIRoutes = {
  host,
  login: `${host}/auth/login`,
  clientRegister: `${host}/auth/client-register`,
  brokerRegister: `${host}/auth/broker-register`,
  authCheck: `${host}/auth-check`,
  googleLogin: `${host}/auth/google-login`,
  forgotPassword: `${host}/auth/forgot-password`,
  resetPassword: `${host}/auth/reset-password`,
  logout: `${host}/auth/logout`,

  brokerageFirm: `${host}/broker/brokerage-firm`,
  getBrokerProfile: `${host}/broker/getprofile`,
  updateBrokerProfile: `${host}/broker/updateprofile`,

  getClientProfile: `${host}/client/getprofile`,
  updateClientProfile: `${host}/client/updateprofile`,

  getSignature: `${host}/general/getsignature`,
  uploadProfileImage: `${host}/general/upload-profile-image`,

  getAllBrokers: `${host}/broker/get-all-brokers`,

};

export default APIRoutes;