import myKey from "./KhaltiKey";
import axios from "axios";
let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: "49828588",
  productName: "Pampered Pets",
  productUrl: "http://localhost:3000",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      // axios.defaults.xsrfCookieName = "csrftoken";
      // axios.defaults.xsrfHeaderName = "X-CSRFToken";

      axios
        .post(`http://127.0.0.1:8000/api/verify-payment/`, payload)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
