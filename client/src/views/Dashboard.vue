<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h3>{{ $t("dashboard") }}</h3>
    </v-subheader>
    <br />
    <v-row>
      <v-col lg="12" cols="12">
        <v-alert dense text type="success">
          {{ $t("title") }} <strong>{{ user.name }}</strong>
        </v-alert>
        <v-row>
          <v-col
            lg="12"
            cols="12"
            v-for="(item, index) in activityLog"
            :key="index"
          >
            <v-card elevation="2" class="rounded-lg">
              <v-card-text class="d-flex justify-space-between align-center">
                <div>
                  <strong>{{ item.title }}</strong> <br />
                  <span>Last 3 weeks</span>
                </div>
                <v-avatar
                  size="60"
                  :color="item.color"
                  style="border: 3px solid #444"
                >
                  <span style="color: white">{{ item.amount }} +</span>
                </v-avatar>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-card>
          <v-data-table
            @click:row="openPopupWidthById"
            caption="Factories List"
            :headers="headers.a1"
            :items="desserts.a1"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
          <v-row justify="center">
            <v-dialog v-model="factoriesListPopup" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="submitType = 'listAdd'"
                  value="ADD"
                >
                  {{ $t(submitType) }}
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Factory Name"
                          required
                          v-model="factoryName"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Membership Date"
                          hint="example of helper text only on focus"
                          v-model="membershipDate"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Membership Expiration Date"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                          v-model="membershipExpirationDate"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Number Of Employees"
                          type="example of persistent helper text"
                          required
                          v-model="numberOfEmployees"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Special Member"
                          type="example of persistent helper text"
                          required
                          v-model="specialMember"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="factoriesListPopup = false"
                  >
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="factoriesListAdd">
                    {{ $t(submitType) }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-data-table
            @click:row="openPopupWidthByIdName"
            caption="Factories Name"
            :headers="headers.a2"
            :items="desserts.a2"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
          <v-row justify="center">
            <v-dialog v-model="factoriesNamePopup" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="submitType = 'nameAdd'"
                  value="ADD"
                >
                  {{ $t(submitType) }}
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Used Unit" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Date Range"
                          hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Use of Kw"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          label="Usage Fee*"
                          type="text"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Discounted Price"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = factoriesNamePopup = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = factoriesNameAdd"
                  >
                    {{ $t(submitType) }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      headers: {
        a1: [
          {
            text: "Factory Name",
            align: "start",
            sortable: false,
            value: "factoryName",
          },

          { text: "Membership Date", value: "membershipDate" },
          {
            text: "Membership Expiration Date",
            value: "membershipExpirationDate",
          },
          { text: "Number Of Employees", value: "numberOfEmployees" },
          { text: "Special Member", value: "specialMember" },
        ],
        a2: [
          {
            text: "Used Unit",
            align: "start",
            sortable: false,
            value: "usedUnit",
          },
          {
            text: "Date Range",
            value: "dateRange",
          },
          { text: "Use Of Kw", value: "useOfKw" },
          { text: "Usage Fee", value: "usageFee" },
          { text: "Discounted Price", value: "discountedPrice" },
        ],
      },

      factoriesListPopup: false,
      factoriesNamePopup: false,

      submitType: "ADD",
      factoryListId: 0,
      factoryName: null,
      membershipDate: null,
      membershipExpirationDate: null,
      numberOfEmployees: null,
      specialMember: null,

      factoryNameId: 0,
      usedUnit: null,
      dateRange: null,
      useOfKw: null,
      usageFee: null,
      discountedPrice: null,

      desserts: { a1: [], a2: [] },
    };
  },
  computed: {
    ...mapState("account", ["user"]),
  },
  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },
    openPopupWidthById(item) {
      this.factoryName = item.factoryName;
      this.membershipDate = item.membershipDate;
      this.membershipExpirationDate = item.membershipExpirationDate;
      this.numberOfEmployees = item.numberOfEmployees;
      this.specialMember = item.specialMember;
      this.factoryListId = item.id;
      this.submitType = "UPDATE";
      this.factoriesListPopup = true;
    },
    openPopupWidthByIdName(item) {
      this.usedUnit = item.usedUnit;
      this.dateRange = item.dateRange;
      this.useOfKw = item.useOfKw;
      this.usageFee = item.usageFee;
      this.discountedPrice = item.discountedPrice;
      this.factoryNameId = item.id;
      this.submitType = "UPDATE";
      this.factoriesNamePopup = true;
    },

    async factoriesListAdd() {
      switch (this.submitType) {
        case "listAdd":
          await axios.post("/factoriesList", {
            factoryName: this.factoryName,
            membershipDate: this.membershipDate,
            membershipExpirationDate: this.membershipExpirationDate,
            numberOfEmployees: this.numberOfEmployees,
            specialMember: this.specialMember,
          });

          this.factoryName = "";

          this.membershipDate = "";
          this.membershipExpirationDate = "";
          this.numberOfEmployees = "";
          this.specialMember = "";

          this.factoriesListPopup = false;

          this.desserts.a1 = (
            await axios.get("http://localhost:3000/factoriesList")
          ).data;

          break;

        case "UPDATE":
          await axios.patch(`/factoriesList/${this.factoryListId}`, {
            factoryName: this.factoryName,
            membershipDate: this.membershipDate,
            membershipExpirationDate: this.membershipExpirationDate,
            numberOfEmployees: this.numberOfEmployees,
            specialMember: this.specialMember,
          });

          this.factoryName = "";

          this.membershipDate = "";
          this.membershipExpirationDate = "";
          this.numberOfEmployees = "";
          this.specialMember = "";

          this.factoriesListPopup = false;

          this.desserts.a1 = (
            await axios.get("http://localhost:3000/factoriesList")
          ).data;

          break;

        default:
          break;
      }
    },
    async factoriesNameAdd() {
      switch (this.submitType) {
        case "nameAdd":
          await axios.post("/factoriesName", {
            usedUnit: this.usedUnit,
            dateRange: this.dateRange,
            useOfKw: this.useOfKw,
            usageFee: this.usageFee,
            discountedPrice: this.discountedPrice,
          });

          this.usedUnit = "";

          this.dateRange = "";
          this.useOfKw = "";
          this.usageFee = "";
          this.discountedPrice = "";

          this.factoriesNamePopup = false;

          this.desserts.a2 = (
            await axios.get("http://localhost:3000/factoriesName")
          ).data;

          break;

        case "UPDATE":
          await axios.patch(`/factoriesName/${this.factoryNameId}`, {
            usedUnit: this.usedUnit,
            dateRange: this.dateRange,
            useOfKw: this.useOfKw,
            usageFee: this.usageFee,
            discountedPrice: this.discountedPrice,
          });

          this.usedUnit = "";

          this.dateRange = "";
          this.useOfKw = "";
          this.usageFee = "";
          this.discountedPrice = "";

          this.factoriesNamePopup = false;

          this.desserts.a2 = (
            await axios.get("http://localhost:3000/factoriesName")
          ).data;

          break;

        default:
          break;
      }
    },
  },

  created() {
    if (!this.user) this.$router.push("/login");
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/factoriesList");
    this.desserts.a1 = response.data;

    const response2 = await axios.get("http://localhost:3000/factoriesName");
    this.desserts.a2 = response2.data;
  },
};
</script>

<style scoped>
.overlap-icon {
  position: absolute;
  top: -33px;
  text-align: center;
  padding-top: 12px;
}
</style>
