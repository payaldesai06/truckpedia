<script>
import { mapGetters } from 'vuex';
import SuperAdminDashboard from './SuperAdmin/SuperAdminDashboard';
import AdminDashboard from './Admin/AdminDashboard';
import EmptyDashboard from './EmptyDashboard';
import WarehouseOperator from './WarehouseOperator/WarehouseOperator';
import Maintenance from './Maintenance/Maintenance';

export default {
  name: 'Dashboard',

  data() {
    return {
      defaultDashboard: EmptyDashboard,
      componentList: {
        admin: AdminDashboard,
        super_admin: SuperAdminDashboard,
        warehouse_operator: WarehouseOperator,
        maintenance: Maintenance,
      },
    };
  },

  created() {
    if (this.isUserBrokerOrShipper) {
      this.$router.push('/dispatch');
    }
  },
  computed: {
    ...mapGetters('auth', ['userRole', 'isUserBrokerOrShipper']),

    dashboard() {
      try {
        if (!this.componentList.hasOwnProperty(this.userRole)) {
          return this.defaultDashboard;
        }
        return this.componentList[this.userRole];
      } catch (error) {
        return this.defaultDashboard;
      }
    },
  },

  render(createElement) {
    return createElement(this.dashboard);
  },
};
</script>
