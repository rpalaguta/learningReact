const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: 'https://per4mmedia.com',
    consumerKey: 'ck_4fd9dc37e0a74ed8e7d82967922e3129d0d2292d',
    consumerSecret: 'cs_4e7e99dc689f144921e3c731a2d05894d597e5f2',
    version: "wc/v3",
    axiosConfig: {
        headers: {}
      }
  
});

export default api;