<template>
  <div class="spreadsheet-editor">
    <div class="flex items-center">
      <!-- Sheet name  -->
      <div v-if="modifySubsheetName" class="flex items-center mt-4">
        <input
          v-model="subsheetName"
          class="subsheet-rename-input"
          @keyup.enter="handleModifySubsheetName(subsheet.id)"
        />
        <div
          class="cursor-pointer"
          style="position: relative; right: 16px"
          @click="onModifySubsheetNameCancel"
        >
          <vs-icon icon="close"></vs-icon>
        </div>
      </div>
      <div
        v-else
        :class="['sheet-name', { 'sheet-name-hover': accessLevel < 3 }]"
        @dblclick="handleRename"
      >
        <p>{{ subsheetName }}</p>
        <div class="absolute right-0">
          <div class="show-on-hover ml-1 mt-1">
            <vs-dropdown vs-custom-content vs-trigger-click>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10l5 5 5-5z" />
              </svg>
              <vs-dropdown-menu class="spreadsheet-list-dropdown-items">
                <vs-dropdown-item>
                  <p @click.stop="handleRename">Rename Subsheet</p>
                </vs-dropdown-item>
                <vs-dropdown-item>
                  <p
                    class="text-danger"
                    @click.stop="openDeleteWarningDialog(subsheet.id)"
                  >
                    Delete Subsheet
                  </p>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
        </div>
      </div>
      <!-- Sheet name End -->
    </div>

    <div class="table-tools flex items-center space-x-5">
      <!-- Spreadsheet Filter  -->
      <div class="spreadsheet-filters">
        <spreadsheet-filters
          ref="filterField"
          :filters="subsheet.filter"
          :subsheetId="subsheet.id"
          :spreadsheetId="spreadsheetId"
          :accessLevel="accessLevel"
          @updateSpreadsheet="updateSpreadsheet(subsheet.id)"
        />
      </div>
      <spreadsheet-sort
        ref="spreadsheetSort"
        :sortSchemaData="subsheet.sortSchema"
        :columns="sortHeaders"
        :subsheetId="subsheet.id"
        :spreadsheetId="spreadsheetId"
        @handleSortSchema="handleSortSchema"
      />
      <!-- Spreadsheet Filter End -->

      <!-- Height changer start -->
      <div class="spreadsheet-height-changer">
        <vs-dropdown vs-custom-content vs-trigger-click>
          <div class="flex items-center cursor-pointer mt-1">
            <!-- <img :src="rowHeightIcons" /> -->
            <img :src="rowHeightIcon" class="mr-2" />
            <span class="text-row-height">Row Height</span>
          </div>
          <vs-dropdown-menu class="spreadsheet-list-dropdown-items">
            <vs-dropdown-item>
              <div
                class="flex items-center"
                :class="{ 'text-primary': rowHeight === 'short' }"
                @click="resizeColumnHeight"
                data-size="short"
              >
                <img :src="rowHeightShortIcon" />
                <span class="ml-1">Short</span>
              </div>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <div
                class="flex items-center"
                :class="{ 'text-primary': rowHeight === 'medium' }"
                @click="resizeColumnHeight"
                data-size="medium"
              >
                <img :src="rowHeightMediumIcon" />
                <span class="ml-1">Medium</span>
              </div>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <div
                class="flex items-center"
                :class="{ 'text-primary': rowHeight === 'tall' }"
                @click="resizeColumnHeight"
                data-size="tall"
              >
                <img :src="rowHeightTallIcon" />
                <span class="ml-1">Tall</span>
              </div>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>
      <!-- height changer end -->
      <!-- Text formatter block  -->
      <!-- Level below 4 (owner, admin, editor) have edit permission hence format access as well -->
      <div class="formatter-block" v-if="!isViewer">
        <!-- Strike through icon  -->
        <div class="formatter-icon" @click="applyStrikethrough">
          <svg
            id="strikethrough_s"
            fill="#626262"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
          >
            <path
              d="M10.125 15.917q-1.5 0-2.625-.875T6 12.729l1.688-.687q.333 1.062.968 1.604.636.542 1.511.542.937 0 1.489-.448t.552-1.198q0-.334-.125-.615-.125-.281-.375-.51h2.146q.104.229.136.489.031.261.031.615 0 1.5-1.083 2.448-1.084.948-2.813.948ZM2 9.917v-1.5h16v1.5Zm8-6q1.333 0 2.208.562.875.563 1.417 1.792L12 6.979q-.229-.625-.76-1.01-.532-.386-1.198-.386-.771 0-1.282.375-.51.375-.552.959H6.396q.042-1.313 1.062-2.157Q8.479 3.917 10 3.917Z"
            />
          </svg>
        </div>
        <!-- Font Text color picker  -->
        <ColorPicker
          @input="applyFormatTextColor"
          @reset="resetFormatTextColor"
          :value="textFormatColorSelected"
        >
          <template #trigger>
            <div class="formatter-icon">
              <svg
                id="format_color_text"
                enable-background="new 0 0 20 20"
                height="15px"
                viewBox="0 0 20 20"
                width="15px"
                fill="#626262"
              >
                <g>
                  <g>
                    <rect
                      height="4"
                      width="16"
                      x="2"
                      y="16"
                      :fill="textFormatColorSelected"
                    />
                    <path
                      d="M7.99,10.44h4.04L12.92,13h1.73L10.89,3H9.11L5.35,13h1.73L7.99,10.44z M9.57,6.02l0.39-1.16h0.08l0.39,1.16l1.06,2.98 H8.51L9.57,6.02z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </template>
        </ColorPicker>
        <!-- Fill color picker  -->
        <ColorPicker
          @input="applyFormatFillColor"
          @reset="resetFormatFillColor"
          :value="fillFormatColorSelected"
        >
          <template #trigger>
            <div class="formatter-icon">
              <svg
                id="format_color_fill"
                enable-background="new 0 0 20 20"
                height="15px"
                viewBox="0 0 20 20"
                width="15px"
                fill="#626262"
              >
                <g>
                  <g>
                    <path
                      d="M15.25,14c0.96,0,1.75-0.79,1.75-1.75c0-1.16-1.75-3.06-1.75-3.06s-1.75,1.9-1.75,3.06C13.5,13.21,14.29,14,15.25,14z"
                    />
                    <rect
                      height="4"
                      width="16"
                      x="2"
                      y="16"
                      :fill="fillFormatColorSelected"
                    />
                    <path
                      d="M7.03,12.6C7.3,12.87,7.65,13,8,13s0.7-0.13,0.97-0.4l3.63-3.63c0.53-0.53,0.53-1.4,0-1.93L5.57,0L4.51,1.06l2.43,2.43 L3.4,7.03c-0.53,0.53-0.53,1.4,0,1.93L7.03,12.6z M8,4.56L11.44,8H4.56L8,4.56z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </template>
        </ColorPicker>
      </div>
      <div class="flex items-center cursor-pointer" @click="exportToExcel">
        <vs-icon icon="file_download"></vs-icon>
        <span>Export</span>
      </div>
      <div
        class="deleteButton"
        v-if="selectedRows && selectedRows.length > 0"
        @click="onConfirmMultipleSpreadsSheetDeleted()"
      >
        Delete
      </div>

      <div
        class="flex items-center cursor-pointer"
        @click="setCustomizedMergeLoads"
        v-if="hasDefaultGLAccess && selectedRows.length === 2"
      >
        <span>Merge Transplace Loads</span>
      </div>

      <template v-if="isBatchActionsVisible">
        <vs-dropdown class="cursor-pointer">
          <div class="flex items-center">
            <span class="text-row-height">Batch Actions</span>
            <chevron-down-icon size="1x" class="ml-2" />
          </div>
          <vs-dropdown-menu>
            <vs-dropdown-item divider>
              <vs-button
                color="primary"
                class="w-full"
                type="border"
                @click="isMassInvoicePopupActive = true"
              >
                Generate Mass Invoice
              </vs-button>
            </vs-dropdown-item>
            <vs-dropdown-item divider>
              <vs-button
                color="primary"
                class="w-full"
                type="border"
                @click="onRequestMassInvoicePayment"
              >
                Request Mass Invoice Payment
              </vs-button>
            </vs-dropdown-item>
            <vs-dropdown-item divider>
              <vs-button
                color="primary"
                class="w-full"
                type="border"
                @click="onMultipleLoadsPaymentReceived"
              >
                Payment Received
              </vs-button>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </template>
    </div>

    <div
      :class="[
        'overflow-x-auto',
        { 'height-screen table-container': viewMode === 'tab' },
      ]"
    >
      <!-- Spreadsheet table  -->
      <table
        class="spreadsheet-table table-resizable"
        :id="`table-${subsheet.id}`"
      >
        <!-- Spreadsheet Header  -->
        <spreadsheet-header
          :spreadsheetId="spreadsheetId"
          :headers="headers"
          :subsheetId="subsheet.id"
          :accessLevel="accessLevel"
          :sortingOptions="columnSortOptions"
          :sortSchema="sortSchema"
          :filters="subsheet.filter"
          :nonSortableColumns="nonSortableColumns"
          @filterByThisField="filterByThisField"
          @updateSort="updateSortSchema"
          @updateSpreadsheet="updateSpreadsheet(subsheet.id)"
          @removeExistingFilter="removeExistingFilter"
        ></spreadsheet-header>
        <!-- Spreadsheet Header End  -->
        <slot />

        <tbody>
          <tr
            v-for="(record, index) in table"
            :key="index"
            class="show-expand-icon-hover"
            :class="[`height-${rowHeight}`, record.selected ? 'selected' : '']"
          >
            <td>
              <div style="width: 30px" class="row-index">
                <div class="flex items-center">
                  <span class="indexNo">
                    {{ ++index }}
                  </span>
                  <div class="flex items-center justify-between">
                    <div
                      class="checkbox items-center text-white"
                      @click="
                        selectRow({
                          keyId: record.key_id,
                          selected: !record.selected,
                        })
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        class="icon"
                        style="shape-rendering: geometricPrecision"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="currentColor"
                          d="M4.28873956,8.67773237 C4.68155785,9.06558677 5.32353851,9.05881767 5.7149082,8.67029224 L8.99219858,5.41681942 C9.38703148,5.02485595 9.39324696,4.39324696 9,4 L9,4 C8.60947571,3.60947571 7.98900805,3.60797445 7.59455526,4.0169601 L5.35239726,6.34172612 C5.15777363,6.54352029 4.85168871,6.5448785 4.66030753,6.33553882 L4.38384571,6.03313484 C4.01009312,5.62431068 3.39324696,5.60675304 3,6 L3,6 C2.60947571,6.39052429 2.61406454,7.02421959 3.00415366,7.40937929 L4.28873956,8.67773237 Z"
                        ></path>
                      </svg>
                    </div>
                    <div @click="expandRecord(record)" class="expand-icon">
                      <!-- v-if="userRole == 'admin' || userRole == 'dispatcher'" -->
                      <!-- expand icon svg   -->
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        style="shape-rendering: geometricprecision"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="currentColor"
                          d="M5.77546101,13.6834543 L2.81474478,14.1064138 C2.25439084,14.1864644 1.87938524,13.8017775 1.95822565,13.2498947 L2.38118511,10.2891784 C2.45982823,9.73867658 2.83916177,9.616002 3.22968611,10.0065263 L3.93679297,10.7136331 L5.8350897,8.81533646 C6.22830529,8.42212085 6.85864277,8.42494825 7.24916702,8.8154725 C7.64241393,9.20871941 7.6397522,9.83910076 7.24930313,10.2295499 L5.35100654,12.1278466 L6.05811323,12.8349534 C6.45136014,13.2282004 6.32208977,13.6053645 5.77546101,13.6834543 Z M10.2981302,2.3810729 L13.2588464,1.95811344 C13.8192003,1.87806288 14.1942059,2.26274971 14.1153655,2.81463257 L13.6924061,5.7753488 C13.6137629,6.32585066 13.2344294,6.44852523 12.8439051,6.05800094 L12.1367982,5.35089416 L10.2294376,7.25825476 C9.836222,7.65147037 9.20588451,7.64864296 8.81536027,7.25811872 C8.42211336,6.86487181 8.42477509,6.23449046 8.81522416,5.84404133 L10.7225846,3.9366806 L10.0154779,3.22957382 C9.62223103,2.83632686 9.7515014,2.45916273 10.2981302,2.3810729 Z"
                        ></path>
                      </svg>
                      <!-- expand icon svg  End -->
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <!-- spreadsheets columns  -->
            <td
              v-for="(item, columnIndex) in columnFieldData"
              :key="columnIndex"
              :hidden="item.hidden"
              :cellId="`${record.key_id}_${item.columnId}`"
              :customColumnId="`${record.key_id}_${item.customColumnId}`"
              :predefinedColumnId="`${record.key_id}_${item.predefinedColumn}`"
              :style="record[item.columnId].styleObject"
              @click="
                handleColumnFocus({
                  cellId: `${record.key_id}_${item.columnId}`,
                  data: record[item.columnId],
                })
              "
            >
              <!-- cells input   -->
              <div
                v-if="
                  [
                    'loadThirdPartyCarrierBol',
                    'loadThirdPartyCarrierRateCon',
                  ].includes(item.predefinedColumn)
                "
                @click="
                  handleColumnFocus({
                    cellId: `${record.key_id}_${item.columnId}`,
                    data: record[item.columnId],
                  })
                "
                class="cell-export"
              >
                <div
                  class="flex items-center space-x-2"
                  v-if="record[item.columnId].data"
                >
                  <div
                    v-if="record[item.columnId].data.url"
                    @click.stop="
                      openAttachmentDoc(record[item.columnId].data.url)
                    "
                  >
                    <vx-tooltip
                      class="mt-2"
                      :text="
                        item.predefinedColumn === 'loadThirdPartyCarrierBol'
                          ? 'BOL'
                          : 'Rate Con'
                      "
                    >
                      <vs-icon
                        size="small"
                        icon="attachment"
                        class="papper-clip-vertical"
                      ></vs-icon>
                    </vx-tooltip>
                  </div>
                </div>
              </div>
              <template
                v-else-if="['number', 'currency'].includes(item.customType)"
              >
                <input
                  v-if="
                    selectedColumn &&
                    selectedColumn.cellId ===
                      `${record.key_id}_${item.columnId}`
                  "
                  class="cells__input cell-export"
                  :class="[multilineRowHeight]"
                  :style="record[item.columnId].styleObject"
                  :readonly="isViewer || !item.readonly"
                  :type="'number'"
                  :value="
                    handleRecord(
                      record[item.columnId].data,
                      item.amount,
                      item.predefinedColumn,
                      item.customType
                    )
                  "
                  @blur="
                    updateCellValue(
                      $event,
                      record,
                      `${record.key_id}_${item.columnId}`,
                      item.customColumnId,
                      ` ${record.key_id}_${item.customColumnId}`,
                      item
                    )
                  "
                  @input="handleCustomColumnInput($event, item.customType)"
                />
                <div v-else class="cells__input cell-export">
                  {{
                    item.customType === 'currency' && record[item.columnId].data
                      ? '$'
                      : ''
                  }}
                  {{
                    handleRecord(
                      record[item.columnId].data,
                      item.amount,
                      item.predefinedColumn,
                      item.customType
                    )
                  }}
                </div>
              </template>
                  <v-select
                    v-else-if="item.predefinedColumn === 'loadStatus'"
                    :value="record[item.columnId].data"
                    :options="loadStatuses"
                    label="label"
                    :closeOnSelect="true"
                    class="custom-status-select cell-export"
                    :id="
                      record[item.columnId].data.loadId +
                      '-status-' +
                      record[item.columnId]
                    "
                    :disabled="isViewer"
                    @input="
                      ($event) =>
                        onLoadStatusChange(
                          $event,
                          record,
                          record[item.columnId]
                        )
                    "
                  >
                    <template v-slot:option="option">
                      <span
                        :class="{ 'color-red': option.label === 'Canceled' }"
                      >
                        {{ option.label }}
                      </span>
                    </template>
                  </v-select>
              <template
                v-else-if="
                  item.predefinedColumn !== 'loadDriverHos' &&
                  item.predefinedColumn !== 'loadFindCarriers'
                "
              >
                <textarea
                  v-if="item.predefinedColumn != 'loadPod'"
                  class="cells__input cell-export"
                  :class="[multilineRowHeight]"
                  :style="record[item.columnId].styleObject"
                  @blur="
                    updateCellValue(
                      $event,
                      record,
                      `${record.key_id}_${item.columnId}`,
                      item.customColumnId,
                      ` ${record.key_id}_${item.customColumnId}`,
                      item
                    )
                  "
                  :readonly="
                    isViewer ||
                    (!item.readonly &&
                      item.predefinedColumn != 'loadDispatcherNotes')
                  "
                  :value="
                    handleRecord(
                      record[item.columnId].data,
                      item.amount,
                      item.predefinedColumn
                    )
                  "
                  :spellcheck="false"
                >
                </textarea>
                <div
                  v-else-if="((record[item.columnId] || {}).data || []).length"
                  @click="
                    handleColumnFocus({
                      cellId: `${record.key_id}_${item.columnId}`,
                      data: record[item.columnId],
                    })
                  "
                  class="cell-export"
                >
                  <div class="flex items-center space-x-2">
                    <div
                      v-for="item in record[item.columnId].data"
                      :key="item.loadImageId"
                      @click.stop="openPodAttchments(item)"
                    >
                      <vx-tooltip class="mt-2" text="POD available">
                        <vs-icon
                          size="small"
                          icon="attachment"
                          class="papper-clip-vertical"
                        ></vs-icon>
                      </vx-tooltip>
                    </div>
                  </div>
                </div>
                <div v-else class="cell-export" />
              </template>
              <div
                v-else-if="
                  item.predefinedColumn === 'loadFindCarriers' &&
                  record[item.columnId].data
                "
              >
                <div class="flex justify-center items-center">
                  <vs-button
                    color="primary"
                    type="border"
                    size="small"
                    @click="
                      toggleFindCarriersPanel(
                        $event,
                        `overlayPanel-${record.key_id}_${item.columnId}`,
                        record.key_id
                      )
                    "
                    :disabled="true"
                  >
                    Find Carriers
                  </vs-button>
                  <OverlayPanel
                    :ref="`overlayPanel-${record.key_id}_${item.columnId}`"
                    appendTo="body"
                    id="multiUserSelectOverlay"
                    style="width: 500px; padding: 0"
                  >
                    <FindCarriersPanel
                      :truckList="availableTrucks"
                      @onClose="
                        closeOverlayPanel(
                          `overlayPanel-${record.key_id}_${item.columnId}`
                        )
                      "
                      @onSelect="
                        handleFindCarriersSelect(
                          $event,
                          record.key_id,
                          `overlayPanel-${record.key_id}_${item.columnId}`
                        )
                      "
                    />
                  </OverlayPanel>
                </div>
              </div>
              <div v-else>
                <div
                  v-if="
                    record[item.columnId].data &&
                    record[item.columnId].data.length
                  "
                  class="flex"
                >
                  <template v-for="(item, index) in record[item.columnId].data">
                    <div
                      v-if="item.driverName !== undefined"
                      :key="index"
                      class="flex flex-wrap gap-1 justify-evenly"
                    >
                      <vs-tooltip
                        :text="
                          getHosTooltipContent(item.driverName, 'Until break')
                        "
                        class="flex flex-col items-center"
                      >
                        <Knob
                          :style="knobStyleObject"
                          :value="item.breakValue"
                          :valueTemplate="item.breakLabel"
                          :strokeWidth="hosKnobStrokeWidth"
                          :size="iconHeight"
                          :valueColor="item.breakValueColor"
                          :rangeColor="item.breakRangeColor"
                          readonly
                        />
                        <label class="text-xs" v-if="isHosLabelVisible">
                          Until break
                        </label>
                      </vs-tooltip>

                      <vs-tooltip
                        :text="getHosTooltipContent(item.driverName, 'Drive')"
                        class="flex flex-col items-center"
                      >
                        <Knob
                          :style="knobStyleObject"
                          :value="item.driveValue"
                          :valueTemplate="item.driveLabel"
                          :strokeWidth="hosKnobStrokeWidth"
                          :size="iconHeight"
                          :valueColor="item.driveValueColor"
                          :rangeColor="item.driveRangeColor"
                          readonly
                        />
                        <label class="text-xs" v-if="isHosLabelVisible">
                          Drive
                        </label>
                      </vs-tooltip>

                      <vs-tooltip
                        :text="getHosTooltipContent(item.driverName, 'Shift')"
                        class="flex flex-col items-center"
                      >
                        <Knob
                          :style="knobStyleObject"
                          :value="item.shiftValue"
                          :valueTemplate="item.shiftLabel"
                          :strokeWidth="hosKnobStrokeWidth"
                          :size="iconHeight"
                          :valueColor="item.shiftValueColor"
                          :rangeColor="item.shiftRangeColor"
                          readonly
                        />
                        <label class="text-xs" v-if="isHosLabelVisible">
                          Shift
                        </label>
                      </vs-tooltip>

                      <vs-tooltip
                        :text="getHosTooltipContent(item.driverName, 'Cycle')"
                        class="flex flex-col items-center"
                      >
                        <Knob
                          :style="knobStyleObject"
                          :value="item.cycleValue"
                          :valueTemplate="item.cycleLabel"
                          :strokeWidth="hosKnobStrokeWidth"
                          :size="iconHeight"
                          :valueColor="item.cycleValueColor"
                          :rangeColor="item.cycleRangeColor"
                          readonly
                        />
                        <label class="text-xs" v-if="isHosLabelVisible">
                          Cycle
                        </label>
                      </vs-tooltip>
                    </div>
                  </template>
                </div>
              </div>
              <!-- cells input End  -->
            </td>
            <!-- spreadsheets columns End -->
          </tr>
          <tr>
            <td class="cursor-pointer" @click="addNewLoad">
              <vs-icon icon="add" class="pl-1"></vs-icon>
            </td>
            <td v-for="(record, index) in headers" :key="index">
              <input class="cells__input" :readonly="true" />
            </td>
          </tr>
          <tr>
            <td><span class="cells__input" /></td>
            <td
              v-for="(item, columnIndex) in columnFieldData"
              :key="columnIndex"
              :hidden="item.hidden"
            >
              <template
                v-if="
                  numberTypeColumns.includes(item.predefinedColumn) ||
                  item.customType === 'number' ||
                  item.customType === 'currency'
                "
              >
                <span class="flex cells__input cell-export">
                  <p class="mr-1">Sum</p>
                  {{ getFieldSum(item) }}
                </span>
              </template>
              <template v-else>
                <span class="cells__input" />
              </template>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Spreadsheet table End -->
    </div>

    <!-- Load popup  -->
    <load-sidebar
      :isSidebarActive="isSidebarActiveLocal"
      @closeSidebar="closeSidebar"
      :data="loadId"
    />
    <!-- Load popup End  -->

    <vs-prompt
      accept-text="Yes"
      @cancel="resetPaymentRequestPrompt"
      @accept="requestForPayment"
      @close="resetPaymentRequestPrompt"
      :color="promptColor"
      title="Payment Requested"
      :active.sync="paymentRequestPrompt.isActive"
      class="custom-prompt"
    >
      <p class="mb-3">{{ promptMessage }}</p>
      <div class="flex items-center">
        <p class="mb-0 mr-3">Email Subject :</p>
        <vs-input placeholder="Email" v-model="emailSubject" class="w-4/5" />
      </div>
    </vs-prompt>
    <vs-prompt
      accept-text="Yes"
      @cancel="resetInvoicePrompt"
      @accept="() => generateInvoice(invoicePrompt.selectedLoad)"
      @close="resetInvoicePrompt"
      title="Generate Invoice"
      :active.sync="invoicePrompt.isActive"
      class="invoice-generated-popup"
    >
      <div class="flex column items-center">
        <p class="mb-0 mr-3">Are you sure you want to generate invoice?</p>
      </div>
      <div
        class="w-full mt-3"
        v-if="
          !invoicePrompt.noFactoring &&
          this.allFactoringCompanies &&
          this.allFactoringCompanies.length > 0
        "
      >
        <div class="flex flex-row items-center justify-between">
          <div class="w-full relative">
            <vs-checkbox
              v-model="invoicePrompt.skipFactoring"
              class="factoring-checkbox"
            >
              Skip Factoring
            </vs-checkbox>
          </div>
        </div>
      </div>
    </vs-prompt>
    <vs-prompt
      accept-text="Yes"
      @cancel="resetPaymentReceivedPrompt"
      @accept="paymentReceived"
      @close="resetPaymentReceivedPrompt"
      color="primary"
      title="Payment Received"
      :active.sync="paymentReceivedPrompt.isActive"
      class="payment-received-prompt"
    >
      <p class="mb-3">
        Are you sure you want to mark as payment received with the following
        amount?
      </p>
      <vx-input-group>
        <template slot="prepend">
          <div class="prepend-text bg-primary">
            <span>$</span>
          </div>
        </template>
        <vs-input type="number" placeholder="Amount" v-model="receivedAmount" />
      </vx-input-group>
    </vs-prompt>

    <!-- Mass Invoice Popup -->
    <mass-invoice-popup
      :isPopupActive="isMassInvoicePopupActive"
      @onClose="isMassInvoicePopupActive = false"
      @onSubmit="submitMassInvoice"
    />
  </div>
</template>

<script>
import $ from 'jquery';
import Columns from './components/Columns.vue';
import ExpandColumn from './components/ExpandColumn.vue';
import SpreadsheetHeader from './components/Header.vue';
import SpreadsheetFilters from './components/SpreadsheetFilters.vue';
import { mapGetters } from 'vuex';
import EditLoad from '../../views/pages/dispatch/load/EditLoad.vue';
import LoadSidebar from '../../views/pages/dispatch/load/LoadSidebar.vue';
import Short from '../../../../assets/images/spreadsheet/short.svg';
import Medium from '../../../../assets/images/spreadsheet/medium.svg';
import Tall from '../../../../assets/images/spreadsheet/tall.svg';
import rowHeightIcon from '../../../../assets/images/spreadsheet/row-height.svg';
import XLSX from 'xlsx';
import ColorPicker from './components/ColorPicker.vue';
import config from '@/config/constants';
import SpreadsheetSort from './components/SpreadsheetSort.vue';
import { formatAmount } from '@/helpers/helper';
import { getApiErrorMsg } from '../../helpers/helper';
import { ChevronDownIcon } from 'vue-feather-icons';

export default {
  components: {
    SpreadsheetHeader,
    ExpandColumn,
    Columns,
    SpreadsheetFilters,
    EditLoad,
    LoadSidebar,
    ColorPicker,
    SpreadsheetSort,
    ChevronDownIcon,
    FindCarriersPanel: () => import('./components/FindCarriersPanel.vue'),
    MassInvoicePopup: () => import('./components/MassInvoicePopup.vue'),
  },
  data() {
    return {
      refreshTrigger: 0,
      tableData: null,
      expandColumnPopup: false,
      columnField: [],
      modifySubsheetName: false,
      subsheetNameModel: '',
      subsheetName: '',
      isSidebarActiveLocal: false,
      loadId: {},
      loadTimeout: null,
      columnResizebleId: null,
      columnResizebleSheetId: null,
      columnResizebleSpreadsheetId: null,
      rowHeight: 'short',
      rowHeightShortIcon: Short,
      rowHeightMediumIcon: Medium,
      rowHeightTallIcon: Tall,
      rowHeightIcon: rowHeightIcon,
      selectedRows: [],
      selectedColumn: null,
      tableFormatMapping: null,
      rowsFormatted: [],
      updatingCellFormat: false,
      customColumnCellTimerMap: new Map(),
      dispatcherNoteTimerMap: new Map(),
      paymentRequestPrompt: {
        isActive: false,
        selectedLoad: null,
      },
      promptMessage: '',
      promptColor: '',
      emailSubject: '',
      invoicePrompt: {
        isActive: false,
        selectedLoad: null,
        skipFactoring: false,
      },
      itemToUpdate: {},
      sortSchema: null,
      columnSortOptions: [
        { text: 'A → Z', value: 'a' },
        { text: 'Z → A', value: 'd' },
        //{ text: "Empty → Nonempty", value: "en" },
        //{ text: "Nonempty → Empty", value: "ne" },
      ],
      numberTypeColumns: [
        'loadAmount',
        'loadDriverPay',
        'loadDistance',
        'loadTotalWeight',
        'loadHaulingFee',
        'loadFuelSurcharge',
        'loadAccessorialFees',
        'loadAccessorialDeductions',
        'loadThirdPartyCarrierHaulingFee',
        'loadThirdPartyCarrierFuelSurcharge',
        'loadThirdPartyCarrierAccessorialFees',
        'loadThirdPartyCarrierAccessorialDeductions',
      ],
      hosKnobStrokeWidth: 5,
      nonSortableColumns: ['loadDriverHos'],
      availableTrucks: [],
      additionalCurrencyTypeFields: [
        'loadHaulingFee',
        'loadFuelSurcharge',
        'loadAccessorialFees',
        'loadAccessorialDeductions',
        'loadThirdPartyCarrierHaulingFee',
        'loadThirdPartyCarrierFuelSurcharge',
        'loadThirdPartyCarrierAccessorialFees',
        'loadThirdPartyCarrierAccessorialDeductions',
      ],
      paymentReceivedPrompt: {
        isActive: false,
        selectedLoad: null,
      },
      receivedAmount: '',
      isMassInvoicePopupActive: false,
    };
  },
  props: {
    spreadsheetId: {
      type: Number,
      required: true,
    },
    value: {
      type: Array || Object,
      default() {
        return [];
      },
    },
    headers: {
      required: true,
      type: Array,
    },
    subsheet: {
      type: Object,
    },
    accessLevel: {
      required: false,
    },
    viewMode: {
      type: String,
      default: 'tab',
    },
  },
  created() {
    this.subsheetName = this.subsheet.name;
    this.setSortSchema((this.subsheet || {}).sortSchema || null);
    $('body').click((event) => {
      if (!$(event.target).closest('.subsheet-rename-input').length) {
        this.onModifySubsheetNameCancel();
      }
    });
    this.generateTableFormattingMaps();
  },
  computed: {
    ...mapGetters('auth', ['userRole', 'user']),
    ...mapGetters('factoring-company', ['allFactoringCompanies']),

    isViewer() {
      return this.accessLevel && this.accessLevel === 4;
    },

    table() {
      const rowsData = Object.values(this.tableData);
      const fromattedRowData = rowsData.map((record) => {
        const newDataFormat = {};
        const keysToExclude = [
          'key_id',
          'selected',
          'refreshTrigger',
          'format',
        ];

        for (const [key, value] of Object.entries(record)) {
          if (keysToExclude.includes(key)) continue;
          const row = record.key_id;
          const column = key;
          const { s, fc, cc } =
            ((this.tableFormatMapping || {})[row] || {})[column] || {};
          newDataFormat[column] = {
            data: value,
            isStruck: !!s,
            textColor:
              fc && 0 < fc && fc <= this.colorPalletSrc.length
                ? this.colorPalletSrc[fc - 1] || null
                : null,
            cellColor:
              cc && 0 < cc && cc <= this.colorPalletSrc.length
                ? this.colorPalletSrc[cc - 1] || null
                : null,
            key,
            styleObject: {},
          };
          const keyData = newDataFormat[key];
          if (keyData.isStruck)
            newDataFormat[key].styleObject.textDecoration = 'line-through';
          if (keyData.textColor)
            newDataFormat[key].styleObject.color = keyData.textColor;
          if (keyData.cellColor)
            newDataFormat[
              key
            ].styleObject.backgroundColor = `${keyData.cellColor}`;
        }
        return {
          ...newDataFormat,
          key_id: record.key_id,
          selected: this.selectedRows.includes(record.key_id),
          refreshTrigger: this.refreshTrigger,
          format: record.format,
        };
      });
      if (this.sortSchema) {
        let dateBySort = '';
        const sort = this.sortSchema.map((ele) => {
          const orderSort = {};
          if (!ele) return;
          if (ele.predefinedColumn) {
            if (
              ele.predefinedColumn === 'loadShipDate' ||
              ele.predefinedColumn === 'loadDeliveryDate'
            ) {
              orderSort.date = true;
              orderSort.type = 'date';
            }
          } else {
            orderSort.date = false;
          }
          if (ele.order === 'd') {
            orderSort.order = `-${ele.columnId}`;
            orderSort.key = `${ele.columnId}`;
            orderSort.dir = -1;
          }
          if (ele.order === 'a') {
            orderSort.order = String(ele.columnId);
            orderSort.key = String(ele.columnId);
            orderSort.dir = 1;
          }
          if (ele.order === 'en') {
            orderSort.order = `${ele.columnId}`;
            orderSort.key = `${ele.columnId}`;
            orderSort.dir = 1;
            orderSort.type = 'en';
          }
          if (ele.order === 'ne') {
            orderSort.order = `-${ele.columnId}`;
            orderSort.key = `${ele.columnId}`;
            orderSort.dir = -1;
            orderSort.type = 'ne';
          }
          if ((ele || {}).predefinedColumn === 'loadPod') {
            orderSort.enSort = orderSort.type;
            orderSort.type = 'POD';
          }
          return orderSort;
        });
        // return fromattedRowData.sort(this.fieldSorter(sort, dateBySort));
        return this.fieldSortingFunction(fromattedRowData, sort);
      }
      return fromattedRowData;
    },
    columnFieldData() {
      return this.columnField.sort((a, b) => a.order - b.order);
    },
    multilineRowHeight() {
      if (this.rowHeight == 'short') {
        return `height-${this.rowHeight} line-clamp line-clamp-short`;
      }
      if (this.rowHeight == 'medium') {
        return `height-${this.rowHeight} line-clamp line-clamp-medium`;
      }
      if (this.rowHeight == 'tall') {
        return `height-${this.rowHeight} line-clamp line-clamp-tall`;
      }
      return `height-${this.rowHeight}`;
    },
    loadStatuses() {
      return config.status.loadWithLabels;
    },
    fillFormatColorSelected() {
      let colorSelection = ((this.selectedColumn || {}).data || {}).cellColor;
      if (colorSelection) return colorSelection;
      return '';
      /* Doesn't work at the moment due to deep reactivity issue */
      // colorSelection = ((this.cellColorMapping || {})[0] || {})[0] || ''
      // return this.refreshTrigger ? colorSelection : ''
    },
    textFormatColorSelected() {
      const colorSelection =
        ((this.selectedColumn || {}).data || {}).textColor || '';
      if (colorSelection) return colorSelection;
      return '';
      /* Doesn't work at the moment due to deep reactivity issue */
      // colorSelection = ((this.textColorMapping || {})[0] || {})[0] || ''
      // return this.refreshTrigger ? colorSelection : ''
    },
    colorPalletSrc() {
      return (config || {}).spreadSheetColorPickerPallet || [];
    },
    hasDefaultGLAccess() {
      const { admin_company_detail_id } =
        (this.user || {}).admin_company_details || {};
      if (admin_company_detail_id) {
        return config.companiesWithPayToCodeNDefaultGLAccountAccess.includes(
          Number(admin_company_detail_id)
        );
      }
      return false;
    },
    iconHeight() {
      const height = {
        short: 35,
        medium: 35,
        tall: 50,
      };

      return height[this.rowHeight] || 39;
    },
    isHosLabelVisible() {
      return this.rowHeight === 'tall';
    },
    sortHeaders() {
      return (this.headers || []).filter(
        (header) =>
          (this.nonSortableColumns || []).indexOf(header.predefinedColumn) ===
          -1
      );
    },
    knobStyleObject() {
      return {
        height: `${this.iconHeight}px`,
      };
    },
    isBatchActionsVisible() {
      let hasAccess = false;
      const { admin_company_detail_id } =
        (this.user || {}).admin_company_details || {};
      if (admin_company_detail_id) {
        hasAccess = config.companiesWithSpreadsheetBatchActionsAccess.includes(
          Number(admin_company_detail_id)
        );
      }

      return hasAccess && this.selectedRows.length > 1;
    },
  },
  watch: {
    // Call update api after destory expand popup
    isSidebarActiveLocal: {
      handler() {
        if (!this.isSidebarActiveLocal) {
          this.loadTimeout = setTimeout(() => {
            this.updateSpreadsheet(this.subsheet.id);
          }, 10);
        }
      },
    },
    value: {
      handler(newVal) {
        this.tableData = this.generateTableData(newVal);
        this.reRenderTable();
      },
      deep: true,
      immediate: true,
    },
    tableData: {
      handler(newVal) {
        const reGenerateValueArray = (newData) => {
          return this.value.map((currentRow) => {
            return newData[currentRow.key_id];
          });
        };
        this.$emit('updateValue', reGenerateValueArray(newVal));
      },
      deep: true,
    },
  },
  destroyed() {
    clearTimeout(this.loadTimeout);
  },
  mounted() {
    this.rowHeight = this.subsheet.rowHeight;
    this.resizeColumWidth();
  },

  methods: {
    onConfirmMultipleSpreadsSheetDeleted() {
      const options = {
        title: 'Confirm Delete',
        color: 'danger',
        text: 'Are you sure you want to delete these loads?',
        accept: () => this.deleteSelectedSpreadSheetLoads(),
      };
      this.onConfirm(options);
    },
    // Confirm Dialog
    onConfirm(options) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        ...options,
      });
    },

    onConfirmCancel(loadId) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Yes, I confirm',
        title: 'Cancel Load',
        text: 'Are you sure you want to cancel this load?',
        accept: () => this.cancelLoad(loadId),
      });
    },

    async cancelLoad(loadId) {
      this.$vs.loading();
      try {
        const param = {
          load_id: loadId,
        };
        await this.$store.dispatch('load/cancelLoad', param);
        this.$vs.loading.close();
        this.itemToUpdate.data = 'Canceled';

        this.$vs.notify({
          color: 'success',
          title: 'Success',
          text: 'Load canceled successfully.',
        });
      } catch (error) {
        this.$vs.loading.close();
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text:
            (((error || {}).response || {}).data || {}).message ||
            'Something went wrong!',
        });
      }
    },

    resetInvoicePrompt() {
      this.invoicePrompt = {
        isActive: false,
        selectedLoad: null,
        noFactoring: null,
        skipFactoring: false,
      };
    },

    // on Load status change
    async onLoadStatusChange($event, data, item) {
      const { key_id: loadId } = data;
      this.itemToUpdate = item;
      const statusItem = $event;
      // if load is changed
      if ($event && statusItem.label !== item.data) {
        try {
          switch (statusItem.value) {
            case 'canceled':
              this.onConfirmCancel(loadId);
              break;
            case 'invoice_created':
              this.showInvoicePrompt(loadId);
              break;
            case 'payment_requested':
              await this.onConfirmRequestForPayment(loadId, item.data);
              break;
            case 'invoice_paid':
              await this.onConfirmPaymentReceived(loadId, item.data);
              break;
            default:
              await this.changeStatus(statusItem.value, loadId);
              this.$vs.notify({
                time: 3000,
                color: 'success',
                title: 'Status Updated',
                text: 'Load Status Updated successfully.',
              });
              item.data = statusItem.label;
              break;
          }
        } catch (error) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            time: 8000,
            text: getApiErrorMsg(error),
          });
        }
      }
    },

    async changeStatus(status, loadId) {
      let param = { load_id: loadId, status: status };
      await this.updateLoadStatus(param);
    },

    // get load for payment api call
    async getLoad(loadId) {
      let params = {
        fields: [
          'customer:billingEmail,noFactoring',
          'totalAmount',
          'reference',
          'paymentOption',
          'invoice:storageFilename',
        ],
      };
      return await this.$store.dispatch('load/getOneLoad', { loadId, params });
    },

    async updateLoadStatus(param) {
      await this.$store.dispatch('pipeline/updateStatus', param);
    },

    async showInvoicePrompt(loadId) {
      const { payload: load } = await this.getLoad(loadId);
      this.invoicePrompt = {
        isActive: true,
        selectedLoad: loadId,
        noFactoring: load && load.customer && load.customer.noFactoring,
      };
    },

    async generateInvoice(load) {
      this.$vs.loading();
      const payload = {
        id: load,
      };

      if (this.invoicePrompt.skipFactoring) {
        payload.skipFactoring = this.invoicePrompt.skipFactoring;
      } else {
        payload.skipFactoring = false;
      }

      try {
        await this.$store.dispatch('load/generateInvoice', payload);
        this.itemToUpdate.data = 'Invoice Generated';

        this.$vs.notify({
          color: 'primary',
          title: 'Invoice Generated',
          text: 'Invoice Generated successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    // Request for Payment
    async onConfirmRequestForPayment(loadId, currentStatus) {
      try {
        const { payload: load } = await this.getLoad(loadId);
        if (
          currentStatus === 'Invoice Generated' ||
          currentStatus === 'Payment Requested'
        ) {
          let text = `Are you sure you want to send request for payment with amount ${load.totalAmount} USD`;
          this.promptColor = 'warning';

          const noFactoring =
            load && load.customer && load.customer.noFactoring;
          if (
            !noFactoring &&
            load.paymentOption != 'skipFactoring' &&
            this.allFactoringCompanies &&
            this.allFactoringCompanies.length > 0
          ) {
            this.promptMessage =
              text + ` to ${this.allFactoringCompanies[0].billing_email}?`;
          } else {
            if (load && load.customer && load.customer.billingEmail) {
              this.promptMessage = text + ` to ${load.customer.billingEmail}?`;
            } else {
              this.promptMessage = text + `? (Missing customer billing email)`;
              this.promptColor = 'danger';
            }
          }
          this.emailSubject = `Invoice for Load ${
            load.reference ? load.reference : ''
          }`;
          this.showPaymentRequestPrompt(load);
        } else {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Load has to be in invoice generated or payment requested status',
          });
        }
      } catch (error) {}
    },

    async requestForPayment() {
      this.$vs.loading();

      const payload = {
        id: this.paymentRequestPrompt.selectedLoad.id,
        subject: this.emailSubject,
      };

      try {
        await this.$store.dispatch('load/requestForPayment', payload);

        this.$vs.notify({
          color: 'primary',
          title: 'Payment Request',
          text: 'Request for Payment sent successfully.',
        });
        this.itemToUpdate.data = 'Payment Requested';
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    showPaymentRequestPrompt(load = null) {
      this.paymentRequestPrompt = {
        isActive: true,
        selectedLoad: load,
      };
    },
    resetPaymentRequestPrompt() {
      this.paymentRequestPrompt = {
        isActive: false,
        selectedLoad: null,
      };
    },

    // Payment Received
    async onConfirmPaymentReceived(loadId, currentStatus) {
      try {
        const { payload: load } = await this.getLoad(loadId);
        if (
          ['Payment Requested', 'Delivered', 'Invoice Generated'].includes(
            currentStatus
          )
        ) {
          this.paymentReceivedPrompt = {
            isActive: true,
            selectedLoad: load,
          };
          this.receivedAmount = load.totalAmount.toString(); // convering number into string because input type number accepts string and if value is 0 then it doesn't accept 0 as a default value;
        } else {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Load has to be in delivered, invoice generated, or payment requested status',
          });
        }
      } catch (error) {}
    },

    async paymentReceived() {
      this.$vs.loading();
      const payload = {
        id: this.paymentReceivedPrompt.selectedLoad.id,
        paidAmount: this.receivedAmount ? Number(this.receivedAmount) : null,
      };

      try {
        await this.$store.dispatch('load/paymentReceived', payload);

        this.$vs.notify({
          color: 'primary',
          title: 'Payment Received',
          text: 'Payment received successfully.',
        });
        this.itemToUpdate.data = 'Paid';
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    async deleteSelectedSpreadSheetLoads() {
      try {
        const payload = {
          loadIds: this.selectedRows,
        };

        await this.$store.dispatch('load/batchDeleteLoads', payload);
        this.updateSpreadsheet(this.subsheet.id);

        this.$vs.notify({
          color: 'success',
          title: 'Success',
          text:
            this.selectedRows.length > 1
              ? 'Loads deleted successfully'
              : 'Load deleted successfully',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text:
            (((error || {}).response || {}).data || {}).message ||
            `Something went wrong`,
        });
      }
    },
    filterByThisField(item) {
      this.$refs.filterField.filterField(item);
    },
    fieldSortingFunction(arrayToSort, sortingSchema) {
      const arrayData = JSON.parse(JSON.stringify(arrayToSort));
      const isNumber = (str) => typeof str === 'number' || /^\d+$/.test(str);
      const dataCompareFunction = (elOne, elTwo, key, dir) => {
        const result = elOne[key].data.localeCompare(elTwo[key].data);
        return dir * result;
        /* For the time being , just doing string comparison for sort
          and ignoring multi date concept
          Hence the commented code below.
          Keep it intact as we might use it later
          (Above statement is as requested)
        */
        /*
          // dir : 1 => ascending, -1 => descending
          let aDate, bDate;
          if (dir > 0) {
            aDate = elOne[key].data.split(';').sort((a,b) => new Date(a) - new Date(b))[0];
            bDate = elTwo[key].data.split(';').sort((a,b) => new Date(a) - new Date(b))[0];
          } else {
            aDate = elOne[key].data.split(';').sort((a,b) => new Date(b) - new Date(a))[0];
            bDate = elTwo[key].data.split(';').sort((a,b) => new Date(b) - new Date(a))[0];
          }
          if (new Date(aDate) > new Date(bDate)) return dir;
          if (new Date(aDate) < new Date(bDate)) return -dir;
          return 0;
        */
      };
      const numberCompareFunction = (a, b, key, dir) => {
        return dir > 0 ? a[key].data - b[key].data : b[key].data - a[key].data;
      };
      const stringCompareFunction = (a, b, key, dir) => {
        const result = a[key].data.localeCompare(b[key].data);
        return dir * result;
      };
      const emptyToNonEmptyCompare = (a, b, key, dir) => {
        let res = 0;
        if (a[key].data == null && b[key].data != null) {
          res = -1;
        } else if (a[key].data != null && b[key].data == null) {
          res = 1;
        }
        return res * dir;
      };
      const numberOrStringCompare = (a, b, key, dir) => {
        if (!a[key] || !b[key]) {
          return;
        } else if (a[key].data == null && b[key].data != null) {
          return -1 * dir;
        } else if (a[key].data != null && b[key].data == null) {
          return 1 * dir;
        } else if (a[key].data == null && b[key].data == null) {
          return 0;
        }

        if (isNumber(a[key].data) && isNumber(b[key].data)) {
          return numberCompareFunction(a, b, key, dir);
        } else {
          return stringCompareFunction(a, b, key, dir);
        }
      };
      const PODFileCompare = (a, b, key, dir, isEmptySort) => {
        const aDataLength = (a[key].data || []).length;
        const bDataLength = (b[key].data || []).length;
        if (isEmptySort) {
          let res = 0;
          if (!aDataLength && bDataLength) {
            res = -1;
          } else if (aDataLength && !bDataLength) {
            res = 1;
          }
          return res * dir;
        }
        return dir > 0 ? aDataLength - bDataLength : bDataLength - aDataLength;
      };
      const arrayCompareFunction = (a, b, i = 0) => {
        const sortDate = sortingSchema[i];
        const key = sortDate.key;
        const dir = sortDate.dir; // 1=> ascending, -1 => descending
        const sortType = sortDate.type;
        const isEmptySort = sortDate.enSort || null;
        let compareResult = 0;
        switch (sortType) {
          case 'date':
            compareResult = dataCompareFunction(a, b, key, dir);
            break;
          case 'en':
            compareResult = emptyToNonEmptyCompare(a, b, key, dir);
            break;
          case 'ne':
            compareResult = emptyToNonEmptyCompare(a, b, key, dir); // dir must be -1 for "ne" to work
            break;
          case 'POD':
            compareResult = PODFileCompare(a, b, key, dir, isEmptySort);
            break;
          default:
            compareResult = numberOrStringCompare(a, b, key, dir);
            break;
        }

        if (compareResult === 0 && i != sortingSchema.length - 1) {
          return arrayCompareFunction(a, b, i + 1);
        } else {
          return compareResult;
        }
      };
      return arrayData.sort((a, b) => arrayCompareFunction(a, b));
    },
    fieldSorter(fields) {
      const isNumber = (str) => typeof str === 'number' || /^\d+$/.test(str);
      return function (a, b) {
        return fields
          .map(function (item) {
            let o = item.order;
            var dir = 1;
            if (!o) return;
            if (o[0] === '-') {
              dir = -1;
              o = o.substring(1);
            }
            if (item.date) {
              let aDate, bDate;
              if (dir > 0) {
                aDate = a[o].data
                  .split(';')
                  .sort((a, b) => new Date(a) - new Date(b))[0];
                bDate = b[o].data
                  .split(';')
                  .sort((a, b) => new Date(a) - new Date(b))[0];
              } else {
                aDate = a[o].data
                  .split(';')
                  .sort((a, b) => new Date(b) - new Date(a))[0];
                bDate = b[o].data
                  .split(';')
                  .sort((a, b) => new Date(b) - new Date(a))[0];
              }
              if (new Date(aDate) > new Date(bDate)) return dir;
              if (new Date(aDate) < new Date(bDate)) return -dir;
              return 0;
            }
            if (isNumber(a[o].data) && isNumber(b[o].data)) {
              return dir > 0 ? a[o].data - b[o].data : b[o].data - a[o].data;
            } else {
              const result = a[o].data.localeCompare(b[o].data);
              return dir * result;
            }
          })
          .reduce(function firstNonZeroValue(p, n) {
            return p ? p : n;
          }, 0);
      };
    },
    async handleSortSchema(sortPayload) {
      try {
        const spreadsheetId = this.spreadsheetId;
        const subsheetId = this.subsheet.id;
        const oldSortSchema = JSON.stringify(this.sortSchema || {});
        const sortSchema = JSON.stringify(sortPayload || {});
        if (oldSortSchema === sortSchema) return;
        const payload = {
          id: spreadsheetId,
          sheetId: subsheetId,
          sortSchema: JSON.stringify(sortPayload),
        };
        await this.$store.dispatch('spreadsheet/updateSortSchema', payload);
        this.$vs.notify({
          color: 'success',
          title: 'Success',
          text: 'Update Sort successfully',
        });
        this.setSortSchema(sortPayload);
        return true; /* Returned to indicate schemaUpdate completed */
      } catch (error) {
        console.error(error);
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text:
            (((error || {}).response || {}).data || {}).message ||
            `Something went wrong`,
        });
      }
    },
    setSortSchema(sortPayload) {
      /** Update SortSchema in parent instance */
      if (Array.isArray(sortPayload) && (sortPayload || []).length) {
        this.sortSchema = sortPayload;
      } else {
        this.sortSchema = null;
      }

      /** Update SortSchema in spreadSheetSort component */
      const { setSortSchema } = this.$refs.spreadsheetSort || {};
      if (setSortSchema) {
        this.$refs.spreadsheetSort.setSortSchema(this.sortSchema);
      }
    },
    exportToExcel() {
      if (this.subsheet.content.length) {
        const filename = `${this.subsheetName}.xlsx`;
        const myRows = [];
        const columnWidth = [];
        const $headers = $(`#table-${this.subsheet.id} th .table-heading`);
        let $filteredTableHeaders = [];

        // Filtered headers, remove 'Driver HOS', 'Find Carriers' columns
        $headers.each(function () {
          if (
            $(this).html() !== 'Driver HOS' &&
            $(this).html() !== 'Find Carriers'
          ) {
            $filteredTableHeaders.push(this);
          }
        });

        // Cell data
        $(`#table-${this.subsheet.id} tbody tr`).each(function (index) {
          var $cells = $(this).find('td .cell-export');
          myRows[index] = {};
          $cells.each(function (cellIndex) {
            if ($($filteredTableHeaders[cellIndex]).html() === 'POD') {
              if ($(this).html() !== '') {
                myRows[index][$($filteredTableHeaders[cellIndex]).html()] =
                  'POD available';
              } else {
                myRows[index][$($filteredTableHeaders[cellIndex]).html()] = ' ';
              }
            } else if ($(this).find('.vs__selected').length) {
              myRows[index][$($filteredTableHeaders[cellIndex]).html()] = $(
                this
              )
                .find('.vs__selected')
                .text()
                .trim();
            } else {
              myRows[index][$($filteredTableHeaders[cellIndex]).html()] =
                $(this).val();
            }
          });
        });

        $(`#table-${this.subsheet.id} .table-header`).each(function () {
          const width = $(this).width();
          columnWidth.push({ wpx: width });
        });

        const ws = XLSX.utils.json_to_sheet(myRows);
        ws['!cols'] = columnWidth;
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, this.subsheetName);
        XLSX.writeFile(wb, filename);
      }
    },
    resizeColumnHeight(event) {
      this.rowHeight = event.target.closest('div').dataset.size;
      const payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheet.id,
        rowHeight: this.rowHeight,
      };
      this.$store
        .dispatch('spreadsheet/updateRowHeight', payload)
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
    },
    resizeColumWidth() {
      var thElm;
      var startOffset;
      var THIS = this;
      Array.prototype.forEach.call(
        document.querySelectorAll('.table-resizable th'),
        function (th) {
          th.style.position = 'relative';
          var grip = document.createElement('div');
          grip.classList.add('handleResizeble');
          grip.innerHTML = '&nbsp;';
          grip.addEventListener('mousedown', function (e) {
            e.preventDefault();
            thElm = th;
            startOffset = th.offsetWidth - e.pageX;
          });
          th.appendChild(grip);
        }
      );

      document.addEventListener('mousemove', function (e) {
        if (thElm) {
          thElm.style.width = startOffset + e.pageX + 'px';
        }
      });

      document.addEventListener('mouseup', function (e) {
        if (thElm) {
          const columnId = thElm.getAttribute('id');
          const spreadsheetId = thElm.getAttribute('spreadsheetid');
          const sheetId = thElm.getAttribute('sheetid');
          const width = thElm.style.width;
          if (columnId && spreadsheetId && sheetId) {
            THIS.changeColumnWidth(width, sheetId, spreadsheetId, columnId);
          }
        }
        thElm = undefined;
      });
    },

    changeColumnWidth(width, sheetId, spreadsheetId, columnId) {
      if (this.accessLevel < 3) {
        const payload = {
          id: parseInt(spreadsheetId),
          sheetId: parseInt(sheetId),
          columnWidth: width,
          columnId: parseInt(columnId),
        };
        this.$store.dispatch('spreadsheet/changeColumnWidth', payload);
      }
    },
    handleRecord(record, amount, predefinedColumn, customType) {
      if (customType) {
        if (customType === 'currency' && record) {
          return `${record.toLocaleString()}`;
        }
        return record;
      } else if (
        (amount ||
          this.additionalCurrencyTypeFields.includes(predefinedColumn)) &&
        record != null
      ) {
        return formatAmount(record);
      }

      if (
        predefinedColumn === 'loadGrossProfitPercentageBrokeredLoad' &&
        record != null
      ) {
        return `${record}%`;
      } else if (predefinedColumn === 'loadContainerStatus' && record != null) {
        return config.status.loadContainerStatuses.find(
          (status) => status.value === record
        ).label;
      }
      return record;
    },

    openDeleteWarningDialog(id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        title: 'Delete subsheet',
        text: 'Would you like to delete this subsheet?',
        accept: this.deleteSubsheet,
      });
    },
    deleteSubsheet() {
      this.$vs.loading();
      const payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheet.id,
      };
      this.$store
        .dispatch('spreadsheet/deleteSubsheet', payload)
        .then(({ data }) => {
          this.$vs.notify({
            color: 'success',
            title: 'Subsheet deleted',
            text: 'Subsheet deleted successfully',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.updateSpreadsheet();
          this.$vs.loading.close();
        });
    },
    handleRename() {
      if (this.accessLevel <= 2) {
        this.modifySubsheetName = true;
      }
    },
    updateCellValue(
      $event,
      record,
      cellId,
      customColumnId,
      customColumnUpdate,
      itemInfo
    ) {
      const newData = $event.target.value;
      const { columnId } = itemInfo;
      const { data: oldData } = record[columnId] || {};
      if (oldData === newData) {
        return;
      }
      const isDispatchNotes =
        (itemInfo || {}).predefinedColumn === 'loadDispatcherNotes';
      if (isDispatchNotes) {
        /** Dispatch notes update flow */
        const { key_id: loadId } = record;
        this.onChangeNote(loadId, cellId, newData);
        const [cellid] = cellId.split('_');
        const getPredefinedColumns = $(
          `td[predefinedcolumnid=${cellid}_loadDispatcherNotes]`
        );
        if (getPredefinedColumns.length > 1) {
          $(getPredefinedColumns).each((i, element) => {
            const cellId = $(element).attr('cellId');
            this.setTableData(cellId, newData);
            this.$emit('updateSameLoadData', { cellId, value: newData });
          });
        }
      } else if (customColumnId) {
        /** Custom cell Update flow */
        const timeoutId = record.key_id + '_' + customColumnId;
        if (this.customColumnCellTimerMap.has(timeoutId)) {
          clearTimeout(this.customColumnCellTimerMap.get(timeoutId));
        }
        var that = this;
        this.customColumnCellTimerMap.set(
          timeoutId,
          setTimeout(function () {
            that.$emit(
              'update',
              $event,
              record,
              that.spreadsheetId,
              customColumnId
            );
          }, 1000)
        );

        //  This code update multiple custom column at once
        const getCustomColumns = $(`td[customColumnId=${customColumnUpdate}]`);
        if (getCustomColumns.length > 1) {
          $(getCustomColumns).each((i, element) => {
            const cellId = $(element).attr('cellId');
            this.setTableData(cellId, $event.target.value);
            this.$emit('updateSameLoadData', {
              cellId,
              value: $event.target.value,
            });
          });
        } else {
          this.setTableData(cellId, $event.target.value);
        }
      }
    },
    handleModifySubsheetName(subSheetId) {
      if (!this.subsheetName) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Sheet name cannot be empty',
        });
        return;
      }

      const payload = {
        id: this.spreadsheetId,
        sheetId: subSheetId,
        name: this.subsheetName,
      };
      this.$store
        .dispatch('spreadsheet/modifySheetName', payload)
        .then(({ data }) => {
          this.$emit('updateSpreadsheetName', payload);

          this.$vs.notify({
            color: 'success',
            title: 'Sheet rename',
            text: 'Sheet name updated successfully',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.modifySubsheetName = false;
        });
    },
    //open ROC or BOL attachment
    openAttachmentDoc(url) {
      if (url) window.open(url, '_blank');
    },
    // go to pod attachments
    openPodAttchments(pod) {
      this.$vs.loading();
      this.$store
        .dispatch('spreadsheet/getPodUrl', pod)
        .then(({ data }) => {
          window.open(data.payload.url, '_blank');
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    // handle cell focus method
    handleColumnFocus(cellData) {
      $('td').removeClass('cell-focus');
      $('.cells__input').addClass('line-clamp');
      $(`[cellId=${cellData.cellId}]`).addClass('cell-focus');
      $(`[cellId=${cellData.cellId}] .cells__input`).removeClass('line-clamp');
      this.selectedColumn = cellData;
    },
    //  get column field and props
    registerColumn(field) {
      this.columnField.push(field);
    },
    saveFilter(filters) {
      this.$parent.saveSheetsFilter(filters);
    },
    // updateSpreadsheet emit method
    updateSpreadsheet(spreadsheetId) {
      this.$emit('updateSpreadsheet', spreadsheetId);
    },
    // expand record
    expandRecord(item) {
      this.isSidebarActiveLocal = true;
      this.loadId = { loadId: item.key_id };
    },
    addNewLoad() {
      this.isSidebarActiveLocal = true;
      this.loadId = {};
    },
    closeSidebar() {
      this.isSidebarActiveLocal = false;
    },
    selectRow({ keyId, selected }) {
      if (selected) {
        this.selectedRows.push(keyId);
      } else {
        this.selectedRows = this.selectedRows.filter((x) => x !== keyId);
      }
    },
    /* Apply Strick through condition to selected cell and row by updating "tableFormatMapping" */
    applyStrikethrough() {
      const rowsToFormat = [];
      /** Apply strikethrough style to individual cell */
      const cellId = (this.selectedColumn || {}).cellId || '';
      const [row, column, rowInt = +row] = cellId.split('_') || [];
      if (row && column && !this.selectedRows.includes(rowInt)) {
        const { s } =
          ((this.tableFormatMapping || {})[row] || {})[column] || {};
        this.tableFormatMapping[row][column].s = !s;
        this.selectedColumn.data.s = !s;
        rowsToFormat.push(row);
      }

      /** Apply style to individual row */
      this.selectedRows.forEach((rowId) => {
        Object.keys(this.tableFormatMapping[rowId]).forEach((col) => {
          const { s } =
            ((this.tableFormatMapping || {})[rowId] || {})[col] || {};
          this.tableFormatMapping[rowId][col].s = !s;
        });
        rowsToFormat.push(rowId);
      });
      this.reRenderTable();
      /* Trigger Update of row via API */
      this.updateSpreadsheetFormatting(rowsToFormat);
    },
    /* Apply CellColor to selected cell and row by updating "tableFormatMapping" */
    applyFormatFillColor(payload) {
      const rowsToFormat = [];
      /** Apply style to individual cell */
      const cellId = (this.selectedColumn || {}).cellId || '';
      const [row, column] = cellId.split('_') || [];
      if (row && column) {
        this.tableFormatMapping[row][column].cc = payload;
        this.selectedColumn.data.cellColor =
          payload && 0 <= payload ? this.colorPalletSrc[payload - 1] : null;
        if (!this.selectedRows.includes(row)) {
          rowsToFormat.push(row);
        }
      }

      /** Apply style to individual row */
      this.selectedRows.forEach((rowId) => {
        Object.keys(this.tableFormatMapping[rowId]).forEach((col) => {
          this.tableFormatMapping[rowId][col].cc = payload;
        });
        rowsToFormat.push(rowId);
      });
      this.reRenderTable();
      /* Trigger Update of row via API */
      this.updateSpreadsheetFormatting(rowsToFormat);
    },
    resetFormatFillColor() {
      this.applyFormatFillColor(null);
    },
    /* Apply FontColor to selected cell and row by updating "tableFormatMapping" */
    applyFormatTextColor(payload) {
      const rowsToFormat = [];
      /** Apply style to individual cell */
      const cellId = (this.selectedColumn || {}).cellId || '';
      const [row, column] = cellId.split('_') || [];
      if (row && column) {
        this.tableFormatMapping[row][column].fc = payload;
        this.selectedColumn.data.textColor =
          payload && 0 <= payload ? this.colorPalletSrc[payload - 1] : null;
        if (!this.selectedRows.includes(row)) {
          rowsToFormat.push(row);
        }
      }

      /** Apply style to individual row */
      this.selectedRows.forEach((rowId) => {
        Object.keys(this.tableFormatMapping[rowId]).forEach((col) => {
          this.tableFormatMapping[rowId][col].fc = payload;
        });
        rowsToFormat.push(rowId);
      });
      this.reRenderTable();
      /* Trigger Update of row via API */
      this.updateSpreadsheetFormatting(rowsToFormat);
    },
    resetFormatTextColor() {
      this.applyFormatTextColor(null);
    },
    /*generate "tableFormatMapping" object with full mapping of table cell formats done*/
    generateTableFormattingMaps() {
      this.tableFormatMapping = {};
      this.value.forEach((record) => {
        const keysToExclude = [
          'key_id',
          'selected',
          'refreshTrigger',
          'format',
        ];
        const row = record.key_id;
        this.tableFormatMapping[row] = {};
        const columns = Object.keys(record).filter(
          (x) => !keysToExclude.includes(x)
        );
        columns.forEach((col) => {
          /* Expecting record[col] to hold a struct of
            record[col] =  { // record[col] is a sheet’s column id.
              b: true, // for bold
              i: true, // for italic
              s: true, // for strikethrough
              fc: 1 to 80, // font color, each number corresponds to one color used by Google Spreadsheet
              cc: 1 to 80, // cell color, each number corresponds to one color used by Google Spreadsheet
            },
          */
          const { s, fc, cc } = (record.format || {})[col] || {};
          this.tableFormatMapping[row][col] = { s, fc, cc };
        });
      });
    },
    updateSpreadsheetFormatting(rowIDs) {
      this.updatingCellFormat = true;
      const defaultColState = {
        s: false,
        b: false,
        i: false,
        fc: 1,
        cc: 10,
      };
      const hasValue = (data) => {
        return !!Object.values(data || {}).filter(Boolean).length;
      };
      const generateRowFormattingPayload = (rowID) => {
        const rowToMap = this.tableFormatMapping[rowID];
        const payload = {};
        for (const [colId, value] of Object.entries(rowToMap)) {
          const colformatValues = hasValue(value);
          if (colformatValues) {
            payload[colId] = {};
            if (value.s) payload[colId].s = value.s;
            if (value.fc && value.fc !== defaultColState.fc)
              payload[colId].fc = value.fc;
            if (value.cc && value.cc !== defaultColState.cc)
              payload[colId].cc = value.cc;
          }
        }
        return hasValue(payload) ? payload : null;
      };
      const formattedRowPayload = [];
      rowIDs.forEach((rowId) => {
        const rowFormat = generateRowFormattingPayload(rowId);
        formattedRowPayload.push({
          keyId: rowId,
          format: rowFormat,
        });
      });
      this.$store
        .dispatch('spreadsheet/updateSheetMultipleRowFormat', {
          id: this.spreadsheetId,
          sheetId: this.subsheet.id,
          rows: formattedRowPayload || null,
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
      this.updatingCellFormat = false;
    },
    /** Table being a mapped value and reactivity issues of vue with deep nesting,
     *  a force update is need to reflect changes to dom via computed properties using nested objects */
    reRenderTable() {
      this.refreshTrigger = new Date().getTime();
    },
    generateTableData(value) {
      const tableData = {};
      value.forEach((row) => {
        tableData[row.key_id] = row;
      });
      return tableData;
    },
    /** Update Dispatch Note cell */
    onChangeNote(loadId, cellId, updatedNote) {
      /* Only levels 1,2 & 3 have write permission  */
      if (this.isViewer || !loadId) {
        return;
      }
      try {
        if (this.dispatcherNoteTimerMap.has(loadId)) {
          clearTimeout(this.dispatcherNoteTimerMap.get(loadId));
        }
        this.setTableData(cellId, updatedNote);
        this.dispatcherNoteTimerMap.set(
          loadId,
          setTimeout(() => {
            const loadPayload = {
              id: loadId,
              payload: {
                dispatcher_notes: updatedNote,
              },
            };
            this.$store
              .dispatch('load/updateLoadDispatcherNotes', loadPayload)
              .then(() => {
                /*this.$vs.notify({
                  color: "primary",
                  title: "Dispatcher notes updated",
                  text: "Load dispatcher notes updated successfully.",
                });*/
                // this.setTableData(cellId, updatedNote)
              })
              .catch((error) => {
                this.$vs.notify({
                  title: 'Error',
                  text: error.response.data.message,
                  color: 'danger',
                });
              });
          }, 1000)
        );
      } catch (error) {
        console.log(error);
      }
    },
    setTableData(cellId, value) {
      const [row, column] = cellId.split('_') || [];
      if (row && column) {
        this.tableData[row][column] = value;
      }
    },
    async updateSortSchema(sortPayload) {
      let sortSchema = JSON.parse(JSON.stringify(this.sortSchema || []));
      const compareString = `${sortPayload.predefinedColumn}_${sortPayload.columnId}`;
      const sortSchemaMap = (this.sortSchema || []).map((x) => {
        if (x.order === 'a' || x.order === 'd') {
          /** Since Sort from header supports only A-Z and Z-A, we are formatting those for selection */
          return `${x.predefinedColumn}_${x.columnId}`;
        } else {
          /** Since NonEmpty-Empty and Empty-NonEmpty are not to be overwrite, we add the "order" value to compare string as well*/
          return `${x.predefinedColumn}_${x.columnId}_${x.order}`;
        }
      });
      const index = sortSchemaMap.indexOf(compareString);
      if (index > -1) {
        sortSchema.splice(index, 1);
        sortSchema.unshift(sortPayload);
      } else if (sortSchema) {
        sortSchema.unshift(sortPayload);
      } else {
        sortSchema = [sortPayload];
      }

      await this.handleSortSchema(
        sortSchema
      ); /** Updates the new schema via api as well as syn it across all components */
      this.openSpreadsheetSort(); /** Open Dropdown of spreadSheetSort component */
    },
    openSpreadsheetSort() {
      /** Open Dropdown of spreadSheetSort component */
      const { openSortDropDown } = this.$refs.spreadsheetSort || {};
      if (openSortDropDown) {
        openSortDropDown();
      }
    },
    getFieldSum(field) {
      const { columnId, amount, customType, predefinedColumn } = field;
      const isAmount =
        !!amount ||
        customType === 'currency' ||
        this.additionalCurrencyTypeFields.includes(predefinedColumn);

      const columnData = this.tableData
        ? Object.values(this.tableData).map((x) => x[columnId])
        : [];
      const sum = columnData.reduce((a, b) => {
        return Number(a) + (Number(b) || 0);
      }, 0);

      return isAmount ? formatAmount(sum) : parseFloat(sum).toFixed(2);
    },
    removeExistingFilter(columnName) {
      this.$refs.filterField.removeFilter(columnName);
    },
    async setCustomizedMergeLoads() {
      if (this.selectedRows.length === 2) {
        try {
          await this.$store.dispatch('load/customizedMergeLoad', {
            loads: this.selectedRows.map((x) => ({ loadId: x })),
          });
          this.$vs.notify({
            color: 'primary',
            title: 'Success',
            text: 'Loads merged successfully.',
          });
          this.updateSpreadsheet(this.subsheet.id);
        } catch (error) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            time: 8000,
            text:
              (((error || {}).response || {}).data || {}).message ||
              'Something went wrong',
          });
        }
      }
    },
    calculateHours(value) {
      if (value) {
        return Math.floor(value / 3600);
      }
    },
    calculateHoursMinutes(value) {
      if (value) {
        const hours = Math.floor(value / 3600);
        const minutes = Math.floor((value - hours * 3600) / 60);

        return `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}`;
      }
    },
    getHosTooltipContent(driverName, label) {
      if (!this.isHosLabelVisible) {
        return `${label}: ${driverName}`;
      } else {
        return driverName;
      }
    },
    toggleFindCarriersPanel(event, refName, loadId) {
      if ((this.$refs[refName] || [])[0]) {
        this.$refs[refName][0].toggle(event);
        if (loadId) this.findCarriers(loadId);
      }
    },
    closeOverlayPanel(refName) {
      if ((this.$refs[refName] || [])[0]) {
        this.$refs[refName][0].hide();
      }
    },
    async findCarriers(loadId) {
      this.availableTrucks = [];
      if (!loadId) return;

      try {
        const {
          payload: { availableTrucks },
        } = await this.$store.dispatch('truckpedia/searchByLoad', {
          loadId,
        });

        if (availableTrucks && availableTrucks.length) {
          this.availableTrucks = availableTrucks
            .sort((a, b) => {
              return a.rate - b.rate;
            })
            .map((x) => {
              const { accessorialFees, ...rest } = x.company || {};
              const filteredAccessorialFees = Object.entries(
                accessorialFees || {}
              )
                .sort()
                .filter(([, value]) => value !== null)
                .reduce((obj, [key, value]) => {
                  obj[key] = value;
                  return obj;
                }, {});
              return {
                ...x,
                company: {
                  ...rest,
                },
                filteredAccessorialFees,
              };
            });
        }
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          text: error.response.data.message,
          color: 'danger',
        });
      } finally {
      }
    },
    async handleFindCarriersSelect(carrierData, loadId, overlayRef) {
      if (
        !carrierData ||
        !carrierData.estimatedPrice ||
        !carrierData.carrierCompanyId ||
        !loadId
      )
        return;

      try {
        await this.$store.dispatch('truckpedia/reserveByLoad', {
          loadId,
          estimatedPrice: carrierData.estimatedPrice,
          carrierCompanyId: carrierData.carrierCompanyId,
        });
        this.closeOverlayPanel(overlayRef);
        this.$vs.notify({
          color: 'primary',
          title: 'Success',
          text: 'Truck reserved successfully.',
        });
        this.updateSpreadsheet(this.subsheet.id);
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          text: error.response.data.message,
          color: 'danger',
        });
      } finally {
      }
    },
    handleCustomColumnInput(event, fieldType) {
      if (fieldType === 'currency') {
        const isDecimal = event.target.value.includes('.');
        if (isDecimal) {
          const [integer, decimal] = event.target.value.split('.');
          if (decimal.length > 2) {
            event.target.value = `${integer}.${decimal.slice(0, 2)}`;
          }
        }
      } else if (fieldType === 'number') {
        /*
        1. You put down wrong regex.
        2. I don't understand why this code is needed.
        const regex = /^-?[0-9]\d*(\.\d+)?$/;
        const value = event.target.value;
        if (!regex.test(value)) {
          event.target.value = value.slice(0, -1);
        }
        */
      }
    },
    onModifySubsheetNameCancel() {
      this.modifySubsheetName = false;
      this.subsheetName = this.subsheet.name;
    },
    resetPaymentReceivedPrompt() {
      this.paymentReceivedPrompt = {
        isActive: false,
        selectedLoad: null,
      };
      this.receivedAmount = '';
    },
    async submitMassInvoice(massInvoiceNumber) {
      // TODO: We can also do the checks based on what columns user added to the spreadsheet.
      try {
        this.$vs.loading();
        const payload = {
          invoiceNumber: massInvoiceNumber,
          loadIds: this.selectedRows,
        };

        const { result } = await this.$store.dispatch(
          'load/generateMassInvoice',
          payload
        );
        if (result) {
          this.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Mass invoice submitted successfully',
          });

          this.isMassInvoicePopupActive = false;
          this.$nextTick(() => {
            this.updateSpreadsheet(this.subsheet.id);
          });
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    onConfirm(options) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        ...options,
      });
    },
    async requestMassInvoicePayment() {
      // TODO: We can also do the checks based on what columns user added to the spreadsheet.
      try {
        this.$vs.loading();
        const payload = {
          loadIds: this.selectedRows,
        };
        const { result } = await this.$store.dispatch(
          'load/requestMassInvoicePayment',
          payload
        );

        if (result) {
          this.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Mass invoice payment requested.',
          });

          this.updateSpreadsheet(this.subsheet.id);
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    onRequestMassInvoicePayment() {
      const options = {
        title: 'Mass Invoice Payment Request',
        text: 'Are you sure you want to request mass invoice payment?',
        accept: () => this.requestMassInvoicePayment(),
      };

      this.onConfirm(options);
    },
    async multipleLoadsPaymentReceived() {
      // TODO: We can also do the checks based on what columns user added to the spreadsheet.
      try {
        this.$vs.loading();
        const payload = {
          loadIds: this.selectedRows,
        };
        const { result } = await this.$store.dispatch(
          'load/multipleLoadsPaymentReceived',
          payload
        );

        if (result) {
          this.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Payment status updated.',
          });

          this.updateSpreadsheet(this.subsheet.id);
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    onMultipleLoadsPaymentReceived() {
      const options = {
        title: 'Payment Received',
        text: 'Are you sure you want to mark selected loads as paid?',
        accept: () => this.multipleLoadsPaymentReceived(),
      };

      this.onConfirm(options);
    },
  },
  beforeDestroy() {
    clearTimeout(this.loadTimeout);
    this.dispatcherNoteTimerMap.clear();
    this.customColumnCellTimerMap.clear();
  },
};
</script>

<style lang="scss">
.show-expand-icon-hover {
  transition: all 350ms;
}

.show-expand-icon-hover td:first-child {
  position: relative;
  min-width: 30px;
}

.expand-icon {
  display: none;
  margin-left: 4px;
  cursor: pointer;
}

.show-expand-icon-hover:hover .expand-icon {
  display: flex;
}

.spreadsheet-table {
  width: max-content;

  thead {
    background: #f5f5f5;

    tr {
      th {
        padding: 9px 13px;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        -moz-text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
      }
    }
  }

  tbody {
    background: #fff;

    tr {
      td {
        // padding: 2px 7px 0px;
        padding: 7px;
      }
    }
  }

  th,
  td {
    padding: 4px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
}

.spreadsheet-table {
  border: 1px solid hsl(202, 10%, 88%);
  border-collapse: collapse;

  thead {
    tr {
      th {
        background: #f5f5f5;
        border-bottom: 1px solid hsl(0, 0%, 82%);
        border-left: 1px solid hsl(202, 10%, 88%);

        .table-heading {
          font-weight: 500;
          color: hsl(0, 0%, 10%);
          font-size: 12px;
        }
      }
    }
  }

  th,
  td {
    border: 1px solid hsl(202, 10%, 88%);
    border-collapse: collapse;
  }
}

.cells__input {
  border: none;
  padding: 0px 6px;
  width: 100%;
  overflow: hidden;
  font-family: Arial, Montserrat, Helvetica, sans-serif;
  resize: none;
}

.cells input,
.cells button {
  border: none;
  background: #fff;
  padding: 0 6px;
}

.cell-focus {
  // box-shadow: 0 0 0 3px #2d7ff9 !important;
  outline: #2d7ff9 auto 1px !important;
}

.papper-clip-vertical {
  margin-right: -5px;
  color: rgb(132, 132, 132);
  transform: rotate(270deg);
  cursor: pointer;
}

.sheet-name {
  font-size: 16px;
  font-weight: 500;
  // margin-bottom: 13px;
  margin-top: 1.25rem !important;
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 30px;
  cursor: pointer;
}

.subsheet-rename-input {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 3px;
}

.show-on-hover {
  display: none;
}

.sheet-name-hover:hover .show-on-hover {
  display: block;
}

.height-short {
  height: 17px;
  line-height: 1.2;
  transition: height 350ms;
}

.height-medium {
  height: 39px;
  line-height: 1.4;
  transition: height 350ms;
}

.height-tall {
  height: 72px;
  line-height: 1.4;
  transition: height 350ms;
}

.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden !important;
  position: relative;
}

.line-clamp-short {
  -webkit-line-clamp: 1;
}

.line-clamp-medium {
  -webkit-line-clamp: 2;
}

.line-clamp-tall {
  -webkit-line-clamp: 4;
}

.text-row-height {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
}

.height-screen {
  height: calc(100vh - 200px);
}

.spreadsheet-editor {
  .table-tools {
    .formatter-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .formatter-icon {
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        height: 25px;
        width: 25px;
        padding: 1px;
        &:hover {
          background-color: #e1ffee;
        }
      }
    }
  }
  tr {
    .row-index {
      .checkbox {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        background: #ffffff;
        border: 1px solid #95a0a6;
        display: none;
      }
    }

    &:hover {
      .row-index {
        .checkbox {
          display: flex;
        }
        .indexNo {
          display: none;
        }
      }
    }

    &.selected {
      background: #f0f7ff;
      box-shadow: #f0f7ff 0px 2px 2px 0px;
      textarea,
      td {
        background: #f0f7ff;
      }
      .row-index {
        .checkbox {
          background-color: #2d7ff9;
          border-color: transparent;
          display: flex;
        }
        .indexNo {
          display: none;
        }
      }
    }
  }
}
.deleteButton {
  color: red;
  cursor: pointer;
}

.color-red {
  color: #ff474c;
}

.custom-status-select {
  .feather-icon {
    display: none !important;
  }
  .vs__dropdown-toggle {
    border: none;
    align-items: baseline;
    background-color: unset;
  }
  .vs__selected-options {
    height: 17px;
  }

  .vs__search {
    height: 17px;
    max-width: 1px;
    background-color: unset;
  }
  .vs__selected {
    height: 17px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    min-width: 0px;
    max-width: 100%;
    border-radius: 10px;
    padding-left: 7px;
    font-size: 14px !important;
    font-family: Arial, Montserrat, Helvetica, sans-serif;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .vs__dropdown-option--highlight {
    span {
      color: white;
    }
  }
}
.custom-prompt .vs-dialog {
  max-width: 700px;
}

.invoice-generated-popup .vs-dialog {
  transition: all 0.2s;
  z-index: 100;
  width: calc(100% - 20px);
  margin: 10px;
  max-width: 400px;
  border-radius: 6px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  animation: rebound 0.3s;
}
.payment-received-prompt .vs-dialog {
  max-width: 400px;
}
</style>

<style scoped>
.height-tall .v-select {
  height: 72px;
}
.height-medium .v-select {
  height: 39px;
}
.height-short .v-select {
  height: 17px;
}
::v-deep(.vs__selected){
  color: #000000 !important;
}
</style>
