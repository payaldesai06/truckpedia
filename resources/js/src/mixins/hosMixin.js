export default {
  methods: {
    calculatePercentageBasedOnSeconds(seconds, type) {
      const cycleLength = {
        breakInS: 28800, // 8 hours
        driveInS: 39600, // 11 hours
        shiftInS: 50400, // 14 hours
        cycleInS: 252000, // 70 hours
      };

      if (seconds != null && type) {
        if (seconds === 0) return 100;

        return (seconds / cycleLength[type]) * 100;
      } else {
        return 0;
      }
    },
    convertSecondsToHoursAndMinutes(seconds) {
      if (seconds != null) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds - hours * 3600) / 60);

        return `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`;
      }
    },
    getCircleColor(seconds) {
      if (seconds != null) {
        const greenColor = "#33ef95";
        const greyColor = "#e9e9e9";
        const yellowColor = "#f3b543";
        const lightYellowColor = "#ffe6b3";
        const lightRedColor = "#ffc8bf";

        const minutes = seconds / 60;

        if (minutes <= 0) {
          return { valueColor: lightRedColor, rangeColor: lightRedColor };
        } else if (minutes > 0 && minutes < 30) {
          return { valueColor: yellowColor, rangeColor: lightYellowColor };
        } else {
          return { valueColor: greenColor, rangeColor: greyColor };
        }
      } else {
        return { valueColor: "#fff", rangeColor: "#fff" };
      }
    },
    initHosData(hosData, firstName, lastName) {
      if (hosData && hosData.length && (firstName || lastName)) {
        const firstNameLC = (firstName || "").toLowerCase();
        const lastNameLC = (lastName || "").toLowerCase();
        const driverHosData = hosData.find(({ externalDriverName }) => {
          const externalDriverNameLC = (externalDriverName || "").toLowerCase();
          if (externalDriverNameLC == firstNameLC + " " + lastNameLC) {
            return true;
          } else if (
            externalDriverNameLC.includes(firstNameLC) &&
            externalDriverNameLC.includes(lastNameLC)
          ) {
            return true;
          }
          return false;
        });

        if (driverHosData) {
          const breakValue = this.calculatePercentageBasedOnSeconds(
            driverHosData.clocks.breakInS,
            "breakInS"
          );
          const breakLabel = this.convertSecondsToHoursAndMinutes(
            driverHosData.clocks.breakInS
          );
          const { valueColor: breakValueColor, rangeColor: breakRangeColor } =
            this.getCircleColor(driverHosData.clocks.breakInS);

          const driveValue = this.calculatePercentageBasedOnSeconds(
            driverHosData.clocks.driveInS,
            "driveInS"
          );
          const driveLabel = this.convertSecondsToHoursAndMinutes(
            driverHosData.clocks.driveInS
          );
          const { valueColor: driveValueColor, rangeColor: driveRangeColor } =
            this.getCircleColor(driverHosData.clocks.driveInS);

          const shiftValue = this.calculatePercentageBasedOnSeconds(
            driverHosData.clocks.shiftInS,
            "shiftInS"
          );
          const shiftLabel = this.convertSecondsToHoursAndMinutes(
            driverHosData.clocks.shiftInS
          );
          const { valueColor: shiftValueColor, rangeColor: shiftRangeColor } =
            this.getCircleColor(driverHosData.clocks.shiftInS);

          const cycleValue = this.calculatePercentageBasedOnSeconds(
            driverHosData.clocks.cycleInS,
            "cycleInS"
          );
          const cycleLabel = this.convertSecondsToHoursAndMinutes(
            driverHosData.clocks.cycleInS
          );
          const { valueColor: cycleValueColor, rangeColor: cycleRangeColor } =
            this.getCircleColor(driverHosData.clocks.cycleInS);

          return {
            ...driverHosData.clocks,
            breakValue,
            breakLabel,
            breakValueColor,
            breakRangeColor,
            driveValue,
            driveLabel,
            driveValueColor,
            driveRangeColor,
            shiftValue,
            shiftLabel,
            shiftValueColor,
            shiftRangeColor,
            cycleValue,
            cycleLabel,
            cycleValueColor,
            cycleRangeColor,
          };
        }
      }
    },
  },
};
