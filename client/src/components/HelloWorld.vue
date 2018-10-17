<template>
    <div class="portfolio_metrics">
        <!-- <b-button @click="getPortfolio" variant="success">Refresh</b-button> -->
        <h1>Portfolio Metrics</h1>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Debt To Asset</th>
                    <th scope="col">Cash Flow</th>
                    <th scope="col">Reserves</th>
                    <th scope="col">Equity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ portfolioMetrics.debtToAsset }}</td>
                    <td>{{ portfolioMetrics.cashFlow }}</td>
                    <td>{{ portfolioMetrics.reserves }}</td>
                    <td>{{ portfolioMetrics.equity }}</td>
                </tr>
            </tbody>
        </table>
        <alert :message="message" v-if="showMessage"></alert>
        <b-button v-b-modal.wealthPair-modal variant="success">Add Wealth Pair</b-button>

        <b-modal ref="addWealthPairModal"
                id="wealthPair-modal"
                title="Add a new wealth pair"
                hide-footer>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-card bg-variant="light">
                    <b-form-group
                            breakpoint="lg"
                            label="Asset Detail"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                        <b-form-select v-model="assetType" :options="assetTypeOptions" :required="true"/>
                        <b-form-group horizontal
                                label="Name:"
                                label-class="text-sm-right"
                                label-for="assetName">
                            <b-form-input type="text" v-model="assetName"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                                label="Value:"
                                label-class="text-sm-right"
                                label-for="assetValue">
                        <b-form-input type="number" v-model="assetValue"></b-form-input>
                        </b-form-group>
                            <b-form-group horizontal
                                    label="Income:"
                                    label-class="text-sm-right"
                                    label-for="assetIncome">
                            <b-form-input type="number" v-model="assetIncome"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                                label="Operating Expenses:"
                                label-class="text-sm-right"
                                label-for="operatingExpenses">
                            <b-form-input type="number" v-model="operatingExpenses"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                                label="Appreciation Rate (%):"
                                label-class="text-sm-right"
                                label-for="appreciationRate">
                            <b-form-input type="number" v-model="appreciationRate"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                                label="Term (years):"
                                label-class="text-sm-right"
                                label-for="term">
                            <b-form-input type="number" v-model="term"></b-form-input>
                        </b-form-group>
                    </b-form-group>
                </b-card>
                <b-card bg-variant="light" title="Capital Stack">
                    <b-card bg-variant="light">
                        <b-form-group
                            breakpoint="lg"
                            label="Leverage"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                            <b-form-select v-model="leverageType" :options="leverageTypeOptions" :required="true"/>
                            <b-form-group horizontal
                                label="Amount:"
                                label-class="text-sm-right"
                                label-for="leverageAmount">
                                <b-form-input type=number v-model="leverageAmount"></b-form-input>
                            </b-form-group>
                            <b-form-group horizontal
                                label="Interest Rate (%):"
                                label-class="text-sm-right"
                                label-for="interestRate">
                                <b-form-input type=number v-model="interestRate"></b-form-input>
                            </b-form-group>
                                <b-form-group horizontal
                                label="Term (years)"
                                label-class="text-sm-right"
                                label-for="leverageTerm">
                                <b-form-input type=number v-model="leverageTerm"></b-form-input>
                            </b-form-group>
                            <b-form-group horizontal
                                label="Payment Freq Per Year:"
                                label-class="text-sm-right"
                                label-for="paymentFreq">
                                <b-form-input type=number v-model="paymentFreq"></b-form-input>
                            </b-form-group>
                        </b-form-group>
                    </b-card>
                    <b-card bg-variant="light">
                        <b-form-group
                            breakpoint="lg"
                            label="Equity"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                            <b-form-group horizontal
                                label="Equity Partner Amount:"
                                label-class="text-sm-right"
                                label-for="equityAmount">
                                <b-form-input type=number v-model="equityAmount"></b-form-input>
                            </b-form-group>
                            <b-form-group horizontal
                                label="Profit Split (%):"
                                label-class="text-sm-right"
                                label-for="equitySplit">
                                <b-form-input type=number v-model="equitySplit"></b-form-input>
                            </b-form-group>
                                <b-form-group horizontal
                                label="My Capital Amount:"
                                label-class="text-sm-right"
                                label-for="myCapital">
                                <b-form-input type=number v-model="myCapital"></b-form-input>
                            </b-form-group>
                        </b-form-group>
                    </b-card>
                    <b-card bg-variant="light">
                        <b-form-group
                            breakpoint="lg"
                            label="Reserves"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                            <b-form-group horizontal
                                label="Equity Partner Amount:"
                                label-class="text-sm-right"
                                label-for="equityReserves">
                                <b-form-input type=number v-model="equityReserves"></b-form-input>
                            </b-form-group>
                                <b-form-group horizontal
                                label="My Capital Amount:"
                                label-class="text-sm-right"
                                label-for="myReserves">
                                <b-form-input type=number v-model="myReserves"></b-form-input>
                            </b-form-group>
                        </b-form-group>
                    </b-card>
                </b-card>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-modal>


        <div id="assetLists">
            <h2>Income Assets</h2>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Debt To Asset</th>
                        <th scope="col">Cash Flow</th>
                        <th scope="col">Reserves</th>
                        <th scope="col">Equity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(wealthPair, uid) in incomeWealthPairs" :key="uid">
                        <td>{{ wealthPair.deal.asset.name }}</td>
                        <td>{{ wealthPair.debtToAssetRatio }}</td>
                        <td>{{ wealthPair.cashFlow }}</td>
                        <td>{{ wealthPair.reserves }}</td>
                        <td>{{ wealthPair.equity }}</td>
                        <td>
                            <b-button size="sm" variant="warning" v-b-modal.editWealthPair-modal @click="editWealthPair(wealthPair, uid)">Edit</b-button>
                            <b-button size="sm" variant="danger" @click="onDeleteWealthPair(uid)">Delete</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Growth Assets</h2>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Debt To Asset</th>
                        <th scope="col">Cash Flow</th>
                        <th scope="col">Reserves</th>
                        <th scope="col">Equity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(wealthPair, uid) in growthWealthPairs" :key="uid">
                        <td>{{ wealthPair.deal.asset.name }}</td>
                        <td>{{ wealthPair.debtToAssetRatio }}</td>
                        <td>{{ wealthPair.cashFlow }}</td>
                        <td>{{ wealthPair.reserves }}</td>
                        <td>{{ wealthPair.equity }}</td>
                        <td>
                            <b-button size="sm" variant="warning" v-b-modal.editWealthPair-modal @click="editWealthPair(wealthPair, uid)">Edit</b-button>
                            <b-button size="sm" variant="danger" @click="onDeleteWealthPair(uid)">Delete</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Both Assets</h2>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Debt To Asset</th>
                        <th scope="col">Cash Flow</th>
                        <th scope="col">Reserves</th>
                        <th scope="col">Equity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(wealthPair, uid) in bothWealthPairs" :key="uid">
                        <td>{{ wealthPair.deal.asset.name }}</td>
                        <td>{{ wealthPair.debtToAssetRatio }}</td>
                        <td>{{ wealthPair.cashFlow }}</td>
                        <td>{{ wealthPair.reserves }}</td>
                        <td>{{ wealthPair.equity }}</td>
                        <td>
                            <b-button size="sm" variant="warning" v-b-modal.editWealthPair-modal @click="editWealthPair(wealthPair, uid)">Edit</b-button>
                            <b-button size="sm" variant="danger" @click="onDeleteWealthPair(uid)">Delete</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <canvas id="projection-chart"></canvas>

        <b-modal ref="editWealthPairModal"
                id="editWealthPair-modal"
                title="Edit wealth pair"
                hide-footer>
            <b-form @submit="onSubmitUpdate" @reset="onResetUpdate">
                <b-card bg-variant="light">
                    <b-form-group
                            breakpoint="lg"
                            label="Asset Detail"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                        <b-form-select v-model="editForm.assetType" :options="assetTypeOptions" :required="true"/>
                        <b-form-group horizontal
                                label="Name:"
                                label-class="text-sm-right"
                                label-for="assetName">
                            <b-form-input type="text" v-model="editForm.assetName"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                                label="Value:"
                                label-class="text-sm-right"
                                label-for="assetValue">
                        <b-form-input type="number" v-model="editForm.assetValue"></b-form-input>
                        </b-form-group>
                            <b-form-group horizontal
                                    label="Income:"
                                    label-class="text-sm-right"
                                    label-for="assetIncome">
                            <b-form-input type="number" v-model="editForm.assetIncome"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                                label="Operating Expenses:"
                                label-class="text-sm-right"
                                label-for="operatingExpenses">
                            <b-form-input type="number" v-model="editForm.operatingExpenses"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                                label="Appreciation Rate (%):"
                                label-class="text-sm-right"
                                label-for="appreciationRate">
                            <b-form-input type="number" v-model="editForm.appreciationRate"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                                label="Term (years):"
                                label-class="text-sm-right"
                                label-for="term">
                            <b-form-input type="number" v-model="editForm.term"></b-form-input>
                        </b-form-group>
                    </b-form-group>
                </b-card>
                <b-card bg-variant="light" title="Capital Stack">
                    <b-card bg-variant="light">
                        <b-form-group
                            breakpoint="lg"
                            label="Leverage"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                            <b-form-select v-model="editForm.leverageType" :options="leverageTypeOptions" :required="true"/>
                            <b-form-group horizontal
                                label="Amount:"
                                label-class="text-sm-right"
                                label-for="leverageAmount">
                                <b-form-input type=number v-model="editForm.leverageAmount"></b-form-input>
                            </b-form-group>
                            <b-form-group horizontal
                                label="Interest Rate (%):"
                                label-class="text-sm-right"
                                label-for="interestRate">
                                <b-form-input type=number v-model="editForm.interestRate"></b-form-input>
                            </b-form-group>
                                <b-form-group horizontal
                                label="Term (years)"
                                label-class="text-sm-right"
                                label-for="leverageTerm">
                                <b-form-input type=number v-model="editForm.leverageTerm"></b-form-input>
                            </b-form-group>
                            <b-form-group horizontal
                                label="Payment Freq Per Year:"
                                label-class="text-sm-right"
                                label-for="paymentFreq">
                                <b-form-input type=number v-model="editForm.paymentFreq"></b-form-input>
                            </b-form-group>
                        </b-form-group>
                    </b-card>
                    <b-card bg-variant="light">
                        <b-form-group
                            breakpoint="lg"
                            label="Equity"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                            <b-form-group horizontal
                                label="Equity Partner Amount:"
                                label-class="text-sm-right"
                                label-for="equityAmount">
                                <b-form-input type=number v-model="editForm.equityAmount"></b-form-input>
                            </b-form-group>
                            <b-form-group horizontal
                                label="Profit Split (%):"
                                label-class="text-sm-right"
                                label-for="equitySplit">
                                <b-form-input type=number v-model="editForm.equitySplit"></b-form-input>
                            </b-form-group>
                                <b-form-group horizontal
                                label="My Capital Amount:"
                                label-class="text-sm-right"
                                label-for="myCapital">
                                <b-form-input type=number v-model="editForm.myCapital"></b-form-input>
                            </b-form-group>
                        </b-form-group>
                    </b-card>
                    <b-card bg-variant="light">
                        <b-form-group
                            breakpoint="lg"
                            label="Reserves"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                            <b-form-group horizontal
                                label="Equity Partner Amount:"
                                label-class="text-sm-right"
                                label-for="equityReserves">
                                <b-form-input type=number v-model="editForm.equityReserves"></b-form-input>
                            </b-form-group>
                                <b-form-group horizontal
                                label="My Capital Amount:"
                                label-class="text-sm-right"
                                label-for="myReserves">
                                <b-form-input type=number v-model="editForm.myReserves"></b-form-input>
                            </b-form-group>
                        </b-form-group>
                    </b-card>
                </b-card>
                <b-button type="submit" variant="primary">Update</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-modal>

    </div>
</template>

<script>
// import WealthPairService from '@/services/WealthPairService'
import PortfolioService from '@/services/PortfolioService'
import axios from 'axios'
import Alert from './Alert'
import Chart from 'chart.js'

export default {
    data () {
        return {

            portfolioMetrics: {},
            assetMetricFields: [
                'name', 'debtToAsset', 'cashFlow', 'reserves', 'equity'
            ],
            incomeAssets: [],
            growthAssets: [],
            bothAssets: [],
            assetTypeOptions: [
                { value: "null", text:"New Asset Type" },
                { value: "incomeAsset", text:"Income Asset" },
                { value: "growthAsset", text:"Growth Asset" },
                { value: "bothAsset", text:"Both Asset"}
            ],
            assetType: "incomeAsset",
            assetName:"Note",
            assetValue:"100000",
            assetIncome:"12000",
            operatingExpenses:"1000",
            appreciationRate:"0",
            term:"0",
            leverageTypeOptions: [
                { value: "null", text:"New Leverage Type" },
                { value: "fullyAmortizing", text:"Fully Amortizing" },
                { value: "interestOnly", text:"Interest Only" },
                { value: "accruing", text:"Accruing"}
            ],
            leverageType: "fullyAmortizing",
            leverageAmount:"50000",
            interestRate:"5",
            leverageTerm:"30",
            paymentFreq:"12",
            equityAmount:"50000",
            equitySplit:"50",
            myCapital:"0",
            equityReserves:"10000",
            myReserves:"0",
            incomeWealthPairs:[],
            growthWealthPairs:[],
            bothWealthPairs:[],
            message:"",
            showMessage: false,
            editForm: {},
            projection: {},
            projectionChartData: {},
        };
    },
    methods: {
        getPortfolio() {
            const path='http://localhost:5000/newAPI';
            axios.get(path)
                .then((res) => {
                    // eslint-disable-next-line
                    console.log(res.data)
                    // eslint-disable-next-line
                    console.log(res.data.portfolioMetrics)
                    // eslint-disable-next-line
                    console.log(res.data.incomeWealthPairs)
                    // eslint-disable-next-line
                    console.log(res.data.growthWealthPairs)
                    // eslint-disable-next-line
                    console.log(res.data.bothWealthPairs)
                    this.portfolioMetrics = res.data.portfolioMetrics;
                    this.incomeWealthPairs = res.data.incomeWealthPairs;
                    this.growthWealthPairs = res.data.growthWealthPairs;
                    this.bothWealthPairs = res.data.bothWealthPairs;
                    this.projection = res.data.projection;

                    this.projectionChartData = {
                        type: 'line',
                        data: {
                            labels: this.projection.xx,
                            datasets: [
                                { // one line graph
                                    label: 'Assets',
                                    data: this.projection.assets,
                                    backgroundColor: [
                                      'rgba(54,73,93,.5)', // Blue
                                      'rgba(54,73,93,.5)',
                                      'rgba(54,73,93,.5)',
                                      'rgba(54,73,93,.5)',
                                      'rgba(54,73,93,.5)',
                                      'rgba(54,73,93,.5)',
                                      'rgba(54,73,93,.5)',
                                      'rgba(54,73,93,.5)'
                                    ],
                                    borderColor: [
                                      '#36495d',
                                      '#36495d',
                                      '#36495d',
                                      '#36495d',
                                      '#36495d',
                                      '#36495d',
                                      '#36495d',
                                      '#36495d',
                                    ],
                                    borderWidth: 3
                                },
                                { // another line graph
                                    label: 'Debts',
                                    data: this.projection.debts,
                                    backgroundColor: [
                                      'rgba(71, 183,132,.5)', // Green
                                    ],
                                    borderColor: [
                                      '#47b784',
                                    ],
                                    borderWidth: 3,
                                },
                                { // another line graph
                                    label: 'Equity',
                                    data: this.projection.equitys,
                                    backgroundColor: [
                                      'rgba(71, 183,132,.5)', // Green
                                    ],
                                    borderColor: [
                                      '#47b784',
                                    ],
                                    borderWidth: 3
                                },
                                { // another line graph
                                    label: 'Cumulative Cashflows',
                                    data: this.projection.cashFlows,
                                    backgroundColor: [
                                      'rgba(71, 183,132,.5)', // Green
                                    ],
                                    borderColor: [
                                      '#47b784',
                                    ],
                                    borderWidth: 3,
                                    fill: false
                                },
                                { // another line graph
                                    label: 'Combined Equity/cashFlows',
                                    data: this.projection.equityAndCashFlows,
                                    backgroundColor: [
                                      'rgba(71, 183,132,.5)', // Green
                                    ],
                                    borderColor: [
                                      '#47b784',
                                    ],
                                    borderWidth: 3,
                                    fill: false
                                },
                              // { // another line graph
                              //   label: 'Planet Mass (x1,000 km)',
                              //   data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
                              //   backgroundColor: [
                              //     'rgba(71, 183,132,.5)', // Green
                              //   ],
                              //   borderColor: [
                              //     '#47b784',
                              //   ],
                              //   borderWidth: 3
                              // }
                          ]
                        },
                        options: {
                            responsive: true,
                            lineTension: 1,
                            scales: {
                              yAxes: [{
                                ticks: {
                                  beginAtZero: true,
                                  padding: 25,
                                }
                              }]
                            }
                        }
                    };

                    const ctx = document.getElementById('projection-chart');
                    new Chart(ctx, {
                      type: this.projectionChartData.type,
                      data: this.projectionChartData.data,
                      options: this.projectionChartData.options,
                    });
                })
                .catch((error) => {
                    // eslint-disable-next-line
                    console.error(error)
                });
        },
        initForm() {

        },
        onSubmit(evt) {
            evt.preventDefault();
            this.$refs.addWealthPairModal.hide();
            const payload = {
                assetType: this.assetType,
                assetName: this.assetName,
                assetValue: this.assetValue,
                assetIncome: this.assetIncome,
                operatingExpenses: this.operatingExpenses,
                appreciationRate: this.appreciationRate,
                term: this.term,
                leverageType: this.leverageType,
                leverageAmount: this.leverageAmount,
                interestRate: this.interestRate,
                leverageTerm: this.leverageTerm,
                paymentFreq: this.paymentFreq,
                equityAmount: this.equityAmount,
                equitySplit: this.equitySplit,
                myCapital: this.myCapital,
                equityReserves: this.equityReserves,
                myReserves: this.myReserves
            };
            this.addWealthPair(payload);
            this.initForm();
        },
        onReset(evt) {
            evt.preventDefault();
            this.$refs.addWealthPairModal.hide();
            this.initForm();
        },
        addWealthPair(payload) {
            const path = 'http://localhost:5000/newAPI';
            axios.post(path, payload)
                .then(() => {
                    this.getPortfolio();
                    this.message = "Wealth pair added!";
                    this.showMessage = true;
                })
                .catch((error) => {
                    // eslint-disable-next-line
                    console.log(error);
                    this.getPortfolio();
                });
        },
        editWealthPair(wealthPair, uid) {
            this.editForm = {
                uid: uid,
                assetType: wealthPair.deal.asset.assetType,
                assetName: wealthPair.deal.asset.name,
                assetValue: wealthPair.deal.asset.value,
                assetIncome: wealthPair.deal.asset.income,
                operatingExpenses: wealthPair.deal.asset.operatingExpenses,
                appreciationRate: wealthPair.deal.asset.appreciationRate,
                term: wealthPair.deal.asset.term,
                leverageType: wealthPair.deal.financing.leverage.leverageType,
                leverageAmount: wealthPair.deal.financing.leverage.amount,
                interestRate: wealthPair.deal.financing.leverage.interestRate,
                leverageTerm: wealthPair.deal.financing.leverage.term,
                paymentFreq: wealthPair.deal.financing.leverage.numPayments,
                equityAmount: wealthPair.deal.financing.equity.equityCapital.initialAmount,
                equitySplit: wealthPair.deal.financing.equity.equityCapital.percentSplit,
                myCapital: wealthPair.deal.financing.equity.myCapital.initialAmount,
                equityReserves: wealthPair.deal.reserves.equityCapital,
                myReserves: wealthPair.deal.reserves.myCapital
            };
        },
        onSubmitUpdate(evt) {
            evt.preventDefault();
            this.$refs.editWealthPairModal.hide();
            const payload = {
                assetType: this.editForm.assetType,
                assetName: this.editForm.assetName,
                assetValue: this.editForm.assetValue,
                assetIncome: this.editForm.assetIncome,
                operatingExpenses: this.editForm.operatingExpenses,
                appreciationRate: this.editForm.appreciationRate,
                term: this.editForm.term,
                leverageType: this.editForm.leverageType,
                leverageAmount: this.editForm.leverageAmount,
                interestRate: this.editForm.interestRate,
                leverageTerm: this.editForm.leverageTerm,
                paymentFreq: this.editForm.paymentFreq,
                equityAmount: this.editForm.equityAmount,
                equitySplit: this.editForm.equitySplit,
                myCapital: this.editForm.myCapital,
                equityReserves: this.editForm.equityReserves,
                myReserves: this.editForm.myReserves
            };
            this.updateWealthPair(payload, this.editForm.uid);
            this.initForm();
        },
        updateWealthPair(payload, uid) {
            const path = `http://localhost:5000/newAPI/${uid}`;
            // eslint-disable-next-line
            console.log(uid);

            axios.put(path, payload)
                .then(() => {
                    this.getPortfolio();
                    this.message = "Wealth pair updated!";
                    this.showMessage = true;
                })
                .catch((error) => {
                    // eslint-disable-next-line
                    console.log(error);
                    this.getPortfolio();
                });
        },
        onResetUpdate(evt) {
            evt.preventDefault();
        },
        onDeleteWealthPair(uid) {
            const path = `http://localhost:5000/newAPI/${uid}`;
            // eslint-disable-next-line
            console.log(uid)
            axios.delete(path)
                .then(() => {
                    this.getPortfolio();
                    this.message = 'Wealth Pair Removed!';
                    this.showMessage = true;
                })
                .catch((error) => {
                    // eslint-disable-next-line
                    console.error(error)
                    this.getPortfolio();
                })
        },

        async refreshPortfolioPanels() {
            const response = await PortfolioService.getPortfolioMetrics()
            // eslint-disable-next-line
            console.log(response.data)
            // Set portfolio table metrics.
            this.portfolioMetrics = [response.data]

            // Set income asset table.
            const incomeAssetResponse = await PortfolioService.getIncomeAssetMetrics()
            this.incomeAssets = incomeAssetResponse.data
            // eslint-disable-next-line
            console.log(response.data)

            // Set growth asset table.
            const growthAssetResponse = await PortfolioService.getGrowthAssetMetrics()
            this.growthAssets = growthAssetResponse.data
            // eslint-disable-next-line
            console.log(response.data)

            // Set both asset table.
            const bothAssetResponse = await PortfolioService.getBothAssetMetrics()
            this.bothAssets = bothAssetResponse.data
            // eslint-disable-next-line
            console.log(response.data)

        },

    },
    created() {
        this.getPortfolio();
    },
    components: {
        alert: Alert
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
