<template>
  <div class="wrapper">
    <div class="top-grid">
      <div class="earings">
        <div class="content">
          <div class="left">
            <p>This month's earnings</p>
            <h6>${{ earnings.currentMonthEarnings }}</h6>
          </div>
          <div class="right">
            <p>This year earningss</p>
            <h6>${{ earnings.currentYearEarnings }}</h6>
          </div>
        </div>
      </div>
      <div class="referral">
        <div class="content">
          <p>Your Referral Link</p>
          <div class="url-box">
            <div class="link">
              <p>{{ referralLink }}</p>
            </div>
            <div class="copy-icon" @click="copyReferralLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
              >
                <path
                  d="M2 20C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V4H2V18H13V20H2ZM6 16C5.45 16 4.97933 15.8043 4.588 15.413C4.196 15.021 4 14.55 4 14V2C4 1.45 4.196 0.979 4.588 0.587C4.97933 0.195667 5.45 0 6 0H15C15.55 0 16.021 0.195667 16.413 0.587C16.8043 0.979 17 1.45 17 2V14C17 14.55 16.8043 15.021 16.413 15.413C16.021 15.8043 15.55 16 15 16H6ZM6 14H15V2H6V14Z"
                  fill="#7E72F1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline-grid" v-if="showTimeline">
      <div class="heading">
        <p>
          Earn <span> lifetime recurring, passive income </span> by introducing
          your friends to Truckpedia
        </p>
      </div>
      <div class="timeline-steps">
        <div class="steps">
          <div class="number">1</div>
          <p>Send your friend your referral link.</p>
        </div>
        <div class="flow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="16"
            viewBox="0 0 63 16"
            fill="none"
          >
            <path
              d="M62.7071 8.7071C63.0976 8.31658 63.0976 7.68341 62.7071 7.29289L56.3431 0.928929C55.9526 0.538405 55.3195 0.538405 54.9289 0.928929C54.5384 1.31945 54.5384 1.95262 54.9289 2.34314L60.5858 8L54.9289 13.6569C54.5384 14.0474 54.5384 14.6805 54.9289 15.0711C55.3195 15.4616 55.9526 15.4616 56.3431 15.0711L62.7071 8.7071ZM5.64018e-08 9L62 9L62 7L-5.64018e-08 7L5.64018e-08 9Z"
              fill="#7E72F1"
            />
          </svg>
        </div>
        <div class="steps">
          <div class="number">2</div>
          <p>Have your friend signup for Truckpedia</p>
        </div>
        <div class="flow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="16"
            viewBox="0 0 63 16"
            fill="none"
          >
            <path
              d="M62.7071 8.7071C63.0976 8.31658 63.0976 7.68341 62.7071 7.29289L56.3431 0.928929C55.9526 0.538405 55.3195 0.538405 54.9289 0.928929C54.5384 1.31945 54.5384 1.95262 54.9289 2.34314L60.5858 8L54.9289 13.6569C54.5384 14.0474 54.5384 14.6805 54.9289 15.0711C55.3195 15.4616 55.9526 15.4616 56.3431 15.0711L62.7071 8.7071ZM5.64018e-08 9L62 9L62 7L-5.64018e-08 7L5.64018e-08 9Z"
              fill="#7E72F1"
            />
          </svg>
        </div>
        <div class="steps">
          <div class="number">3</div>
          <p>
            Earn a 10% profit share for every referral that subscribes for
            lifetime.
          </p>
        </div>
      </div>
      <div class="dismiss-btn" @click="dismissElement">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M6.575 7.975L1.675 12.875C1.49167 13.0583 1.25833 13.15 0.975 13.15C0.691667 13.15 0.458333 13.0583 0.275 12.875C0.0916663 12.6917 0 12.4583 0 12.175C0 11.8917 0.0916663 11.6583 0.275 11.475L5.175 6.575L0.275 1.675C0.0916663 1.49167 0 1.25833 0 0.975C0 0.691667 0.0916663 0.458333 0.275 0.275C0.458333 0.0916663 0.691667 0 0.975 0C1.25833 0 1.49167 0.0916663 1.675 0.275L6.575 5.175L11.475 0.275C11.6583 0.0916663 11.8917 0 12.175 0C12.4583 0 12.6917 0.0916663 12.875 0.275C13.0583 0.458333 13.15 0.691667 13.15 0.975C13.15 1.25833 13.0583 1.49167 12.875 1.675L7.975 6.575L12.875 11.475C13.0583 11.6583 13.15 11.8917 13.15 12.175C13.15 12.4583 13.0583 12.6917 12.875 12.875C12.6917 13.0583 12.4583 13.15 12.175 13.15C11.8917 13.15 11.6583 13.0583 11.475 12.875L6.575 7.975Z"
            fill="black"
            fill-opacity="0.5"
          />
        </svg>
      </div>
    </div>

    <DataTable :value="earnings.referralList">
      <Column field="companyName" header="Company"></Column>
      <Column field="companyEmail" header="Email"></Column>
      <Column field="subscribeSince" header="Subscribe Since"></Column>
      <Column field="monthlyEarnings" header="Monthly Earnings"></Column>
    </DataTable>
  </div>
</template>

<script>
import SubmitReferral from "./components/SubmitReferral.vue";
import { mapGetters } from "vuex";

export default {
  components: { SubmitReferral },
  name: "Referrals",
  data() {
    return {
      submitReferralPopup: false,
      referralCode: "",
      earnings: "",
      showTimeline: true,
    };
  },
  created() {
    this.getReferralLink();
    this.getEarnings();
  },
  computed: {
    ...mapGetters("auth", ["userRole", "user"]),

    referralLink() {
      return `${window.location.origin}/register?referralCode=${this.referralCode}`;
    },
  },
  methods: {
    copyReferralLink() {
      let that = this;
      this.$copyText(this.referralLink).then(
        function (e) {
          that.$vs.notify({
            title: "Success",
            text: "Copied",
            color: "success",
          });
        },
        function (e) {
          that.$vs.notify({
            title: "Danger",
            text: "Can not copy",
            color: "danger",
          });
        }
      );
    },
    getReferralLink() {
      this.$store.dispatch("referral/getReferralLink").then(({ payload }) => {
        this.referralCode = payload.referral_code;
      });
    },
    getEarnings() {
      this.$store.dispatch("referral/getEarnings").then(({ payload }) => {
        this.earnings = payload;
      });
    },
    dismissElement() {
      this.showTimeline = false;
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  padding: 50px;
  .top-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 50px;

    .earings {
      border-radius: 16px;
      background: rgba(126, 114, 241, 0.2);
      padding: 25px;
      width: 45%;

      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-size: 12px;
          padding-bottom: 15px;
        }

        h6 {
          font-size: 18px;
          font-weight: 700;
        }
      }
    }

    .referral {
      width: 45%;

      .content {
        p {
          color: rgba(0, 0, 0, 0.7);
          font-size: 16px;
          font-weight: 400;
          padding-bottom: 15px;
        }

        .url-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          background: #fff;
          padding: 10px;

          .link {
            p {
              color: #0034ec;
              font-size: 11px;
              font-weight: 400;
              padding: 0px;
            }
          }

          .copy-icon {
            cursor: pointer;
          }
        }
      }
    }
  }

  .timeline-grid {
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 50px;
    margin-bottom: 50px;
    position: relative;

    .heading {
      text-align: center;

      p {
        color: #000;
        font-size: 14px;
        font-weight: 400;
        padding-bottom: 30px;

        span {
          font-weight: 700;
        }
      }
    }

    .timeline-steps {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .steps {
        display: flex;
        align-items: center;

        .number {
          min-width: 25px;
          min-height: 25px;
          background: #7e72f1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
        }

        p {
          color: #000;
          font-size: 12px;
          font-weight: 400;
          padding: 15px;
          padding-left: 10px;
        }
      }

      .flow {
        padding-right: 15px;
      }
    }

    .dismiss-btn {
      position: absolute;
      top: 25px;
      right: 50px;
      cursor: pointer;
    }
  }
}

.referral-link-container {
  margin-top: 8%;
  background: #f2f7ff;
  border-radius: 23px;
  padding: 13px;
}

.referral-link {
  padding: 0;
  font-weight: 600;
  font-size: 12px;
  color: #0d6ede;
}

.referrals-good-to-know {
  font-weight: bold;
  font-size: 22px;
  line-height: 36px;
  color: #17191c;
  margin-bottom: 1.5rem;
}

.referrals {
  margin: 20px;
  padding-bottom: 30px;
  .referrals-header {
    font-weight: bold;
    font-size: 20px;
    line-height: 36px;
    color: #17191c;
    margin: 12px 0;
    letter-spacing: 1px;
  }

  .referrals-text {
    font-size: 14px;
    color: #17191c;
    line-height: 28px;
  }
}
</style>
