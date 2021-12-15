<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h3>{{ $t("dashboard") }}</h3>
    </v-subheader>
    <br />
    <v-row>
      <v-col lg="7" cols="12">
        <v-alert dense text type="success">
          {{ $t("title") }} <strong>{{ user.name }}</strong>
        </v-alert>
        <v-row>
          <v-col
            lg="6"
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
      <v-col cols="12" lg="5"> </v-col>
      <v-col>
        <v-card>
          <v-data-table
            caption="Factories List"
            :headers="headers.a1"
            :items="desserts.a1"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  {{ $t("update") }}
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal first name*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Save
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
            caption="Factories Name"
            :headers="headers.a2"
            :items="desserts.a2"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  {{ $t("update") }}
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal first name*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="[
                            'Skiing',
                            'Ice hockey',
                            'Soccer',
                            'Basketball',
                            'Hockey',
                            'Reading',
                            'Writing',
                            'Coding',
                            'Basejump',
                          ]"
                          label="Interests"
                          multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Save
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
