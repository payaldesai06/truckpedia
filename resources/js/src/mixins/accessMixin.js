import {mapGetters} from 'vuex';
import config from "@/config/constants";

export default {
  computed: {
    ...mapGetters('auth', ['userRole', 'user']),
    showBillToCodeAsJobCode() {
      return (
        this.user &&
        this.user.admin_company_details &&
        this.user.admin_company_details.admin_company_detail_id &&
        config.showBillToCodeAsJobCode.includes(
          Number(this.user.admin_company_details.admin_company_detail_id)
        )
      );
    },
  },

  methods: {
    canAccess:
        function(role) {
          if (typeof role === 'string') {
            return role === this.userRole;
          } else if (typeof role === 'object') {
            for (let i = 0; i < role.length; i++) {
              if (role[i] === this.userRole) {
                return true;
              }
            }
          }
          return false;
        }
  }
}