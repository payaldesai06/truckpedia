// import PaymentServices from '@/services/PaymentService.js';
import authorizeNet from '@/services/AuthorizeNetService.js';

export default {
    connectionStatus() {
      return authorizeNet.connectionStatus().then(({data}) => {return data});
    },

    connectPayment({commit}, payload){
      return authorizeNet.connectPayment(payload).then(({data}) => {return data});
    },
    getAuthorizeKey(){
      return authorizeNet.getAuthorizeKey().then(({data}) => data); 
    }
}