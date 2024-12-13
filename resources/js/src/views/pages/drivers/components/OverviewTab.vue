<template>
  <div>
    <!-- Overview Details -->
    <div class="vx-row w-full m-0 mt-4">
      <!-- First Column -->
      <div class="vx-col w-full pl-0 md:w-1/3 mb-8 md:mb-0">
        <!-- Personal Information Form -->
        <vx-card>
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Personal Information</h5>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                Email
                <field-required-sign v-if="!isEditForm" />
              </label>
              <vs-input
                class="w-full"
                v-model="formData.email"
                autocomplete="username"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                Truckpedia Driver App Password
                <field-required-sign v-if="!isEditForm" />
              </label>
              <vs-input
                class="w-full"
                v-model="formData.password"
                type="password"
                autocomplete="new-password"
              />
              <p
                v-if="isEditForm"
                class="mt-1 text-sm font-semibold opacity-75"
              >
                if you don't want to change password keep it blank.
              </p>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs"> Tags </label>
              <v-select
                :options="allTags"
                :clearable="true"
                v-model="formData.tags"
                label="business_name"
                class="mb-4 md:mb-0"
                multiple
                style="background: #fff"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">Employee ID</label>
              <vs-input class="w-full" v-model="formData.companyEmployeeId" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">Address</label>
              <vs-input class="w-full" v-model="formData.address" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Social Security</label>
              <vs-input class="w-full" v-model="formData.ssn" />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Date of Birth</label>
              <flat-pickr class="w-full" v-model="formData.birthDate" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Gender</label>
              <Dropdown
                class="w-full"
                v-model="formData.gender"
                :options="genderList"
                optionLabel="label"
                optionValue="value"
              />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Marital Status</label>
              <vs-input class="w-full" v-model="formData.maritalStatus" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Race</label>
              <vs-input class="w-full" v-model="formData.race" />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Country of Origin</label>
              <vs-input class="w-full" v-model="formData.originCountry" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">T-Shirt Size</label>
              <vs-input class="w-full" v-model="formData.shirtSize" />
            </div>
          </div>
        </vx-card>
        <!-- Emergency Contact Form -->
        <vx-card class="mt-4">
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Emergency Contact</h5>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Contact's Name</label>
              <vs-input
                class="w-full"
                v-model="formData.emergencyContactName"
              />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Contact's Phone Number</label>
              <vs-input
                class="w-full"
                v-model="formData.emergencyContactPhone"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Relationship to the Driver</label>
              <vs-input
                class="w-full"
                v-model="formData.emergencyContactRelationship"
              />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Contact's Email Address</label>
              <vs-input
                class="w-full"
                v-model="formData.emergencyContactEmail"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">Contact's Address</label>
              <vs-input
                class="w-full"
                v-model="formData.emergencyContactAddress"
              />
            </div>
          </div>
        </vx-card>
      </div>
      <!-- Second Column -->
      <div class="vx-col w-full md:w-1/3 mb-8 md:mb-0">
        <!-- Compliance Form -->
        <vx-card>
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Compliance</h5>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">CDL Number</label>
              <vs-input class="w-full" v-model="formData.cdlNumber" />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">CDL State</label>
              <vs-input class="w-full" v-model="formData.cdlState" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Original CDL Date</label>
              <flat-pickr
                v-model="formData.originalCdlDate"
                class="w-full"
                @on-change="
                  calculateExperience('cdl', formData.originalCdlDate)
                "
              />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Year CDL Experience</label>
              <vs-input class="w-full" :value="cdlExperience" disabled />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">CDL Class</label>
              <Dropdown
                class="w-full"
                v-model="formData.cdlClass"
                :options="cdlClassList"
                optionLabel="label"
                optionValue="value"
                :showClear="true"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">Endorsements</label>
              <div class="w-full flex flex-wrap justify-between">
                <span class="my-1">
                  <Checkbox
                    inputId="n"
                    value="N"
                    v-model="formData.endorsements"
                  />
                  <label>Tank(N)</label>
                </span>
                <span class="my-1">
                  <Checkbox
                    inputId="h"
                    value="H"
                    v-model="formData.endorsements"
                  />
                  <label>HazMat(H)</label>
                </span>
                <span class="my-1">
                  <Checkbox
                    inputId="x"
                    value="X"
                    v-model="formData.endorsements"
                  />
                  <label>Tank/HazMat(X)</label>
                </span>
                <span class="my-1">
                  <Checkbox
                    inputId="t"
                    value="T"
                    v-model="formData.endorsements"
                  />
                  <label>Doubles(T)</label>
                </span>
              </div>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">CDL Expiration Date</label>
              <flat-pickr class="w-full" v-model="formData.cdlExpirationDate" />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Medical Card Expiration Date</label>
              <flat-pickr
                class="w-full"
                v-model="formData.medicalCardExpirationDate"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Occupation Expiration Date</label>
              <flat-pickr
                class="w-full"
                v-model="formData.occupationExpirationDate"
              />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Clearinghouse Expiration Date</label>
              <flat-pickr
                class="w-full"
                v-model="formData.clearinghouseExpirationDate"
              />
            </div>
          </div>
          <!-- <div class="vx-row mt-2 mb-1">
            <div class="vx-col w-full">
              <label class="text-xs font-bold">Occupational Insurance</label>
            </div>
          </div> -->
          <!-- <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Insurance Start Date</label>
              <flat-pickr
                class="w-full"
                v-model="formData.occupationalInsuranceStartDate"
              />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Insurance End Date</label>
              <flat-pickr
                class="w-full"
                v-model="formData.occupationalInsuranceEndDate"
              />
            </div>
          </div> -->
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Drug Pool</label>
              <Dropdown
                class="w-full"
                v-model="formData.drugPool"
                :options="drugPoolList"
                optionLabel="label"
                optionValue="value"
                :showClear="true"
              />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Commercial Operation Type</label>
              <Dropdown
                class="w-full"
                v-model="formData.exceptedInterIntrastateType"
                :options="exceptedInterIntrastateTypeList"
                optionLabel="label"
                optionValue="value"
                :showClear="true"
              />
            </div>
          </div>
          <div class="vx-row mt-2 mb-1">
            <div class="vx-col w-full">
              <label class="text-xs font-bold">
                Workers Compensation Insurance
              </label>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Insurance Start Date</label>
              <flat-pickr
                class="w-full"
                v-model="formData.workersCompensationInsuranceStartDate"
              />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Insurance End Date</label>
              <flat-pickr
                class="w-full"
                v-model="formData.workersCompensationInsuranceEndDate"
              />
            </div>
          </div>
          <!-- <div class="vx-row mt-2 mb-1">
            <div class="vx-col w-full">
              <label class="text-xs font-bold">Company IFTA</label>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">IFTA Add Date</label>
              <flat-pickr class="w-full" v-model="formData.iftaAddDate" />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">IFTA Remove Date</label>
              <flat-pickr class="w-full" v-model="formData.iftaRemoveDate" />
            </div>
          </div> -->
          <div class="vx-row mt-2 mb-1">
            <div class="vx-col w-full">
              <label class="text-xs font-bold">Road Test</label>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Completed Date</label>
              <flat-pickr
                class="w-full"
                v-model="formData.roadTestCompletedDate"
              />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Examiner</label>
              <vs-input
                class="w-full"
                v-model="formData.roadTestCompletedExaminer"
              />
            </div>
          </div>
        </vx-card>
        <!-- Job Info Form -->
        <vx-card class="mt-4">
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Job Info</h5>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row flex items-center">
            <div class="vx-col w-1/2 flex justify-between items-end">
              <label class="text-xs">Off Duty</label>
              <span>
                <vs-switch
                  v-model="isOffDuty"
                  @input="
                    (val) => resetValue(val, ['offDutyUntil', 'offDutyComment'])
                  "
                />
              </span>
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Off Duty Until</label>
              <flat-pickr
                class="w-full"
                v-model="formData.offDutyUntil"
                :disabled="!isOffDuty"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">Off Duty Comment</label>
              <vs-input
                class="w-full"
                v-model="formData.offDutyComment"
                :disabled="!isOffDuty"
              />
            </div>
          </div>
          <div class="vx-row mt-2 flex items-center">
            <div class="vx-col w-1/2 flex justify-between items-end">
              <label class="text-xs">Returning Driver</label>
              <span>
                <vs-switch
                  v-model="isReturningDriver"
                  @input="(val) => resetValue(val, ['estimatedReturnDate'])"
                />
              </span>
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Estimated Return Date</label>
              <flat-pickr
                class="w-full"
                v-model="formData.estimatedReturnDate"
                :disabled="!isReturningDriver"
              />
            </div>
          </div>
          <div class="vx-row mt-2">
            <div class="vx-col w-1/3">
              <label class="text-xs">Date Added</label>
              <flat-pickr
                class="w-full"
                v-model="formData.dateAdded"
                @on-change="
                  calculateExperience(
                    'compTenure',
                    formData.dateAdded,
                    formData.dateRemoved || new Date()
                  )
                "
              />
            </div>
            <div class="vx-col w-1/3">
              <label class="text-xs">Date Removed</label>
              <flat-pickr
                class="w-full"
                v-model="formData.dateRemoved"
                @on-change="
                  calculateExperience(
                    'compTenure',
                    formData.dateAdded,
                    formData.dateRemoved
                  )
                "
              />
            </div>
            <div class="vx-col w-1/3">
              <label class="text-xs">Tenure at Company</label>
              <vs-input class="w-full" :value="tenureAtCompany" disabled />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">Reason For Termination</label>
              <vs-input class="w-full" v-model="formData.terminationReason" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Salary Target</label>
              <vs-input class="w-full" v-model="formData.salaryTarget" />
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Recruiter</label>
              <span>
                <vs-input class="w-full" v-model="formData.recruiter" />
              </span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label class="text-xs">Source</label>
              <span>
                <vs-input class="w-full" v-model="formData.source" />
              </span>
            </div>
            <div class="vx-col w-1/2">
              <label class="text-xs">Referred by</label>
              <vs-input class="w-full" v-model="formData.referredBy" />
            </div>
          </div>
        </vx-card>
      </div>
      <!-- Third Column -->
      <div class="vx-col w-full pr-0 md:w-1/3 mb-8 md:mb-0">
        <!-- Notes Section -->
        <vx-card>
          <div class="vx-row flex justify-between items-end">
            <div class="vx-col">
              <h5 class="font-bold">Notes</h5>
            </div>
            <div class="vx-col flex">
              <vs-button
                v-show="!addNewNote"
                color="primary"
                size="small"
                type="border"
                @click="addNewNote = true"
              >
                ADD NOTE
              </vs-button>
              <vs-button
                v-show="addNewNote"
                color="primary"
                size="small"
                type="border"
                icon="done"
                @click="addNote"
              />
              <vs-button
                v-show="addNewNote"
                class="ml-1"
                color="danger"
                size="small"
                type="border"
                icon="close"
                @click="addNewNote = false"
              />
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full" v-show="addNewNote">
              <vs-textarea class="w-full" v-model="note" />
            </div>
          </div>
          <div
            class="vx-row max-height-120 overflow-auto"
            v-if="formData.notes.length > 0"
          >
            <div
              class="vx-col w-full"
              v-for="(item, index) in formData.notes"
              :key="index"
            >
              <label class="text-xs">{{ item.note }}</label>
            </div>
          </div>
          <div class="vx-row" v-else>
            <div class="vx-col w-full">
              <label class="text-xs break-words">There are no notes yet</label>
            </div>
          </div>
        </vx-card>
        <!-- Driver Assignments Section -->
        <vx-card class="mt-4">
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Driver Assignments</h5>
            </div>
          </div>
          <vs-divider />
          <div>
            <div class="vx-row mx-0 driver-assignment-row">
              <div class="vx-col pl-0 w-1/4 dar-col-1">
                <label class="text-xs">Truck #</label>
              </div>
              <div class="vx-col w-1/4 dar-col-2">
                <label class="text-xs">Start Date</label>
              </div>
              <div class="vx-col w-1/4 dar-col-3">
                <label class="text-xs">End Date</label>
              </div>
              <div class="vx-row mx-0 dar-col-4">
                <div class="vx-col pr-0 w-1/2">
                  <label class="text-xs">Current</label>
                </div>
                <div class="vx-col pl-0 w-1/2">
                  <label class="text-xs" />
                </div>
              </div>
            </div>
            <div>
              <div
                :class="[
                  'vx-row mx-0 mb-2 driver-assignment-row',
                  { 'mt-1': index > 0 },
                ]"
                v-for="(truck, index) of formData.truckAssignments"
                :key="`truck-${index}`"
              >
                <div class="vx-col pl-0 w-1/4 dar-col-1">
                  <v-select
                    class="mb-4 md:mb-0"
                    v-model="truck.truckId"
                    :options="truckList"
                    label="number"
                    :reduce="(truck) => truck.id"
                    placeholder="Select Truck"
                  />
                </div>
                <div class="vx-col w-1/4 dar-col-2">
                  <flat-pickr class="w-full" v-model="truck.startDate" />
                </div>
                <div class="vx-col w-1/4 dar-col-3">
                  <flat-pickr class="w-full" v-model="truck.endDate" />
                </div>
                <div class="vx-col pr-0 w-1/4 self-center flex dar-col-4">
                  <div class="vx-row mx-0 w-full">
                    <div class="vx-col p-0 pl-1 w-3/4 self-center flex">
                      <vs-switch
                        :value="truck.isCurrent"
                        @input="changeTruckAssignmentToggle(index)"
                      />
                    </div>
                    <div class="vx-col p-0 pl-1 w-1/4 self-center flex">
                      <vs-icon
                        class="cursor-pointer text-danger"
                        size="small"
                        icon="delete"
                        @click.stop="removeTruckAssignment(index)"
                      />
                    </div>
                  </div>
                </div>
                <span
                  v-if="!formData.truckAssignments[index].truckId"
                  class="text-danger text-sm"
                >
                  Truck is required. Select a truck or remove row
                </span>
              </div>
            </div>
          </div>
          <div class="vx-row mt-2">
            <div class="vx-col w-full">
              <vs-button
                color="primary"
                size="small"
                type="border"
                @click="addNewTruckAssignment"
              >
                New Assignment
              </vs-button>
            </div>
          </div>
          <div class="mt-2">
            <div class="vx-row mx-0 driver-assignment-row">
              <div class="vx-col pl-0 w-1/4 dar-col-1">
                <label class="text-xs">Trailer #</label>
              </div>
              <div class="vx-col w-1/4 dar-col-2">
                <label class="text-xs">Start Date</label>
              </div>
              <div class="vx-col w-1/4 dar-col-3">
                <label class="text-xs">End Date</label>
              </div>
              <div class="vx-row mx-0 dar-col-4">
                <div class="vx-col pr-0 w-1/2">
                  <label class="text-xs">Current</label>
                </div>
                <div class="vx-col pl-0 w-1/2">
                  <label class="text-xs"></label>
                </div>
              </div>
            </div>
            <div>
              <div
                :class="[
                  'vx-row mx-0 mb-2 driver-assignment-row',
                  { 'mt-1': index > 0 },
                ]"
                v-for="(trailer, index) of formData.trailerAssignments"
                :key="`trailer-${index}`"
              >
                <div class="vx-col pl-0 w-1/4 dar-col-1">
                  <v-select
                    class="mb-4 md:mb-0"
                    v-model="trailer.trailerId"
                    :options="trailerList"
                    label="number"
                    :reduce="(trailer) => trailer.id"
                    placeholder="Select Trailer"
                  />
                </div>
                <div class="vx-col w-1/4 dar-col-2">
                  <flat-pickr class="w-full" v-model="trailer.startDate" />
                </div>
                <div class="vx-col w-1/4 dar-col-3">
                  <flat-pickr class="w-full" v-model="trailer.endDate" />
                </div>
                <div class="vx-col pr-0 w-1/4 self-center flex dar-col-4">
                  <div class="vx-row mx-0 w-full">
                    <div class="vx-col p-0 pl-1 w-3/4 self-center flex">
                      <vs-switch
                        :value="trailer.isCurrent"
                        @input="changeTrailerAssignmentToggle(index)"
                      />
                    </div>
                    <div class="vx-col p-0 pl-1 w-1/4 self-center flex">
                      <vs-icon
                        class="cursor-pointer text-danger"
                        size="small"
                        icon="delete"
                        @click.stop="removeTrailerAssignment(index)"
                      />
                    </div>
                  </div>
                </div>
                <span
                  v-if="!formData.trailerAssignments[index].trailerId"
                  class="text-danger text-sm"
                >
                  Trailer is required. Select a trailer or remove row
                </span>
              </div>
            </div>
          </div>
          <div class="vx-row mt-2">
            <div class="vx-col w-full">
              <vs-button
                color="primary"
                size="small"
                type="border"
                @click="addNewTrailerAssignment"
              >
                New Assignment
              </vs-button>
            </div>
          </div>
        </vx-card>
        <!-- Fuel Card Section -->
        <vx-card class="mt-4">
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Fuel Card</h5>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-1/2 flex flex-col">
              <label class="text-xs">Fuel Card</label>
              <vs-input class="w-full" v-model="formData.fuelCardNumber" />
            </div>
          </div>
        </vx-card>
      </div>
    </div>
    <vx-card class="mt-4">
      <div class="vx-row">
        <div class="vx-col ml-auto">
          <vs-button @click.stop="submitForm">SAVE</vs-button>
          <vs-button type="border" @click.stop="redirectToDriverList">
            CANCEL
          </vs-button>
        </div>
      </div>
    </vx-card>
  </div>
</template>
<!-- eslint-disable multiline-ternary nonblock-statement-body-position -->
<script>
// Libraries
import { cloneDeep, isEmpty } from "lodash";
import { mapGetters } from "vuex";

export default {
  name: "OverviewTab",
  components: {
    OverviewCard: () => import("./OverviewCard.vue"),
  },
  props: {
    dataObj: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("vehicleV2", ["getAllVehiclesList"]),
    ...mapGetters("tag", ["allTags"]),

    isEditForm() {
      return this.$route.name === "drivers-edit";
    },
    truckList() {
      if (!this.getAllVehiclesList.trucks) return [];

      return this.getAllVehiclesList.trucks.map((truck, index) => ({
        ...truck,
        uniqueId: `truck-${index}`,
      }));
    },
    trailerList() {
      if (!this.getAllVehiclesList.trailers) return [];

      return this.getAllVehiclesList.trailers.map((trailer, index) => ({
        ...trailer,
        uniqueId: `trailer-${index}`,
      }));
    },
  },
  data() {
    return {
      isOffDuty: false,
      isReturningDriver: false,
      genderList: [
        {
          id: 1,
          label: "Male",
          value: "male",
        },
        {
          id: 2,
          label: "Female",
          value: "female",
        },
        {
          id: 3,
          label: "Other",
          value: "other",
        },
      ],
      cdlExperience: "",
      tenureAtCompany: "",
      addNewNote: false,
      note: "",
      drugPoolList: [
        {
          id: 1,
          label: "Yes",
          value: "yes",
        },
        {
          id: 2,
          label: "No",
          value: "no",
        },
      ],
      cdlClassList: [
        {
          id: 1,
          label: "Class A",
          value: "A",
        },
        {
          id: 2,
          label: "Class B",
          value: "B",
        },
        {
          id: 3,
          label: "Class C",
          value: "C",
        },
        {
          id: 4,
          label: "Class E",
          value: "E",
        },
        {
          id: 5,
          label: "Class F",
          value: "F",
        },
      ],
      exceptedInterIntrastateTypeList: [
        {
          id: 1,
          label: "Interstate Non-Excepted",
          value: "nonExceptedInterstate",
        },
        {
          id: 3,
          label: "Interstate Excepted",
          value: "exceptedInterstate",
        },
        {
          id: 2,
          label: "Intrastate Non-Excepted",
          value: "nonExceptedIntrastate",
        },
        {
          id: 4,
          label: "Intrastate Excepted",
          value: "exceptedIntrastate",
        },
      ],
      formData: {
        firstName: "",
        lastName: "",
        status: "active",
        phone: "",
        driverType: "employee",
        isTeamDriver: false,
        isLocalDriver: false,
        isRegionalDriver: false,
        email: "",
        password: "",
        address: "",
        ssn: "",
        birthDate: "",
        gender: "",
        maritalStatus: "",
        race: "",
        originCountry: "",
        shirtSize: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
        emergencyContactRelationship: "",
        emergencyContactEmail: "",
        emergencyContactAddress: "",
        cdlNumber: "",
        cdlState: "",
        originalCdlDate: "",
        cdlClass: null,
        endorsements: [],
        cdlExpirationDate: "",
        medicalCardExpirationDate: "",
        occupationExpirationDate: "",
        clearinghouseExpirationDate: "",
        // occupationalInsuranceStartDate: "",
        // occupationalInsuranceEndDate: "",
        exceptedInterIntrastateType: null,
        workersCompensationInsuranceStartDate: "",
        workersCompensationInsuranceEndDate: "",
        iftaAddDate: "",
        iftaRemoveDate: "",
        offDutyUntil: "",
        offDutyComment: "",
        estimatedReturnDate: "",
        dateAdded: "",
        dateRemoved: "",
        terminationReason: "",
        salaryTarget: "",
        recruiter: "",
        source: "",
        referredBy: "",
        notes: [],
        truckAssignments: [],
        trailerAssignments: [],
        fuelCardNumber: "",
        tags: [],
        companyEmployeeId: "",
      },
    };
  },
  mounted() {
    if (this.dataObj)
      this.formData = {
        ...this.formData,
        ...cloneDeep(this.dataObj),
      };

    this.init();
  },
  beforeDestroy() {
    this.$emit("update:Overview", this.formData);
  },
  methods: {
    async init() {
      try {
        if (isEmpty(this.getAllVehiclesList))
          await this.$store.dispatch("vehicleV2/fetchAllVehicles");
        if (this.isEditForm) {
          this.isOffDuty = this.formData.offDutyUntil !== "";
          this.isReturningDriver = this.formData.estimatedReturnDate !== "";
        }
      } catch (error) {}
    },
    resetValue(val, field) {
      if (!val)
        field.forEach((f) => {
          this.formData[f] = "";
        });
    },
    addNote() {
      this.formData.notes.push({ id: null, note: this.note });
      this.note = "";
    },
    calculateExperience(field, fromDate, toDate = new Date()) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      const diff = to.getTime() - from.getTime();

      if (diff < 0 || isNaN(diff)) {
        if (field === "cdl") this.cdlExperience = "";
        else if (field === "compTenure") this.tenureAtCompany = "";
        return;
      }

      const diffInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const diffInMonths = Math.floor(
        (diff - diffInYears * (1000 * 60 * 60 * 24 * 365)) /
          (1000 * 60 * 60 * 24 * 30)
      );
      const exp =
        diffInYears > 0
          ? `${diffInYears} Years ${diffInMonths} Months`
          : `${diffInMonths} Months`;
      if (field === "cdl") this.cdlExperience = exp;
      else if (field === "compTenure") this.tenureAtCompany = exp;
    },
    addNewTruckAssignment() {
      this.formData.truckAssignments.push({
        truckId: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
      });
    },
    addNewTrailerAssignment() {
      this.formData.trailerAssignments.push({
        trailerId: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
      });
    },
    changeTruckAssignmentToggle(index) {
      this.formData.truckAssignments.forEach((truck, i) => {
        if (i === index) {
          truck.isCurrent = !truck.isCurrent;
        } else {
          truck.isCurrent = false;
        }
      });
    },
    changeTrailerAssignmentToggle(index) {
      this.formData.trailerAssignments.forEach((trailer, i) => {
        if (i === index) {
          trailer.isCurrent = !trailer.isCurrent;
        } else {
          trailer.isCurrent = false;
        }
      });
    },
    submitForm() {
      if (this.isOffDuty && !this.formData.offDutyUntil) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: "Off duty until date is required",
        });
        return;
      }
      if (this.isReturningDriver && !this.formData.estimatedReturnDate) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: "Estimated return date is required",
        });
        return;
      }
      this.$emit("submit:Overview", this.formData);
    },
    redirectToDriverList() {
      this.$router.push({ name: "drivers" }).catch(() => true);
    },
    removeTruckAssignment(index) {
      this.formData.truckAssignments.splice(index, 1);
    },
    removeTrailerAssignment(index) {
      this.formData.trailerAssignments.splice(index, 1);
    },
  },
  watch: {
    dataObj: {
      handler(newVal) {
        if (newVal) {
          this.formData = {
            ...this.formData,
            ...cloneDeep(newVal),
          };
          if (this.isEditForm) {
            this.isOffDuty = this.formData.offDutyUntil !== "";
            this.isReturningDriver = this.formData.estimatedReturnDate !== "";
          }
        }
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.driver-assignment-row {
  .dar-col-1 {
    padding: 0;
    width: 35% !important;
  }
  .dar-col-2,
  .dar-col-3 {
    padding: 0 0.25rem;
    width: 25% !important;
  }
  .dar-col-4 {
    padding: 0;
    width: 15% !important;
  }
}

// Utilities
.text-red {
  color: #ea5758;
}
.max-height-120 {
  max-height: 120px;
}
</style>
