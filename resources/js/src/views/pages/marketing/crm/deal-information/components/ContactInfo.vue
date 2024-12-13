<template>
  <div class="info-box contact-card">
    <h5>Contact</h5>
    <template v-if="getDealContacts.length">
      <div class="flex items-center flex-wrap" v-for="contact in getDealContacts">
        <vs-avatar
          circle
          :text="getNameLetters(contact)"
          size="40px"
          class="avatar"
        />
        <div class="description ml-2">
          <h6>{{ contact.firstName }} {{ contact.lastName }}</h6>
          <div class="flex flex-col">
            <small>{{ contact.email }}</small>
          <small>{{ contact.phone }}</small>
          </div>
        </div>
        <vs-divider class="mt-4"/>
      </div>
    </template>
    <template v-else>
      <div class="mt-16 mb-12 text-center">
        <h5 class="font-bold">No Contacts</h5>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'contact-info',
  computed: {
    ...mapGetters('marketing', ['getDealContacts']),
    getNameLetters() {
      return ({ firstName, lastName }) => {
        return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.info-box.contact-card {
    border-radius: 4px;
    background: var(--White, #FFFEFE);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08), 0px 1px 4px 0px rgba(0, 0, 0, 0.04);
    max-height: 200px;
    overflow: auto;
  h5 {
    padding-bottom: 15px;
    color: var(--Black-Black-Base, #18181A);
    font-size: 18px;
    font-weight: 600;
  }
  .avatar span {
    color: #000 !important;
    color: #ffffff !important;
    font-size: 21px;
  }
  .con-vs-avatar {
    background: rgba(var(--vs-primary), 1) !important;
    font-size: 24px;
    font-weight: 400;
  }
  .description{
    h6{
      color: var(--Black-Black-Base, #18181A);
      font-size: 16px;
      font-weight: 400;
    }
    small{
      color: var(--Black-Black-300, #71717A);
      font-size: 14px;
      font-weight: 400;
    }
  }
}

</style>
