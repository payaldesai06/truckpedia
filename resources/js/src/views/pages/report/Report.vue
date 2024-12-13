<template>
  <vx-card class="space-y-6">
    <div class="flex items-baseline gap-10 mb-10">
      <h4>Reports</h4>
      <vs-chip
        v-if="showCustomReports"
        class="cursor-pointer mx-2 text-sm min-w-75"
        :color="isActive ? 'primary' : ''"
        @click.native="toggleCustomReports"
      >
        Custom Reports
      </vs-chip>
    </div>
    <template v-if="isActive">
      <custom-reports @toggleReports="isActive = false" />
    </template>
    <template v-else>
      <div class="vx-row" v-for="(report, index) in reports" :key="index">
        <div class="vx-col w-full">
          <div class="pb-6">
            <h2 class="text-2xl opacity-75">{{ report.title }}</h2>
          </div>
        </div>

        <div class="vx-col w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ReportCard
            v-for="reportService in report.services"
            :key="reportService.uuid"
            :report="reportService"
          />
        </div>

        <div class="vx-col w-full" v-if="reports.length - 1 > index">
          <vs-divider />
        </div>
      </div>
    </template>
  </vx-card>
</template>

<script>
import { mapGetters } from "vuex";
import config from "@/config/constants";
import { getUniqueIdV4 } from "@/helpers/helper";
import ReportCard from "./components/ReportCard";
import imageMoney from "@assets/images/reports/money.png";
import imageTotalSales from "@assets/images/reports/total-sales.png";
import imageAddList from "@assets/images/reports/add-list.png";
import imageAttendanceMark from "@assets/images/reports/attendance-mark.png";
import imageCarService from "@assets/images/reports/car-service.png";
import imageDriverLicenseCard from "@assets/images/reports/driver-license-card.png";
// import imageGasStation from '@assets/images/reports/gas-station.png'
import imagePersonalGrowth from "@assets/images/reports/personal-growth.png";
import imageTrailer from "@assets/images/reports/trailer.png";
import imageTruck from "@assets/images/reports/truck.png";
import commission from "@assets/images/reports/dispatcher-commission.png";
import imageWorldWide from "@assets/images/reports/worldwide.png";
import CustomReports from './CustomReports.vue';

export default {
  name: "Report",

  components: {
    ReportCard,
    CustomReports,
  },

  computed: {
    ...mapGetters("auth", ["userRole"]),
    showCustomReports() {
      return config.customReportsEnabled.includes(
        this.user.admin_company_detail_id
      );
    },
  },

  data() {
    return {
      reports: [],
      isActive: false,
    };
  },

  created() {
    this.reports =
      this.userRole == config.roles.admin
        ? this.getAdminReports()
        : this.getDispatcherReports();
  },

  methods: {
    getAdminReports() {
      return [
        {
          title: "Account Reports",
          services: [
            {
              uuid: getUniqueIdV4(),
              image: {
                src: imageTotalSales,
              },
              route: { name: "report-dispatcher-sales-revenue" },
              name: "Revenue by Dispatcher Sales Report",
            },
            {
              uuid: getUniqueIdV4(),
              image: {
                src: commission,
              },
              route: { name: "report-dispatcher-commission-revenue" },
              name: "Revenue by Dispatcher Commission Report",
            },
            {
              uuid: getUniqueIdV4(),
              image: {
                src: imageWorldWide,
              },
              route: { name: "ifta-report" },
              name: "IFTA Report",
            },
          ],
        },
        {
          title: "Customer Reports",
          services: [
            {
              uuid: getUniqueIdV4(),
              image: {
                src: imagePersonalGrowth,
              },
              route: { name: "report-customer-revenue" },
              name: "Revenue by Customer Report",
            },
          ],
        },
        {
          title: "Driver Reports",
          services: [
            /*{
              uuid: getUniqueIdV4(),
              image: {
                src: imageDriverLicenseCard,
              },
              route: { name: "report-driver-payment-report" },
              name: "Driver Payment Report",
            },*/
            {
              uuid: getUniqueIdV4(),
              image: {
                src: imageMoney,
              },
              route: { name: "load-driver-report" },
              name: "Driver Report",
            } /*,
            {
              uuid: getUniqueIdV4(),
              image: {
                src: imageMoney
              },
              route: {name: 'report-trip-revenue-report'},
              name: 'Trip Revenue Report'
            }*/,
          ],
        },
        {
          title: "Equipment Reports",
          services: [
            /*{
              uuid: getUniqueIdV4(),
              image: {
                src: imageTruck,
              },
              route: { name: "report-truck-report" },
              name: "Truck Report",
            },
            {
              uuid: getUniqueIdV4(),
              image: {
                src: imageTrailer,
              },
              route: { name: "report-trailer-report" },
              name: "Trailer Report",
            },
            {
              uuid: getUniqueIdV4(),
              image: {
                src: imageAddList,
              },
              route: { name: "report-equipment-list-report" },
              name: "Equipment List Report",
            },*/
            {
              uuid: getUniqueIdV4(),
              image: {
                src: imageAttendanceMark,
              },
              route: { name: "report-drop-trailers-report" },
              name: "Drop Trailer Report",
            },
            /*{
              uuid: getUniqueIdV4(),
              image: {
                src: imageCarService,
              },
              route: { name: "report-equipment-maintenance-report" },
              name: "Equipment Maintenance Report",
            },*/
          ],
        },
      ];
    },

    getDispatcherReports() {
      return [
        {
          title: "Equipment Reports",
          services: [
            {
              uuid: getUniqueIdV4(),
              image: {
                src: imageAttendanceMark,
              },
              route: { name: "report-drop-trailers-report" },
              name: "Drop Trailer Report",
            },
          ],
        },
      ];
    },

    toggleCustomReports() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped></style>
