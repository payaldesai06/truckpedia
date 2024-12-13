import { getUniqueIdV4 } from '@/helpers/helper';
import config from '@/config/constants.js';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['userCustomization', 'user']),

    defaultColumns() {
      if (this.showCustomFieldLabels) {
        const customLabels = config.safetyModule.customFormLabels;

        return this.defaultCols.map((col) => {
          if (customLabels[col.field]) {
            if (col.filter) {
              col.filter.placeholder = customLabels[col.field];
            }

            return {
              ...col,
              label: customLabels[col.field],
            };
          }
          return col;
        });
      }

      return this.defaultCols;
    },
    currentUserCustomizations() {
      const showColumns = ((this.userCustomization || {}).safetyIncidents || {})
        .showColumns;

      return showColumns && showColumns.length
        ? showColumns.reduce((acc, item) => {
            acc[item.c] = true;
            return acc;
          }, {})
        : {};
    },
    showCustomFieldLabels() {
      if (this.user && this.user.admin_company_details) {
        return config.safetyCustomFieldLabels.some(
          (item) =>
            item === this.user.admin_company_details.admin_company_detail_id
        );
      }
    },
     incidentColumns() {
      if (!Object.keys(this.currentUserCustomizations).length) {
        if (this.defaultKey) {
          this.defaultKey = getUniqueIdV4();
        }
        return this.defaultColumns.map((col) => {
          return {
            ...col,
            width: null,
          };
        });
      }

      const visibleColumns = Object.keys(this.currentUserCustomizations).filter(
        (key) => this.currentUserCustomizations[key]
      );

      if (this.defaultKey) {
        this.defaultKey = getUniqueIdV4();
      }

      const showColumns = ((this.userCustomization || {}).safetyIncidents || {})
        .showColumns;

      return this.defaultColumns
        .filter((col) => visibleColumns.includes(col.colId))
        .sort((a, b) => {
          return (
            visibleColumns.indexOf(a.colId) - visibleColumns.indexOf(b.colId)
          );
        })
        .map((col) => {
          const width =
            (showColumns || []).find((item) => item.c === col.colId).w || null;

          return {
            ...col,
            width,
          };
        });
    },
  },
  methods: {
    async updateIncidentShowColumns(column) {
      try {
        if (!column) return;

        const showColumns = (this.localVisibleCols || []).length
          ? [...(this.localVisibleCols || [])]
          : ((this.userCustomization || {}).safetyIncidents || {}).showColumns;

        let payload = {};

        if (showColumns && showColumns.length) {
          payload = {
            showColumns: [
              ...(showColumns || []).filter((item) => item.c !== column.key),
            ],
          };
        } else {
          payload = {
            showColumns: [
              ...(column.allColumns || [])
                .filter((item) => item.key !== column.key)
                .map((item) => ({ c: item.key })),
            ],
          };
        }

        if (column.val) {
          payload.showColumns.push({
            c: column.key,
          });
        }

        this.localVisibleCols = [...payload.showColumns];

        const { status } = await this.$store.dispatch(
          'incidents/setUserCustomization',
          payload
        );

        if (status === 200) {
          this.$store.commit('auth/setUserCustomization', {
            ...this.userCustomization,
            safetyIncidents: {
              ...this.userCustomization.safetyIncidents,
              showColumns: payload.showColumns,
            },
          });
        }
      } catch (error) {
        // Remove from local visible columns if error occurs
        this.localVisibleCols = (this.localVisibleCols || []).filter(
          (item) => item.c !== column.key
        );

        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
    async onColReorder({ dragIndex, dropIndex }) {
      try {
        let showColumns = [];
        if (Object.keys(this.currentUserCustomizations).length) {
          showColumns = [
            ...((this.userCustomization || {}).safetyIncidents || {})
              .showColumns,
          ];
          const movedItem = showColumns.splice(dragIndex - 1, 1)[0];
          showColumns.splice(dropIndex - 1, 0, movedItem);
        } else {
          showColumns = [...this.defaultCols];
          const movedItem = showColumns.splice(dragIndex - 1, 1)[0];
          showColumns.splice(dropIndex - 1, 0, movedItem);
          showColumns = showColumns.map((item) => ({ c: item.colId }));
        }

        const { status } = await this.$store.dispatch(
          'incidents/setUserCustomization',
          {
            showColumns,
          }
        );

        if (status === 200) {
          this.$store.commit('auth/setUserCustomization', {
            ...this.userCustomization,
            safetyIncidents: {
              ...this.userCustomization.safetyIncidents,
              showColumns,
            },
          });
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
    redirectToAddIncident() {
      this.$router
        .push({ name: 'CreateSafety', query: { tab: Number(this.tabId) } })
        .catch(() => true);
    },
    redirectToEditIncident(id) {
      this.$router
        .push({
          name: 'UpdateSafety',
          params: { id },
          query: { tab: Number(this.tabId) },
        })
        .catch(() => true);
    },
  },
};
