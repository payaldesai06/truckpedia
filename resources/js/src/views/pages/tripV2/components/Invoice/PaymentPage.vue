<template>
  <div
    class="payment-page Chrome flex-container direction-column align-items-center"
  >
    <div
      class="App-contents flex-container spacing-16 direction-column width-12"
      style="background-color: #525f7f; padding: 50px"
    >
      <div class="width-auto">
        <div class="ContentCard ContentCard-mobileNoMargin">
          <div class="InvoiceSummary InvoiceSummary-prePayment">
            <div
              class="InvoiceSummaryPrePayment flex-container direction-row justify-content-space-between"
            >
              <div class="flex-container direction-column">
                <h1
                  class="Text Text-color--gray800 Text-fontSize--36 Text-fontWeight--600"
                >
                  <div
                    class="flex-container spacing-8 direction-row align-items-center"
                  >
                    <div
                      class="flex-item width-fixed"
                      data-testid="invoice-total-amount"
                    >
                      <span>{{ invoiceTotal }}</span>
                    </div>
                  </div>
                </h1>
                <div
                  class="flex-container spacing-8 direction-row align-items-center"
                >
                  <div class="flex-item width-grow">
                    <span
                      class="Text Text-color--gray500 Text-fontSize--14 Text-fontWeight--500"
                      >Due {{ dueDate || '' }}</span
                    >
                  </div>
                  <div class="flex-item width-fixed"></div>
                </div>
              </div>
              <div class="InvoiceThumbnail InvoiceThumbnail-prePayment">
                <button
                  class="InvoiceThumbnail-wrapperButton"
                  type="button"
                ></button
                ><svg
                  class="InlineSVG InvoiceThumbnail-image"
                  focusable="false"
                  width="131"
                  height="145"
                  viewBox="0 0 131 145"
                  fill="none"
                >
                  <g filter="url(#filter0_ddd)">
                    <rect
                      x="35"
                      y="25"
                      width="60.5902"
                      height="74.8467"
                      rx="4"
                      fill="white"
                    ></rect>
                  </g>
                  <rect
                    opacity="0.12"
                    x="42.13"
                    y="33.9097"
                    width="10.6924"
                    height="10.6924"
                    rx="5.34619"
                    fill="#191919"
                  ></rect>
                  <rect
                    opacity="0.1"
                    x="58.1651"
                    y="37.4744"
                    width="14.2565"
                    height="3.56413"
                    rx="1.78206"
                    fill="#191919"
                  ></rect>
                  <rect
                    opacity="0.1"
                    x="42.13"
                    y="53.5132"
                    width="10.6924"
                    height="3.56413"
                    rx="1.78206"
                    fill="#191919"
                  ></rect>
                  <rect
                    opacity="0.1"
                    x="42.13"
                    y="62.4229"
                    width="10.6924"
                    height="3.56413"
                    rx="1.78206"
                    fill="#191919"
                  ></rect>
                  <rect
                    opacity="0.1"
                    x="77.7701"
                    y="85.5901"
                    width="10.6924"
                    height="3.56413"
                    rx="1.78206"
                    fill="#191919"
                  ></rect>
                  <rect
                    opacity="0.1"
                    x="58.1651"
                    y="53.5132"
                    width="19.6027"
                    height="3.56413"
                    rx="1.78206"
                    fill="#191919"
                  ></rect>
                  <rect
                    opacity="0.1"
                    x="58.1651"
                    y="62.4229"
                    width="19.6027"
                    height="3.56413"
                    rx="1.78206"
                    fill="#191919"
                  ></rect>
                  <rect
                    opacity="0.1"
                    x="42.13"
                    y="85.5901"
                    width="28.513"
                    height="3.56413"
                    rx="1.78206"
                    fill="#191919"
                  ></rect>
                  <rect
                    opacity="0.05"
                    x="42.13"
                    y="76.6804"
                    width="46.3337"
                    height="3.56413"
                    rx="1.78206"
                    fill="#191919"
                  ></rect>
                  <defs>
                    <filter
                      id="filter0_ddd"
                      x="0"
                      y="0"
                      width="130.59"
                      height="144.847"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="10"></feOffset>
                      <feGaussianBlur stdDeviation="17.5"></feGaussianBlur>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.207843 0 0 0 0 0.207843 0 0 0 0 0.207843 0 0 0 0.08 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="5"></feOffset>
                      <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 0 0.208333 0 0 0 0.04 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="effect2_dropShadow"
                        result="effect3_dropShadow"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect3_dropShadow"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
                <button
                  class="InvoiceThumbnail-downloadButton"
                  type="button"
                  data-testid="download-invoice-pdf-button"
                >
                  <svg
                    class="InlineSVG Icon InvoiceThumbnail-downloadIcon Icon--sm"
                    focusable="false"
                    fill-opacity="1"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.2499 9.43738L10.6934 5.99389C10.9866 5.70073 11.4619 5.70073 11.755 5.99389C12.0482 6.28706 12.0482 6.76237 11.755 7.05553L7.03023 11.7803C6.73734 12.0732 6.26247 12.0732 5.96957 11.7803L1.24478 7.05553C0.951611 6.76237 0.951611 6.28706 1.24478 5.99389C1.53794 5.70073 2.01325 5.70073 2.30642 5.99389L5.7499 9.43738V0.75C5.7499 0.335786 6.08569 0 6.4999 0C6.91412 0 7.2499 0.335786 7.2499 0.75V9.43738Z"
                      fill="black"
                      fill-opacity="0.5"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            class="App-InvoiceDetails flex-item width-grow flex-container direction-column"
          >
            <table class="InvoiceDetails-table">
              <tbody>
                <tr class="LabeledTableRow LabeledTableRow--wide">
                  <td
                    style="vertical-align: top; width: 1px; white-space: nowrap"
                  >
                    <span class="Text Text-color--gray400 Text-fontSize--14"
                      >To</span
                    >
                  </td>
                  <td style="vertical-align: top">
                    <span class="Text Text-color--default Text-fontSize--14">
                      {{
                        (invoice.customer &&
                          (invoice.customer.name ||
                            invoice.customer.company_name)) ||
                        ''
                      }}
                    </span>
                  </td>
                </tr>
                <tr class="LabeledTableRow LabeledTableRow--wide">
                  <td
                    style="vertical-align: top; width: 1px; white-space: nowrap"
                  >
                    <span class="Text Text-color--gray400 Text-fontSize--14"
                      >From</span
                    >
                  </td>
                  <td style="vertical-align: top">
                    <span class="Text Text-color--default Text-fontSize--14">
                      {{ companyName || '' }}
                    </span>
                  </td>
                </tr>
                <tr class="LabeledTableRow LabeledTableRow--wide">
                  <td
                    style="vertical-align: top; width: 1px; white-space: nowrap"
                  >
                    <span class="Text Text-color--gray400 Text-fontSize--14"
                      >Invoice</span
                    >
                  </td>
                  <td style="vertical-align: top">
                    <span class="Text Text-color--default Text-fontSize--14">
                      {{
                        invoice.invoiceNumber ? `#${invoice.invoiceNumber}` : ''
                      }}
                    </span>
                  </td>
                </tr>
                <!-- <tr>
                  <td style="vertical-align: top"></td>
                  <td style="vertical-align: top">
                    <div class="ViewInvoiceDetailsRow-linkContainer">
                      <button
                        class="Button ViewInvoiceDetailsLink Button--link Button--md"
                        type="button"
                        data-testid="show-invoice-details-button"
                      >
                        <div
                          class="flex-container justify-content-center align-items-center"
                        >
                          <svg
                            class="InlineSVG Icon Button-Icon Button-Icon--right Icon--sm Icon--square"
                            focusable="false"
                            fill-opacity="1"
                            fill="currentColor"
                            width="12"
                            height="12"
                            viewBox="0 0 5 8"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0.146582 1.20432C-0.0488607 1.00888 -0.0488607 0.692001 0.146582 0.496558C0.342025 0.301115 0.6589 0.301115 0.854343 0.496558L4.00421 3.64642C4.19947 3.84168 4.19947 4.15827 4.00421 4.35353L0.854343 7.50339C0.6589 7.69884 0.342025 7.69884 0.146582 7.50339C-0.0488607 7.30795 -0.0488607 6.99108 0.146582 6.79563L2.94224 3.99998L0.146582 1.20432Z"
                            ></path></svg
                          ><span
                            class="Text Text-color--default Text-fontWeight--500 Text--truncate"
                            >View invoice details</span
                          >
                        </div>
                      </button>
                    </div>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div
          style="height: auto; opacity: 1; margin-top: 8px; margin-bottom: 8px"
        >
          <div
            class="ContentCard ContentCard-mobileNoMargin ContentCard-fullBottomPadding"
          >
            <div
              class="PaymentRequestOrHeader"
              style="display: inherit; height: auto"
            >
              <div
                class="PaymentHeaderContainer"
                style="display: block; opacity: 1"
              >
                <h2
                  class="PaymentHeader Text Text-color--gray600 Text-fontSize--16 Text-fontWeight--500"
                >
                  Choose how you'd like to pay
                </h2>
              </div>
              <div
                class="ButtonAndDividerContainer"
                style="display: none; opacity: 0"
              ></div>
            </div>
            <div class="flex-container direction-column">
              <form novalidate="">
                <div>
                  <div>
                    <div style="opacity: 1">
                      <div
                        class="App-Global-Fields flex-container spacing-16 direction-row wrap-wrap"
                      ></div>
                      <div style="opacity: 1">
                        <div class="Tabs is-icontabs is-desktop">
                          <div class="Tabs-Container">
                            <div
                              role="tablist"
                              aria-orientation="horizontal"
                              aria-label="Payment methods"
                              class="Tabs-TabList"
                            >
                              <div
                                role="presentation"
                                class="Tabs-TabListItemContainer Tabs-TabListItemContainer--is-selected"
                              >
                                <button
                                  class="Tabs-TabListItem Tabs-TabListItem--is-selected"
                                  id="card-tab"
                                  data-testid="card-tab-button"
                                  role="tab"
                                  type="button"
                                  aria-controls="card-tab-panel"
                                  aria-label="Pay with card"
                                  aria-selected="true"
                                  tabindex="0"
                                  title="Card"
                                  style="width: 55px"
                                >
                                  <div class="Tabs-TabListItemContent">
                                    <div class="Tabs-TabListPaymentMethod">
                                      <div class="Tabs-TabListPaymentIcon">
                                        <img
                                          src="https://js.stripe.com/v3/fingerprinted/img/card-ce24697297bd3c6a00fdd2fb6f760f0d.svg"
                                          alt=""
                                          class="Icon Icon--md"
                                        />
                                      </div>
                                      <div
                                        class="Tabs-TabListPaymentLabel"
                                        data-text="Card"
                                      >
                                        Card
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <!-- <div
                                role="presentation"
                                class="Tabs-TabListItemContainer"
                              >
                                <button
                                  class="Tabs-TabListItem"
                                  id="ach_credit_transfer-tab"
                                  data-testid="ach_credit_transfer-tab-button"
                                  role="tab"
                                  type="button"
                                  aria-controls="ach_credit_transfer-tab-panel"
                                  aria-label="Bank transfer"
                                  aria-selected="false"
                                  tabindex="-1"
                                  title="Bank transfer"
                                >
                                  <div class="Tabs-TabListItemContent">
                                    <div class="Tabs-TabListPaymentMethod">
                                      <div class="Tabs-TabListPaymentIcon">
                                        <img
                                          src="https://js.stripe.com/v3/fingerprinted/img/bank-238559adeacb316f53b1c236d933af84.svg"
                                          alt=""
                                          class="Icon Icon--md"
                                        />
                                      </div>
                                      <div
                                        class="Tabs-TabListPaymentLabel"
                                        data-text="Bank transfer"
                                      >
                                        Bank transfer
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <div
                                role="presentation"
                                class="Tabs-TabListItemContainer"
                              >
                                <button
                                  class="Tabs-TabListItem"
                                  id="us_bank_account-tab"
                                  data-testid="us_bank_account-tab-button"
                                  role="tab"
                                  type="button"
                                  aria-controls="us_bank_account-tab-panel"
                                  aria-label="US bank account"
                                  aria-selected="false"
                                  tabindex="-1"
                                  title="US bank account"
                                >
                                  <div class="Tabs-TabListItemContent">
                                    <div class="Tabs-TabListPaymentMethod">
                                      <div class="Tabs-TabListPaymentIcon">
                                        <img
                                          src="https://js.stripe.com/v3/fingerprinted/img/bank-238559adeacb316f53b1c236d933af84.svg"
                                          alt=""
                                          class="Icon Icon--md"
                                        />
                                      </div>
                                      <div
                                        class="Tabs-TabListPaymentLabel"
                                        data-text="US bank account"
                                      >
                                        US bank account
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <div
                                role="presentation"
                                class="Tabs-TabListItemContainer"
                              >
                                <button
                                  class="Tabs-TabListItem"
                                  id="wechat_pay-tab"
                                  data-testid="wechat_pay-tab-button"
                                  role="tab"
                                  type="button"
                                  aria-controls="wechat_pay-tab-panel"
                                  aria-label="Pay with WeChat Pay"
                                  aria-selected="false"
                                  tabindex="-1"
                                  title="WeChat"
                                >
                                  <div class="Tabs-TabListItemContent">
                                    <div class="Tabs-TabListPaymentMethod">
                                      <div class="Tabs-TabListPaymentIcon">
                                        <svg
                                          class="InlineSVG Icon Icon--md"
                                          focusable="false"
                                          fill="#65bf46"
                                          color="#65bf46"
                                          fill-opacity="1"
                                          viewBox="0 0 16 16"
                                        >
                                          <path
                                            d="m5.82158951 10.2392289c-.07458706.0370453-.15730458.0556955-.24094809.054326-.19411036.0004044-.37251043-.1042744-.4634916-.2719605l-.03714687-.07248977-1.46459966-3.11854655c-.01512596-.03426189-.02150045-.07160842-.01857344-.10881723-.00173271-.06781637.02505287-.13335979.07410324-.18132817.04905038-.04796839.11607222-.07416311.18541829-.07246861.05991821.00135034.11803899.0202774.1668232.05432605l1.72429004 1.19665926c.13428814.07989516.287767.12369848.44491816.12698096.09540276-.00050307.18981611-.01894679.27809496-.05432605l8.08434026-3.51748802c-1.4654439-1.68625423-3.8570268-2.77409627-6.54544686-2.77409627-4.43111472 0-8.00937114 2.91907582-8.00937114 6.52721734 0 1.95821474 1.07540181 3.73512246 2.76254498 4.93244226.19798422.1234931.27637709.3683985.18573434.5802485-.12984519.4895949-.35221984 1.2879732-.35221984 1.3236402-.02294672.0641881-.03548063.1314925-.03714687.1994707-.00149457.0676161.0253489.1328891.07429838.1806653s.11574724.0738997.18488544.0723059c.05476156.0014409.10794137-.0180468.14824977-.0543261l1.74286348-.9975188c.12865107-.0773324.27545557-.1210562.42634473-.1269809.0814565.0032186.1622826.0154046.24094809.0363274.84921252.2423376 1.7294984.3646673 2.61412636.3632745 4.41254124 0 8.00937114-2.9190758 8.00937114-6.52721731-.0072077-1.07252838-.3219348-2.12157031-.9084098-3.02789305l-9.21428039 5.22141056z"
                                          ></path>
                                        </svg>
                                      </div>
                                      <div
                                        class="Tabs-TabListPaymentLabel"
                                        data-text="WeChat"
                                      >
                                        WeChat
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div> -->
                            </div>
                          </div>
                          <div class="Tabs-TabPanelContainer">
                            <div
                              style="opacity: 1; width: 100%; transform: none"
                            >
                              <div
                                id="card-tab-panel"
                                role="tabpanel"
                                aria-labelledby="card-tab"
                              >
                                <div
                                  class="PaymentForm-paymentMethodForm flex-container spacing-16 direction-column wrap-wrap"
                                >
                                  <div class="flex-item width-12">
                                    <div class="FormFieldGroup">
                                      <div
                                        class="FormFieldGroup-labelContainer flex-container justify-content-space-between"
                                      >
                                        <label for="cardNumber-fieldset"
                                          ><span
                                            class="Text Text-color--gray600 Text-fontSize--13 Text-fontWeight--500"
                                            >Card information</span
                                          ></label
                                        >
                                      </div>
                                      <form
                                        class="FormFieldGroup-Fieldset"
                                        id="paymentForm"
                                      >
                                        <div
                                          class="FormFieldGroup-container"
                                          id="cardNumber-fieldset-inner"
                                        >
                                          <div
                                            class="FormFieldGroup-child FormFieldGroup-child--width-12 FormFieldGroup-childLeft FormFieldGroup-childRight FormFieldGroup-childTop"
                                          >
                                            <div
                                              class="FormFieldInput has-icon"
                                            >
                                              <div
                                                class="CheckoutInputContainer"
                                              >
                                                <span
                                                  class="InputContainer"
                                                  data-max=""
                                                  ><input
                                                    class="CheckoutInput CheckoutInput--tabularnums Input"
                                                    autocomplete="cc-number"
                                                    autocorrect="off"
                                                    spellcheck="false"
                                                    id="cardNumber"
                                                    name="cardNumber"
                                                    type="text"
                                                    inputmode="numeric"
                                                    aria-label="Card number"
                                                    placeholder="Card Number"
                                                    aria-invalid="false"
                                                    v-model="cardNumber"
                                                /></span>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="FormFieldGroup-child FormFieldGroup-child--width-6 FormFieldGroup-childLeft FormFieldGroup-childBottom"
                                          >
                                            <div class="FormFieldInput">
                                              <div
                                                class="CheckoutInputContainer"
                                              >
                                                <span
                                                  class="InputContainer"
                                                  data-max=""
                                                  ><input
                                                    class="CheckoutInput CheckoutInput--tabularnums Input rounded-none"
                                                    autocomplete="cc-exp"
                                                    autocorrect="off"
                                                    spellcheck="false"
                                                    id="expMonth"
                                                    name="cardExpiry"
                                                    type="text"
                                                    inputmode="numeric"
                                                    aria-label="Expiration"
                                                    placeholder="Expiry Month"
                                                    aria-invalid="false"
                                                    v-model="expMonth"
                                                    maxlength="2"
                                                /></span>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="FormFieldGroup-child FormFieldGroup-child--width-6 FormFieldGroup-childRight FormFieldGroup-childBottom"
                                          >
                                            <div
                                              class="FormFieldInput has-icon"
                                            >
                                              <div
                                                class="CheckoutInputContainer"
                                              >
                                                <span
                                                  class="InputContainer"
                                                  data-max=""
                                                  ><input
                                                    class="CheckoutInput CheckoutInput--tabularnums Input rounded-none"
                                                    autocomplete="cc-csc"
                                                    autocorrect="off"
                                                    spellcheck="false"
                                                    id="expYear"
                                                    name="expYear"
                                                    type="text"
                                                    inputmode="numeric"
                                                    aria-label="Year"
                                                    placeholder="Expiry Year"
                                                    aria-invalid="false"
                                                    v-model="expYear"
                                                    maxlength="2"
                                                /></span>
                                              </div>
                                              <div
                                                class="FormFieldInput-Icon"
                                                data-testid="FormFieldInput-Icon"
                                              >
                                                <svg
                                                  class="Icon Icon--md"
                                                  focusable="false"
                                                  viewBox="0 0 32 21"
                                                  role="img"
                                                  aria-label="CVC"
                                                >
                                                  <title>CVC</title>
                                                  <g
                                                    fill="none"
                                                    fill-rule="evenodd"
                                                  >
                                                    <g class="Icon-fill">
                                                      <g
                                                        transform="translate(0 2)"
                                                      >
                                                        <path
                                                          d="M21.68 0H2c-.92 0-2 1.06-2 2v15c0 .94 1.08 2 2 2h25c.92 0 2-1.06 2-2V9.47a5.98 5.98 0 0 1-3 1.45V11c0 .66-.36 1-1 1H3c-.64 0-1-.34-1-1v-1c0-.66.36-1 1-1h17.53a5.98 5.98 0 0 1 1.15-9z"
                                                          opacity=".2"
                                                        ></path>
                                                        <path
                                                          d="M19.34 3H0v3h19.08a6.04 6.04 0 0 1 .26-3z"
                                                          opacity=".3"
                                                        ></path>
                                                      </g>
                                                      <g
                                                        transform="translate(18)"
                                                      >
                                                        <path
                                                          d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM4.22 4.1h-.79l-1.93.98v1l1.53-.8V9.9h1.2V4.1zm2.3.8c.57 0 .97.32.97.78 0 .5-.47.85-1.15.85h-.3v.85h.36c.72 0 1.21.36 1.21.88 0 .5-.48.84-1.16.84-.5 0-1-.16-1.52-.47v1c.56.24 1.12.37 1.67.37 1.31 0 2.21-.67 2.21-1.64 0-.68-.42-1.23-1.12-1.45.6-.2.99-.73.99-1.33C8.68 4.64 7.85 4 6.65 4a4 4 0 0 0-1.57.34v.98c.48-.27.97-.42 1.44-.42zm4.32 2.18c.73 0 1.24.43 1.24.99 0 .59-.51 1-1.24 1-.44 0-.9-.14-1.37-.43v1.03c.49.22.99.33 1.48.33.26 0 .5-.04.73-.1.52-.85.82-1.83.82-2.88l-.02-.42a2.3 2.3 0 0 0-1.23-.32c-.18 0-.37.01-.57.04v-1.3h1.44a5.62 5.62 0 0 0-.46-.92H9.64v3.15c.4-.1.8-.17 1.2-.17z"
                                                        ></path>
                                                      </g>
                                                    </g>
                                                  </g>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="FormFieldGroup-child FormFieldGroup-child--width-12 FormFieldGroup-childLeft FormFieldGroup-childRight FormFieldGroup-childTop"
                                          >
                                            <div
                                              class="FormFieldInput has-icon"
                                            >
                                              <div
                                                class="CheckoutInputContainer"
                                              >
                                                <span
                                                  class="InputContainer"
                                                  data-max=""
                                                  ><input
                                                    class="CheckoutInput CheckoutInput--tabularnums Input custom-bottom-radius"
                                                    autocomplete="card-code"
                                                    autocorrect="off"
                                                    spellcheck="false"
                                                    id="cardCode"
                                                    name="cardCode"
                                                    type="text"
                                                    inputmode="numeric"
                                                    aria-label="Card Code"
                                                    placeholder="Card Code"
                                                    aria-invalid="false"
                                                    v-model="cardCode"
                                                    maxlength="4"
                                                /></span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="PaymentForm-confirmPaymentContainer mt4 flex-item width-grow"
                                        >
                                          <div>
                                            <div
                                              class="flex-item width-12"
                                            ></div>
                                            <div class="flex-item width-12">
                                              <button
                                                class="SubmitButton SubmitButton--complete submit-button-color"
                                                type="button"
                                                data-testid="hosted-payment-submit-button"
                                                @click="
                                                  sendPaymentDataToAuthorizeNet
                                                "
                                                id="submitButton"
                                              >
                                                <div
                                                  class="SubmitButton-Shimmer SubmitButton--complete-Shimmer"
                                                  style="
                                                    background: linear-gradient(
                                                      to right,
                                                      rgba(0, 116, 212, 0) 0%,
                                                      rgb(58, 139, 238) 50%,
                                                      rgba(0, 116, 212, 0) 100%
                                                    );
                                                  "
                                                ></div>
                                                <div
                                                  class="SubmitButton-TextContainer"
                                                >
                                                  <span
                                                    class="SubmitButton-Text SubmitButton-Text--current Text Text-color--default Text-fontWeight--500 Text--truncate"
                                                    aria-hidden="false"
                                                    >Pay
                                                    <span>{{
                                                      invoiceTotal
                                                    }}</span></span
                                                  >
                                                </div>
                                                <div
                                                  class="SubmitButton-IconContainer"
                                                >
                                                  <div
                                                    class="SubmitButton-Icon SubmitButton-Icon--current"
                                                  >
                                                    <div
                                                      class="Icon Icon--md Icon--square"
                                                    >
                                                      <svg
                                                        viewBox="0 0 16 16"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        focusable="false"
                                                      >
                                                        <path
                                                          d="M3 7V5a5 5 0 1 1 10 0v2h.5a1 1 0 0 1 1 1v6a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1zm5 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM11 7V5a3 3 0 1 0-6 0v2z"
                                                          fill="#ffffff"
                                                          fill-rule="evenodd"
                                                        ></path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="SubmitButton-Icon SubmitButton-SpinnerIcon SubmitButton-Icon--pre"
                                                  >
                                                    <div
                                                      class="Icon Icon--md Icon--square"
                                                    >
                                                      <svg
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        focusable="false"
                                                      >
                                                        <ellipse
                                                          cx="12"
                                                          cy="12"
                                                          rx="10"
                                                          ry="10"
                                                          style="
                                                            stroke: rgb(
                                                              255,
                                                              255,
                                                              255
                                                            );
                                                          "
                                                        ></ellipse>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  class="SubmitButton-CheckmarkIcon"
                                                >
                                                  <div class="Icon Icon--md">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="22"
                                                      height="14"
                                                      focusable="false"
                                                    >
                                                      <path
                                                        d="M 0.5 6 L 8 13.5 L 21.5 0"
                                                        fill="transparent"
                                                        stroke-width="2"
                                                        stroke="#ffffff"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                      ></path>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </button>
                                            </div>
                                            <div class="flex-item width-12">
                                              <div
                                                class="ConfirmPayment-PostSubmit"
                                              >
                                                <div>
                                                  <div
                                                    class="flex-container spacing-8 direction-column"
                                                    style="
                                                      margin-top: 4px;
                                                      margin-bottom: 4px;
                                                    "
                                                  >
                                                    <div
                                                      class="flex-item width-grow"
                                                    ></div>
                                                    <div
                                                      class="flex-item width-grow"
                                                    ></div>
                                                    <div
                                                      class="flex-item width-grow"
                                                    >
                                                      <div
                                                        class="ConfirmTerms Text Text-color--gray600 Text-fontSize--13"
                                                        data-testid="ConfirmPaymentTermsText"
                                                      ></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div
                  class="PaymentForm-confirmPaymentContainer mt4 flex-item width-grow"
                >
                  <div>
                    <div class="flex-item width-12"></div>
                    <div class="flex-item width-12">
                      <button
                        class="SubmitButton SubmitButton--complete"
                        type="button"
                        data-testid="hosted-payment-submit-button"
                        style="
                          background-color: rgb(0, 116, 212);
                          color: rgb(255, 255, 255);
                        "
                      >
                        <div
                          class="SubmitButton-Shimmer SubmitButton--complete-Shimmer"
                          style="
                            background: linear-gradient(
                              to right,
                              rgba(0, 116, 212, 0) 0%,
                              rgb(58, 139, 238) 50%,
                              rgba(0, 116, 212, 0) 100%
                            );
                          "
                        ></div>
                        <div class="SubmitButton-TextContainer">
                          <span
                            class="SubmitButton-Text SubmitButton-Text--current Text Text-color--default Text-fontWeight--500 Text--truncate"
                            aria-hidden="false"
                            >Pay <span>{{ invoiceTotal }}</span></span
                          ><span
                            class="SubmitButton-Text SubmitButton-Text--pre Text Text-color--default Text-fontWeight--500 Text--truncate"
                            aria-hidden="true"
                            >Processing...</span
                          >
                        </div>
                        <div class="SubmitButton-IconContainer">
                          <div
                            class="SubmitButton-Icon SubmitButton-Icon--current"
                          >
                            <div class="Icon Icon--md Icon--square">
                              <svg
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                focusable="false"
                              >
                                <path
                                  d="M3 7V5a5 5 0 1 1 10 0v2h.5a1 1 0 0 1 1 1v6a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1zm5 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM11 7V5a3 3 0 1 0-6 0v2z"
                                  fill="#ffffff"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div
                            class="SubmitButton-Icon SubmitButton-SpinnerIcon SubmitButton-Icon--pre"
                          >
                            <div class="Icon Icon--md Icon--square">
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                focusable="false"
                              >
                                <ellipse
                                  cx="12"
                                  cy="12"
                                  rx="10"
                                  ry="10"
                                  style="stroke: rgb(255, 255, 255)"
                                ></ellipse>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="SubmitButton-CheckmarkIcon">
                          <div class="Icon Icon--md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="14"
                              focusable="false"
                            >
                              <path
                                d="M 0.5 6 L 8 13.5 L 21.5 0"
                                fill="transparent"
                                stroke-width="2"
                                stroke="#ffffff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div class="flex-item width-12">
                      <div class="ConfirmPayment-PostSubmit">
                        <div>
                          <div
                            class="flex-container spacing-8 direction-column"
                            style="margin-top: 4px; margin-bottom: 4px"
                          >
                            <div class="flex-item width-grow"></div>
                            <div class="flex-item width-grow"></div>
                            <div class="flex-item width-grow">
                              <div
                                class="ConfirmTerms Text Text-color--gray600 Text-fontSize--13"
                                data-testid="ConfirmPaymentTermsText"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable nonblock-statement-body-position multiline-ternary -->
<script>
import { mapGetters } from 'vuex';
import config from '@/config/constants';
import { formatAmount, getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'PaymentPage',
  props: {
    invoice: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters('auth', ['user']),

    companyName() {
      const companyName = ((this.invoice || {}).company || {}).name;
      if (companyName) return companyName;

      return this.user && this.user.admin_company_details
        ? this.user.admin_company_details.business_name
        : null;
    },

    dueDate() {
      const date = (this.invoice || {}).dueDate || null;
      return date ? date : null;
      // return date ? this.convertToMonthFormat(date) : null;
    },

    invoiceTotal() {
      let total = 0;

      if (this.invoice && this.invoice.items) {
        this.invoice.items.forEach((item) => {
          total += Number(item.rate) * parseFloat(item.qty) || 0;
        });
      }
      if (this.invoice && this.invoice.additionalCustomPayments) {
        this.invoice.additionalCustomPayments.forEach((field) => {
          total = (Number(total) + Number(field.payment)).toFixed(2) || 0;
        });
      } else if (this.invoice && this.invoice.customFields) {
        this.invoice.customFields.forEach((field) => {
          total = (Number(total) + Number(field.payment)).toFixed(2) || 0;
        });
      }

      /*if (this.invoice) {
        total = this.invoice.balanceDue;
      }*/

      return this.formatAmountValue(Number(total).toFixed(2));
    },
  },

  mounted() {
    this.initScript();
  },

  data() {
    return {
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cardCode: '',
      formSubmitting: false,
    };
  },

  methods: {
    // convertToMonthFormat(dueDate) {
    //   if (!dueDate || !this.$dayjs(dueDate).isValid()) return null;
    //   return this.$dayjs(dueDate).format('MMMM DD, YYYY');
    // },
    formatAmountValue(amount) {
      return formatAmount(amount);
    },

    initScript() {
      const script = document.createElement('script');
      script.src = config.authorizeNetAcceptJsUrl.test;
      if (process.env.NODE_ENV === 'production') {
        console.log('prod authorize.net');
        script.src = config.authorizeNetAcceptJsUrl.prod;
      } else {
        console.log('test authorize.net');
      }
      script.charset = 'utf-8';
      script.async = true;
      document.head.appendChild(script);
    },

    async fetchClientKey() {
      const {
        data: {
          payload: { loginId, publicClientKey },
        },
      } = await this.$store.dispatch('authorizeNet/getClientKeyByInvoice', {
        invoiceId: this.invoice.invoiceId,
      });
      return { loginId, publicClientKey };
    },

    async sendPaymentDataToAuthorizeNet() {
      if (this.formSubmitting) return;

      this.formSubmitting = true;
      this.$vs.loading({
        container: '#submitButton',
        scale: 0.45,
      });

      const { loginId, publicClientKey } = await this.fetchClientKey();
      const authData = {
        clientKey: publicClientKey,
        apiLoginID: loginId,
      };

      const cardData = {
        cardNumber: this.cardNumber,
        month: this.expMonth,
        year: this.expYear,
        cardCode: this.cardCode,
      };

      Accept.dispatchData({ authData, cardData }, this.responseHandler);
    },
    async responseHandler(response) {
      if (response.messages.resultCode === 'Error') {
        response.messages.message.forEach((message) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: `${message.text}`,
          });
        });
      } else {
        const regex = /[^0-9\.]+/g;
        const numericValue = this.invoiceTotal.replace(regex, '');

        try {
          const {
            status,
            data: {
              payload: { transactionId },
            },
          } = await this.$store.dispatch('authorizeNet/processPayment', {
            paymentNonce: response.opaqueData.dataValue,
            invoiceId: this.invoice.invoiceId,
            paymentAmount: numericValue ? Number(numericValue) : null,
          });

          this.$emit('payment-success', {
            transactionId,
            amountPaid: numericValue,
            status: 'success',
          });

          if (status === 200) {
            this.resetForm();
            this.$vs.notify({
              color: 'primary',
              title: 'Transaction Successful',
              text: `Transaction ID: ${transactionId}`,
            });
          }
        } catch (error) {
          this.$vs.notify({
            color: 'danger',
            title: 'Transaction Failed',
            text: getApiErrorMsg(error),
          });
        }
      }

      this.$vs.loading.close('#submitButton > .con-vs-loading');
      this.formSubmitting = false;
    },
    resetForm() {
      this.cardNumber = '';
      this.expMonth = '';
      this.expYear = '';
      this.cardCode = '';
    },
  },
};
</script>
<style lang="scss" scoped>
.payment-page {
  margin-top: 0.5rem;
}

.flex-container {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

.flex-item {
  -webkit-box-flex: 0;
  box-sizing: border-box;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  max-width: 100%;
  min-width: 0;
}

.flex-item:empty {
  display: none;
}

.direction-row {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

.direction-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.spacing-8 {
  margin: -4px;
}

.spacing-8 > .flex-item {
  padding: 4px;
}

.spacing-16 {
  margin: -8px;
}

.spacing-16 > .flex-item {
  padding: 8px;
}

.justify-content-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.justify-content-space-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.align-items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.wrap-wrap {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.width-auto {
  width: auto;
}

.width-auto,
.width-fixed {
  -ms-flex-preferred-size: auto;
  -webkit-flex-basis: auto;
  flex-basis: auto;
}

.width-fixed {
  -ms-flex-negative: 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}

.width-grow {
  -ms-flex-preferred-size: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  -webkit-flex-basis: 0;
  flex-basis: 0;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}

.width-12 {
  width: 100%;
}

.Text {
  margin: 0;
}

.Text-fontSize--13 {
  font-size: 13px;
}

.Text-fontSize--14 {
  font-size: 14px;
}

.Text-fontSize--16 {
  font-size: 16px;
}

.Text-fontSize--36 {
  font-size: 36px;
}

.Text-fontWeight--500 {
  font-weight: 500;
}

.Text-fontWeight--600 {
  font-weight: 600;
}

.Text-color--gray400 {
  color: hsla(0, 0%, 10%, 0.5);
}

.Text-color--gray500 {
  color: hsla(0, 0%, 10%, 0.6);
}

.Text-color--gray600 {
  color: hsla(0, 0%, 10%, 0.7);
}

.Text-color--gray800 {
  color: hsla(0, 0%, 10%, 0.9);
}

.Text-color--red {
  color: #dc2727;
}

.Text--truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Icon--sm {
  height: 12px;
}

.Icon--sm.Icon--square {
  width: 12px;
}

.Icon--md {
  height: 16px;
}

.Icon--md.Icon--square {
  width: 16px;
}

.Icon .Icon-fill {
  fill: #565656;
}

@font-face {
  font-display: block;
  font-family: sohne-var;
  font-weight: 1 1000;
  src: url(https://js.stripe.com/v3/static/fonts/Sohne/Sohne-latin-basic.woff2)
    format('woff2-variations');
  unicode-range: U+0000-007e;
}

@font-face {
  font-display: block;
  font-family: sohne-var;
  font-weight: 1 1000;
  src: url(https://js.stripe.com/v3/static/fonts/Sohne/Sohne-minus-latin-basic.woff2)
    format('woff2-variations');
  unicode-range: U+007f-ffff;
}

.is-desktop .Chrome {
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;
  width: 443px;
}

.is-desktop .Chrome-header {
  -ms-flex-item-align: start;
  -webkit-align-self: flex-start;
  align-self: flex-start;
  margin-bottom: 32px;
}

.is-desktop .Chrome-footer {
  margin-top: 32px;
}

.is-desktop .ContentCard {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(175, 175, 175, 0.2),
    0 15px 35px 0 rgba(49, 49, 93, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.06);
  padding: 32px 32px 16px;
}

.is-desktop .ContentCard-fullBottomPadding {
  padding-bottom: 32px;
}

.InvoiceThumbnail {
  height: 74.8467px;
  position: relative;
  width: 60.5902px;
}

.InvoiceThumbnail-image {
  margin-left: -35px;
  margin-top: -25px;
}

.InvoiceThumbnail-wrapperButton {
  background: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;
}

.InvoiceThumbnail-downloadButton {
  border: none;
  border-radius: 40px;
  box-shadow: 0 4px 16px rgba(83, 87, 94, 0.2);
  cursor: pointer;
  min-height: 25px;
  min-width: 25px;
  outline: none;
  position: absolute;
  top: 62px;
  white-space: nowrap;
}

.InvoiceThumbnail-downloadButton path {
  fill-opacity: 1;
}

.is-desktop .InvoiceThumbnail {
  transition: -webkit-transform 0.1s ease;
  transition: transform 0.1s ease;
  transition: transform 0.1s ease, -webkit-transform 0.1s ease;
}

.is-desktop .InvoiceThumbnail.InvoiceThumbnail-prePayment:active {
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}

.is-desktop .InvoiceThumbnail-prePayment .InvoiceThumbnail-downloadButton {
  background-color: #ffffff;
  padding: 3px 6px;
  right: -12px;
}

.is-desktop .InvoiceThumbnail-downloadButtonText {
  display: inline-block;
  line-height: 1;
  overflow: hidden;
}

.is-desktop .InvoiceThumbnail-downloadIcon {
  vertical-align: baseline;
}

.is-desktop
  .InvoiceThumbnail:hover
  .InvoiceThumbnail-downloadButton
  .InvoiceThumbnail-downloadIcon
  path {
  fill: hsla(0, 0%, 10%, 0.8);
}

.is-desktop
  .InvoiceThumbnail-downloadButton
  .InvoiceThumbnail-downloadButtonText {
  color: hsla(0, 0%, 10%, 0.5);
  transition: color 0.2s ease;
}

.is-desktop
  .InvoiceThumbnail:hover
  .InvoiceThumbnail-downloadButton
  .InvoiceThumbnail-downloadButtonText {
  color: hsla(0, 0%, 10%, 0.8);
}

.Button {
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.1s ease-in, -webkit-transform 0.08s ease-in;
  transition: background-color 0.1s ease-in, transform 0.08s ease-in;
  transition: background-color 0.1s ease-in, transform 0.08s ease-in,
    -webkit-transform 0.08s ease-in;
}

.Button--md {
  font-size: 14px;
  padding: 8px 16px;
}

.Button--link {
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  border: none;
  border-radius: 0;
  color: #0074d4;
  outline: none;
  padding: 0;
  text-decoration-skip-ink: none;
}

.Button--link:disabled:hover {
  cursor: default;
}

.Button-Icon {
  -ms-flex-negative: 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  margin-right: 8px;
}

.Button-Icon--right {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  margin-left: 8px;
  margin-right: 0;
  -webkit-order: 1;
  order: 1;
}

.InvoiceSummaryPrePayment .MobileViewInvoiceDetailsLink {
  margin-top: 32px;
}

.ViewInvoiceDetailsLink .Text {
  color: hsla(0, 0%, 10%, 0.5);
}

.ViewInvoiceDetailsLink .InlineSVG {
  margin-left: 4px;
}

.ViewInvoiceDetailsLink.ViewInvoiceDetailsLink-close .InlineSVG {
  margin-left: 6px;
}

.ViewInvoiceDetailsLink:hover .Text {
  color: hsla(0, 0%, 10%, 0.8);
}

.ViewInvoiceDetailsLink .InlineSVG path {
  fill: hsla(0, 0%, 10%, 0.5);
}

.ViewInvoiceDetailsLink:hover .InlineSVG path {
  fill: hsla(0, 0%, 10%, 0.8);
}

.is-desktop .InvoiceSummaryPostPayment .InvoiceThumbnail {
  margin-bottom: 24px;
}

.is-desktop .InvoiceSummaryPostPaymentAmount {
  font-size: 36px;
}

.LabeledTableRow--wide > td:first-child {
  padding-right: 24px;
}

.LabeledTableRow .LabeledTableRow--valueWithLineBreaks {
  white-space: pre-wrap;
}

.LabeledTableRow td:last-child {
  word-break: break-word;
}

.ViewInvoiceDetailsRow-linkContainer {
  border-top: 1px solid hsla(0, 0%, 10%, 0.1);
  margin-top: 12px;
  padding-top: 12px;
}

.ViewInvoiceDetailsRow-linkContainer > * + * {
  margin-left: 12px;
}

.InvoiceDetails-table {
  width: 100%;
}

.BrandIcon {
  height: 16px;
}

.BrandIcon.is-bank {
  border-radius: 2.5px;
  height: 18px;
}

.SubmitButton {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 0;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgba(50, 50, 93, 0.1),
    0 2px 5px 0 rgba(50, 50, 93, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.07);
  color: #ffffff;
  cursor: pointer;
  height: 44px;
  margin-top: 12px;
  outline: none;
  overflow: hidden;
  padding: 0;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: all 0.2s ease, box-shadow 0.08s ease-in;
  width: 100%;
}

.SubmitButton:disabled {
  cursor: default;
}

.SubmitButton-Shimmer {
  bottom: 0;
  content: '';
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  -webkit-transform: translateX(-150%);
  -ms-transform: translateX(-150%);
  transform: translateX(-150%);
  transition: opacity 0.2s ease;
  width: 150%;
}

.SubmitButton-Text {
  left: 0;
  line-height: 44px;
  position: absolute;
  text-align: center;
  top: 0;
  transition: all 0.2s ease;
  width: 100%;
}

.SubmitButton-IconContainer {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  -webkit-transform: translateX(-16px);
  -ms-transform: translateX(-16px);
  transform: translateX(-16px);
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  width: 100%;
}

.SubmitButton-Icon {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  transition: all 0.2s ease;
}

.SubmitButton-SpinnerIcon .Icon,
.SubmitButton-SpinnerIcon svg {
  height: 20px;
  width: 20px;
}

.SubmitButton-SpinnerIcon ellipse {
  stroke-width: 1;
  stroke-linecap: round;
  stroke-dasharray: 70;
  stroke-dashoffset: 30;
  fill: transparent;
  -webkit-animation: spinner-spin 0.6s linear infinite;
  animation: spinner-spin 0.6s linear infinite;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

.SubmitButton-CheckmarkIcon {
  left: 50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(calc(-50% + 2px)) translateX(-50%) scale(0.6);
  -ms-transform: translateY(calc(-50% + 2px)) translateX(-50%) scale(0.6);
  transform: translateY(calc(-50% + 2px)) translateX(-50%) scale(0.6);
}

.SubmitButton-CheckmarkIcon path {
  stroke-linecap: round;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  opacity: 0;
}

.SubmitButton--clickable:hover,
.SubmitButton--complete:hover {
  background-color: rgb(0, 94, 187);
  box-shadow: inset 0 0 0 1px rgba(50, 50, 93, 0.1),
    0 6px 15px 0 rgba(50, 50, 93, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}

.SubmitButton--clickable:active,
.SubmitButton--complete:active {
  -webkit-transform: scale(0.99);
  -ms-transform: scale(0.99);
  transform: scale(0.99);
}

.SubmitButton--clickable:focus,
.SubmitButton--complete:focus,
.SubmitButton--incomplete:focus {
  box-shadow: inset 0 0 0 1px rgba(50, 50, 93, 0.1),
    0 6px 15px 0 rgba(50, 50, 93, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.1),
    0 0 0 4px rgba(50, 151, 211, 0.3);
}

.SubmitButton--complete-Shimmer {
  -webkit-animation: shimmer-move 3s ease infinite;
  animation: shimmer-move 3s ease infinite;
  opacity: 1;
}

.SubmitButton--complete:hover.SubmitButton--complete-Shimmer {
  opacity: 0.6;
}

.SubmitButton-Text--pre {
  opacity: 0;
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

.SubmitButton-Icon--post,
.SubmitButton-Icon--pre {
  opacity: 0;
  -webkit-transform: translateY(-50%) scale(0.9);
  -ms-transform: translateY(-50%) scale(0.9);
  transform: translateY(-50%) scale(0.9);
}

.SubmitButton-Icon--current {
  opacity: 1;
}

.CheckboxField .Checkbox {
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  -webkit-align-items: baseline;
  align-items: baseline;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.Checkbox-InputContainer {
  margin-right: 12px;
  position: relative;
  top: 4px;
}

.Checkbox-StyledInput {
  background-color: transparent;
  border-radius: 2px;
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  display: block;
  height: 16px;
  min-width: 16px;
  pointer-events: none;
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in, filter 50000s;
  width: 16px;
}

.Checkbox-StyledInput,
.Checkbox-StyledInput:before {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.Checkbox-StyledInput:before {
  border: 0;
  border-bottom: 3px solid hsla(0, 0%, 10%, 0.9);
  border-right: 3px solid hsla(0, 0%, 10%, 0.9);
  box-sizing: initial;
  content: ' ';
  cursor: default;
  display: none;
  height: 14px;
  left: 7px;
  position: absolute;
  top: -5px;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  width: 5px;
}

.Checkbox-Input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  height: 16px;
  opacity: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 16px;
}

.Checkbox-Label {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.Checkbox-Input:focus ~ .Checkbox-StyledInput {
  box-shadow: 0 0 0 1px rgba(50, 151, 211, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.07),
    0 0 0 4px rgba(50, 151, 211, 0.3);
  z-index: 2;
}

.ConfirmTerms {
  line-height: 17px;
  text-align: center;
}

.ConfirmTerms .Link {
  white-space: nowrap;
}

.ConfirmPayment-PostSubmit {
  margin-top: 12px;
}

.ConfirmPayment-PostSubmit .LinkLogOutButton-Container {
  margin-top: 8px;
}

.ConfirmPayment-PostSubmit .ClimateProgramBadge-Container {
  border-bottom: none;
  border-top: 1px solid hsla(0, 0%, 10%, 0.1);
  margin-top: 24px;
  padding-top: 24px;
}

.InputContainer {
  display: block;
  margin: 0;
  padding: 0;
  position: relative;
}

.InputContainer:after {
  content: attr(data-max);
  height: 0;
  visibility: hidden;
}

.InputContainer .InputElement {
  position: absolute;
  top: 0;
}

.InputContainer .InputElement::-webkit-input-placeholder {
  -webkit-text-fill-color: currentColor;
}

.InputContainer .InputElement::-moz-placeholder {
  -webkit-text-fill-color: currentColor;
}

.InputContainer .InputElement:-ms-input-placeholder {
  -webkit-text-fill-color: currentColor;
}

.InputContainer .InputElement::placeholder {
  -webkit-text-fill-color: currentColor;
}

.InputContainer .InputElement::-moz-placeholder {
  color: #000;
}

.CheckoutInputContainer {
  position: relative;
}

.CheckoutInput {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: white;
  border: 0;
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
  color: hsla(0, 0%, 10%, 0.9);
  font-size: 16px;
  height: 44px;
  line-height: 1.5;
  padding: 8px 12px;
  position: relative;
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in, filter 50000s;
  width: 100%;
}

.CheckoutInput:-ms-input-placeholder {
  color: hsla(0, 0%, 10%, 0.5);
}

.CheckoutInput::placeholder {
  color: hsla(0, 0%, 10%, 0.5);
}

.CheckoutInput::-webkit-input-placeholder {
  color: hsla(0, 0%, 10%, 0.5);
}

.CheckoutInput::-moz-placeholder {
  color: hsla(0, 0%, 10%, 0.5);
}

.CheckoutInput + .InputContainer-placeholder--ie {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 16px;
  left: 12px;
  top: 9px;
  z-index: 2;
}

.CheckoutInput:focus {
  box-shadow: 0 0 0 1px rgba(50, 151, 211, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.07),
    0 0 0 4px rgba(50, 151, 211, 0.3);
  outline: none;
  z-index: 2;
}

.CheckoutInput--fakeAutofill,
.CheckoutInput:-webkit-autofill {
  -webkit-text-fill-color: hsla(0, 0%, 10%, 0.9);
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05), inset 0 0 0 1000px #fefbe7;
  transition: background-color 100000000s, box-shadow 0s linear;
}

.CheckoutInput--fakeAutofill::-webkit-input-placeholder,
.CheckoutInput:-webkit-autofill::-webkit-input-placeholder {
  -webkit-text-fill-color: hsla(0, 0%, 10%, 0.5);
}

.CheckoutInput--fakeAutofill::placeholder,
.CheckoutInput:-webkit-autofill::placeholder {
  -webkit-text-fill-color: hsla(0, 0%, 10%, 0.5);
}

.CheckoutInput--fakeAutofill:focus,
.CheckoutInput:-webkit-autofill:focus {
  box-shadow: 0 0 0 1px rgba(50, 151, 211, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.07),
    0 0 0 4px rgba(50, 151, 211, 0.3), inset 0 0 0 1000px #fefbe7;
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in, filter 50000s;
}

.CheckoutInput:disabled {
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05), inset 0 0 0 1000px hsla(0, 0%, 10%, 0.1);
  color: hsla(0, 0%, 10%, 0.4);
  transition: background-color 100000000s, box-shadow 0s linear;
}

.CheckoutInput--fakeAutofill:disabled,
.CheckoutInput:disabled:-webkit-autofill {
  -webkit-text-fill-color: hsla(0, 0%, 10%, 0.4);
}

.CheckoutInput::-ms-clear {
  display: none;
}

.InputContainer com-1password-op-button {
  display: none !important;
}

.FieldError {
  pointer-events: none;
  -webkit-transform-origin: top left;
  -ms-transform-origin: top left;
  transform-origin: top left;
  transition: all 0.3s ease;
}

.FieldError:not:empty {
  margin-top: 4px;
}

.FormFieldInput {
  position: relative;
}

.FormFieldInput-Icon {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  padding-right: 12px;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
}

.FormFieldInput.is-select .FormFieldInput-Icon {
  left: 0;
  padding-left: 12px;
  right: auto;
}

.FormFieldInput.is-select.icon-right .FormFieldInput-Icon {
  left: auto;
  padding-right: 32px;
  right: 0;
}

.FormFieldInput.has-icon .CheckoutInput {
  padding-right: 28px;
}

.FormFieldInput.is-select.has-icon .CheckoutInput {
  padding-right: 12px;
}

.FormFieldInput-Icons {
  height: 100%;
  padding-right: 8px;
  position: absolute;
  right: 0;
  top: 0;
}

.FormFieldInput-Icons,
.FormFieldInput-IconsIcon {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  pointer-events: none;
  z-index: 3;
}

.FormFieldInput-IconsIcon {
  padding-right: 4px;
}

.FormFieldInput-Icon.is-disabled img,
.FormFieldInput-Icon.is-disabled svg {
  -webkit-filter: grayscale(0.8);
  filter: grayscale(0.8);
  opacity: 0.4;
}

.FormFieldInput-Icon img,
.FormFieldInput-Icon svg {
  opacity: 0;
  -webkit-transform: scale(0.7);
  -ms-transform: scale(0.7);
  transform: scale(0.7);
  transition: opacity 0.7s cubic-bezier(0.075, 0.82, 0.165, 1),
    -webkit-transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.7s cubic-bezier(0.075, 0.82, 0.165, 1),
    -webkit-transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.FormFieldInput-Icon.is-loaded img,
.FormFieldInput-Icon.is-loaded svg {
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.FormFieldInput-Icon.is-select svg,
.FormFieldInput.is-select img {
  opacity: 1;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  transition: none;
}

.FormFieldInput.is-select.has-icon select {
  text-indent: 26px;
}

.FormFieldInput.is-select.icon-right.has-icon select {
  text-indent: unset;
}

.FormFieldGroup-Fieldset {
  border: none;
  margin: 4px 0 0;
  padding: 0;
}

.FormFieldGroup-labelContainer {
  overflow-wrap: anywhere;
  position: relative;
}

.FormFieldGroup-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
}

.FormFieldGroup-child {
  -webkit-box-flex: 0;
  box-sizing: border-box;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  max-width: 100%;
  min-width: 0;
  -webkit-transform-origin: '0%';
  -ms-transform-origin: '0%';
  transform-origin: '0%';
}

.FormFieldGroup-child--width-12 {
  width: 100%;
}

.FormFieldGroup-child--width-6 {
  width: 50%;
}

.FormFieldGroup-child .CheckoutInput,
.FormFieldGroup-child .Select-source {
  border-radius: 0;
}

.FormFieldGroup-childTop.FormFieldGroup-childLeft .CheckoutInput,
.FormFieldGroup-childTop.FormFieldGroup-childLeft .Select-source {
  border-top-left-radius: 6px;
}

.FormFieldGroup-childTop.FormFieldGroup-childRight .CheckoutInput,
.FormFieldGroup-childTop.FormFieldGroup-childRight .Select-source {
  border-top-right-radius: 6px;
}

.FormFieldGroup-childBottom.FormFieldGroup-childLeft .CheckoutInput,
.FormFieldGroup-childBottom.FormFieldGroup-childLeft .Select-source {
  border-bottom-left-radius: 6px;
}

.FormFieldGroup-childBottom.FormFieldGroup-childRight .CheckoutInput,
.FormFieldGroup-childBottom.FormFieldGroup-childRight .Select-source {
  border-bottom-right-radius: 6px;
}

.CardFormFieldGroupIconOverflow {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 16px;
  position: relative;
  width: 28px;
}

.CardFormFieldGroupIconOverflow-Item {
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.4s ease;
  transition-delay: 0.15s;
}

.CardFormFieldGroupIconOverflow-Item--visible {
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.CardFormFieldGroupIconOverflow-Item--invisible {
  opacity: 0;
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}

.ContentCard {
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(175, 175, 175, 0.2),
    0 15px 35px 0 rgba(49, 49, 93, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 16px;
  padding: 32px;
  width: 100%;
}

.ContentCard.ContentCard--noMargin {
  margin-bottom: 0;
}

.ContentCard.ContentCard--noPadding {
  padding: 0;
}

.ContentCard.ContentCard--noBorderRadius {
  border-radius: 0;
}

.ContentCard.ContentCard--mobile {
  box-shadow: none;
  padding: 16px;
}

@media screen {
  .ContentCard.ContentCard--stripeJs {
    background-color: transparent;
    box-shadow: none;
    margin-bottom: 0;
    padding: 16px 32px;
  }
}

@media print {
  .ContentCard {
    background-color: transparent;
    box-shadow: none;
    padding: 16px;
  }
}

.ContentCard.PayNowInstructionsText-ContentCard {
  padding: 16px;
}

.ContentCard.PromptPayInstructionsText-ContentCard {
  padding: 16px;
}

.ContentCard.QrisInstructionsText-ContentCard {
  padding: 16px;
}

.ContentCard.WechatPayInstructionsText-ContentCard {
  padding: 16px;
}

.Tabs-Container {
  position: relative;
}

.Tabs-TabPanelContainer > :nth-last-child(2):first-child {
  position: absolute;
}

.Tabs-TabList {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.Tabs.is-contenttabs .Tabs-TabList {
  box-shadow: inset 0 -1px #e3e8ee;
}

.Tabs.is-contenttabs .Tabs-TabList,
.Tabs.is-insettabs .Tabs-TabList {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

.Tabs.is-insettabs .Tabs-TabList {
  border: 1px solid hsla(0, 0%, 10%, 0.1);
  border-radius: 8px;
  padding: 2px;
}

.Tabs.is-insettabs .Tabs-TabListItem--overflow-toggle .Tabs-TabListItemContent {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 20px;
  -webkit-justify-content: center;
  justify-content: center;
}

.Tabs.is-insettabs .Tabs-TabListItem--overflow-toggle .Icon {
  margin-top: 0;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer {
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(175, 175, 175, 0.2),
    0 15px 35px 0 rgba(49, 49, 93, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.06);
  display: none;
  padding: 6px 0;
}

.Tabs.is-desktop.is-icontabs .Tabs-TabList > .Tabs-TabListItemContainer {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0%;
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
  max-width: 100%;
  min-width: 0;
}

.Tabs.is-desktop.is-icontabs .Tabs-TabList--wrap > .Tabs-TabListItemContainer {
  margin: 0 8px 8px 0;
}

.Tabs.is-desktop.is-contenttabs .Tabs-TabList > .Tabs-TabListItemContainer {
  -webkit-box-flex: 0;
  -webkit-flex: 0;
  -ms-flex: 0;
  flex: 0;
}

.Tabs.is-desktop
  .Tabs-TabList
  > .Tabs-TabListItemContainer.Tabs-TabListItemContainer--overflow-button {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListItemContainer {
  margin: 0;
  padding: 0;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListItem:after {
  display: none;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListItem:not(:focus) {
  box-shadow: none;
  position: static;
}

.Tabs.is-desktop .Tabs-TabListItem:hover .Tabs-TabListItemContent {
  opacity: 1;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListItem:hover {
  background-color: hsla(0, 0%, 10%, 0.1);
}

.Tabs.is-desktop
  .Tabs-TabListOverflowContainer
  .Tabs-TabListItem:hover
  .Tabs-TabListItemContent {
  opacity: 1;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListPaymentMethod {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListPaymentIcon {
  min-width: 28px;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListPaymentIcon img {
  display: block;
  margin: 0 auto;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListItem {
  border: 0;
  border-radius: 0;
  padding: 8px 12px;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListPaymentMethod {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListPaymentLabel {
  margin-left: 12px;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer {
  display: block;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: -6px;
  top: -6px;
  -webkit-transform: translateY(4px);
  -ms-transform: translateY(4px);
  transform: translateY(4px);
  transition: opacity 0.2s ease, -webkit-transform 0.2s ease;
  transition: opacity 0.2s ease, transform 0.2s ease;
  transition: opacity 0.2s ease, transform 0.2s ease,
    -webkit-transform 0.2s ease;
  z-index: 9999;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer--is-visible {
  opacity: 1;
  pointer-events: auto;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  transition: opacity 0.25s cubic-bezier(0, 1, 0.4, 1),
    -webkit-transform 0.25s cubic-bezier(0.18, 1.25, 0.4, 1);
  transition: opacity 0.25s cubic-bezier(0, 1, 0.4, 1),
    transform 0.25s cubic-bezier(0.18, 1.25, 0.4, 1);
  transition: opacity 0.25s cubic-bezier(0, 1, 0.4, 1),
    transform 0.25s cubic-bezier(0.18, 1.25, 0.4, 1),
    -webkit-transform 0.25s cubic-bezier(0.18, 1.25, 0.4, 1);
}

.Tabs.is-desktop
  .Tabs-TabListItemContainer--overflow-button
  .Tabs-TabListItem:focus {
  box-shadow: 0 0 0 1px #e0e0e0;
}

.Tabs.is-desktop .Tabs-TabList--wrap {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: start;
  justify-content: start;
}

.Tabs.is-desktop .Tabs-TabList--wrap .Tabs-TabListItemContainer {
  margin-left: 0;
}

.Tabs.is-desktop .Tabs-TabList.Tabs-TabList--wrap > .Tabs-TabListItemContainer {
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: max-content;
  min-width: -webkit-min-content;
  min-width: -moz-min-content;
  min-width: min-content;
}

.Tabs.is-mobile .Tabs-TabList {
  left: 50%;
  margin: -16px -50vw;
  overflow-x: scroll;
  overflow-x: -moz-scrollbars-none;
  padding-bottom: 16px;
  padding-top: 16px;
  position: relative;
  right: 50%;
  scrollbar-width: none;
  width: 100vw;
}

.Tabs.is-mobile.is-overflowing .Tabs-TabListItemContainer {
  -ms-flex-preferred-size: 27vw;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  -ms-flex-negative: 0;
  -webkit-flex-basis: 27vw;
  flex-basis: 27vw;
  -webkit-flex-grow: 0;
  flex-grow: 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}

@media only screen and (max-width: 320px) {
  .Tabs.is-mobile.is-overflowing .Tabs-TabListItemContainer {
    -ms-flex-preferred-size: 26vw;
    -webkit-flex-basis: 26vw;
    flex-basis: 26vw;
  }
}

.Tabs.is-mobile .Tabs-TabList > .Tabs-TabListItemContainer:first-of-type {
  margin-left: 16px;
}

.Tabs.is-mobile .Tabs-TabList > .Tabs-TabListItemContainer:last-of-type {
  padding-right: 16px;
}

.Tabs.is-mobile .Tabs-TabListItemContainer--overflow-button {
  display: none;
}

@media only screen and (min-width: 412px) {
  .Tabs.is-mobile .Tabs-TabList > .Tabs-TabListItemContainer:first-of-type {
    margin-left: calc(50vw - 190px);
  }

  .Tabs.is-mobile .Tabs-TabList > .Tabs-TabListItemContainer:last-of-type {
    padding-right: calc(50vw - 190px);
  }
}

.Tabs.is-mobile .Tabs-TabList::-webkit-scrollbar {
  display: none;
}

.Tabs.is-mobile.is-insettabs .Tabs-Container {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
}

.Tabs.is-mobile.is-insettabs .Tabs-TabList {
  margin-bottom: 0;
  margin-top: 0;
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: max-content;
  padding-bottom: 2px;
  padding-top: 2px;
}

.Tabs.is-mobile.is-insettabs
  .Tabs-TabList
  > .Tabs-TabListItemContainer:first-of-type {
  margin-left: 0;
}

.Tabs.is-mobile.is-insettabs
  .Tabs-TabList
  > .Tabs-TabListItemContainer:last-of-type {
  padding-right: 0;
}

@media only screen and (max-width: 575.98px) {
  .Tabs.is-insettabs .Tabs-TabListItem {
    padding: 6px 12px;
  }
}

.Tabs.is-icontabs .Tabs-TabListItemContainer,
.Tabs.is-icontabs .Tabs-TabListOverflowContainer {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  -ms-flex: 1 1;
  flex: 1 1;
  margin-left: 8px;
}

.Tabs.is-contenttabs .Tabs-TabListItemContainer,
.Tabs.is-contenttabs .Tabs-TabListOverflowContainer {
  margin-left: 8px;
}

.Tabs .Tabs-TabListItemContainer:first-of-type {
  margin-left: 0;
}

.Tabs-TabListItem {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  /* !important to override normalize.css */
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  border: 0;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-weight: 500;
  height: 100%;
  position: relative;
  text-align: left;
  transition: box-shadow 0.08s ease-in, border 0.08s ease-in;
  width: 100%;
}

.Tabs.is-icontabs .Tabs-TabListItem {
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 0 1px #e0e0e0;
  color: hsla(0, 0%, 10%, 0.9);
  font-size: 12px;
  padding: 10px 12px 8px;
}

.Tabs.is-icontabs .Tabs-TabListItem:focus-visible {
  box-shadow: 0 0 0 1px rgba(50, 151, 211, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.07),
    0 0 0 4px rgba(50, 151, 211, 0.3);
}

.Tabs.is-contenttabs .Tabs-TabListItem {
  background-color: transparent;
  font-size: 14px;
  height: auto;
  line-height: 20px;
  padding: 4px 0;
}

.Tabs.is-insettabs .Tabs-TabListItem:focus-visible {
  box-shadow: 0 0 0 1px rgba(50, 151, 211, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.07),
    0 0 0 4px rgba(50, 151, 211, 0.3);
}

.Tabs.is-insettabs .Tabs-TabListItem {
  background-color: transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 20px;
  padding: 8px 32px;
}

.Tabs-TabListItem::-moz-focus-inner {
  outline: 0 !important;
}

.Tabs-TabListItem:focus {
  outline: 0 !important;
}

.Tabs-TabListItem:focus-visible {
  box-shadow: 0 0 0 1px rgba(50, 151, 211, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.07),
    0 0 0 4px rgba(50, 151, 211, 0.3);
}

.Tabs-TabListItem:after {
  bottom: 0;
  content: '';
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease;
  will-change: transform;
}

.Tabs.is-icontabs .Tabs-TabListItem:after {
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07), 0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
}

.Tabs.is-contenttabs .Tabs-TabListItem:after {
  background: #5469d4;
  height: 2px;
  left: -1px;
  position: absolute;
  top: calc(100% - 2px);
}

.Tabs.is-insettabs .Tabs-TabListItem:after {
  background: hsla(0, 0%, 10%, 0.1);
  bottom: 8px;
  height: calc(100% - 16px);
  opacity: 1;
  top: 8px;
  width: 1px;
}

.Tabs.is-insettabs .Tabs-TabListItem--is-selected:after,
.Tabs.is-insettabs
  .Tabs-TabListItemContainer--is-selected
  + .Tabs-TabListItemContainer
  .Tabs-TabListItem:after,
.Tabs.is-insettabs
  .Tabs-TabListItemContainer:first-child
  .Tabs-TabListItem:after {
  opacity: 0;
}

.Tabs.is-icontabs .Tabs-TabListItem--is-selected:after {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07), 0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
}

.Tabs.is-icontabs .Tabs-TabListItem--is-selected:after,
.Tabs.is-icontabs .Tabs-TabListItem:hover:after {
  opacity: 1;
}

.Tabs.is-icontabs .Tabs-TabListItem--is-selected {
  box-shadow: 0 0 0 1px hsla(0, 0%, 10%, 0.9), 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
}

.Tabs.is-icontabs .Tabs-TabListItem--is-selected:focus {
  box-shadow: 0 0 0 1px hsla(0, 0%, 10%, 0.9), 0 1px 1px 0 rgba(0, 0, 0, 0.07),
    0 0 0 4px rgba(50, 151, 211, 0.3);
}

.Tabs.is-contenttabs .Tabs-TabListItem {
  opacity: 0.8;
}

.Tabs.is-contenttabs .Tabs-TabListItem--is-selected:after {
  opacity: 1;
}

.Tabs.is-contenttabs .Tabs-TabListItem--is-selected {
  color: #5469d4;
  opacity: 1;
}

.Tabs.is-insettabs .Tabs-TabListItem:hover {
  -webkit-filter: brightness(0.97);
  filter: brightness(0.97);
}

.Tabs.is-insettabs .Tabs-TabListItem--is-selected {
  background-color: #5469d4;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07), 0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
  color: #ffffff;
  font-weight: 500;
}

.Tabs.is-insettabs .Tabs-TabListPaymentLabel:after {
  content: attr(data-text);
  content: attr(data-text) / '';
  font-weight: 500;
  height: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  visibility: hidden;
}

@media speech {
  .Tabs.is-insettabs .Tabs-TabListPaymentLabel:after {
    display: none;
  }
}

.Tabs.is-disabled .Tabs-TabListItem {
  cursor: auto;
}

.Tabs-TabListItem .Tabs-TabListItemContent {
  min-width: 0;
  opacity: 0.7;
  overflow: hidden;
  transition: opacity 0.2s ease;
  width: 100%;
  will-change: opacity;
}

.Tabs-TabListItem--is-selected .Tabs-TabListItemContent {
  opacity: 1;
}

.Tabs-TabListItem .Tabs-TabListItemContent svg {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.Tabs-TabListPaymentMethod {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.Tabs-TabListPaymentIcon {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  position: relative;
}

.Tabs-TabListPaymentLabel {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 100%;
  -ms-flex: 0 1 100%;
  flex: 0 1 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Tabs-TabPanelContainer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 24px;
  position: relative;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListPaymentIcon {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-order: 1;
  order: 1;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListPaymentLabel {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-left: 4px;
  -webkit-order: 2;
  order: 2;
}

.Tabs.is-desktop .Tabs-TabListOverflowContainer .Tabs-TabListPaymentBadge {
  -webkit-box-ordinal-group: 4;
  -ms-flex-order: 3;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  margin-left: 8px;
  -webkit-order: 3;
  order: 3;
}

.Icon.debitCardIcon {
  width: 16px;
}

.PaymentRequestOrHeader {
  position: relative;
}

.ButtonAndDividerContainer,
.PaymentHeaderContainer {
  width: 100%;
}

.ButtonAndDividerContainer .PaymentRequestButtonContainer,
.ButtonAndDividerContainer .PaypalButtonContainer {
  margin-bottom: 16px;
}

.PaymentHeader {
  padding-bottom: 16px;
}

.ButtonAndDividerContainer .Divider {
  padding-bottom: 32px;
  padding-top: 16px;
}

.App-Global-Fields {
  margin-bottom: 8px;
}

.PaymentForm-paymentMethodForm .ShippingDetails-Heading {
  margin-top: 12px;
}

.Tabs-TabListItem#promptpay-tab .Tabs-TabListItemContent svg,
.Tabs-TabListItem#wechat_pay-tab .Tabs-TabListItemContent svg {
  -webkit-filter: none;
  filter: none;
}

.is-desktop .Drawer-content {
  bottom: 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  transition: all 0.2s ease;
}

.is-desktop .Drawer-hidden .Drawer-content {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}

.is-desktop .InvoiceDetailsDrawer {
  height: 100%;
  width: 514px;
}

.is-desktop .InvoiceDetailsDrawer-header {
  padding: 16px 32px;
}

.is-desktop .InvoiceDetailsDrawer-content {
  padding: 16px 32px 32px;
}

.App-contents {
  z-index: 1;
}

.is-desktop .App-contents {
  -webkit-animation: enter-background-shadow 0.6s;
  animation: enter-background-shadow 0.6s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.is-desktop .App-contents > .flex-item {
  padding-left: 0;
  padding-right: 0;
}

.is-desktop .App-contents .App-InvoiceDetails {
  margin-top: 32px;
}

/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
html {
  -webkit-text-size-adjust: 100%;
  line-height: 1.15;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[type='button'],
[type='reset'],
[type='submit'],
button {
  -webkit-appearance: button;
}

[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

[hidden],
template {
  display: none;
}

.mt4 {
  margin-top: 16px;
}

.custom-bottom-radius {
  border-radius: 0px 0px 6px 6px !important;
}

.submit-button-color {
  background-color: rgb(0, 116, 212) !important;
  color: rgb(255, 255, 255) !important;
}
</style>
