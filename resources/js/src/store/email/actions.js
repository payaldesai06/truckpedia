import emailService from '@/services/EmailService';

export default {
  sendEmail({ commit }, payload) {
    return emailService.sendEmail(payload);
  },
};
