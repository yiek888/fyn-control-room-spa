<template>
    <div class="portfolio_metrics">
        <h1>Portfolio Metrics</h1>
        <b-table :items="items"></b-table>
    </table>
    <div id="wealthPairDetail">
        <h2>Wealth Pair Detail</h2>
        <div id="assetDetail">
            <b-card bg-variant="light">
                <b-form-group
                    breakpoint="lg"
                    label="Asset Detail"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0">
                    <b-dropdown id="newAssetType" text="Asset Type">
                        <b-dropdown-item>Income Asset</b-dropdown-item>
                        <b-dropdown-item>Growth Asset</b-dropdown-item>
                        <b-dropdown-item>Both Asset</b-dropdown-item>
                    </b-dropdown>
                    <b-form-group horizontal
                        label="Value:"
                        label-class="text-sm-right"
                        label-for="assetValue">
                        <b-form-input id="assetValue"></b-form-input>
                    </b-form-group>
                        <b-form-group horizontal
                        label="Income:"
                        label-class="text-sm-right"
                        label-for="assetIncome">
                        <b-form-input id="assetIncome"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal
                        label="Operating Expenses:"
                        label-class="text-sm-right"
                        label-for="assetOE">
                        <b-form-input id="assetOE"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal
                        label="Appreciation (%):"
                        label-class="text-sm-right"
                        label-for="assetAppreciationRate">
                        <b-form-input id="assetAppreciationRate"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal
                        label="Term (years):"
                        label-class="text-sm-right"
                        label-for="assetTerm">
                        <b-form-input id="assetTerm"></b-form-input>
                    </b-form-group>
                </b-form-group>
            </b-card>
        </div>
        <div id="capitalStackDetail">
            <b-card bg-variant="light">
                <h3>Capital Stack Detail</h3>
                <b-card bg-variant="light">
                    <b-form-group
                        breakpoint="lg"
                        label="Leverage"
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0">
                        <b-dropdown id="leverageType" text="Leverage Type">
                            <b-dropdown-item>Fully Amortizing</b-dropdown-item>
                            <b-dropdown-item>Interest Only</b-dropdown-item>
                            <b-dropdown-item>Accruing</b-dropdown-item>
                        </b-dropdown>
                        <b-form-group horizontal
                            label="Amount:"
                            label-class="text-sm-right"
                            label-for="leverageAmount">
                            <b-form-input id="leverageAmount"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                            label="Interest Rate (%):"
                            label-class="text-sm-right"
                            label-for="interestRate">
                            <b-form-input id="interestRate"></b-form-input>
                        </b-form-group>
                            <b-form-group horizontal
                            label="Term (years)"
                            label-class="text-sm-right"
                            label-for="leverageTerm">
                            <b-form-input id="leverageTerm"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                            label="Payment Freq Per Year:"
                            label-class="text-sm-right"
                            label-for="paymentFreq">
                            <b-form-input id="paymentFreq"></b-form-input>
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
                            <b-form-input id="equityAmount"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                            label="Profit Split (%):"
                            label-class="text-sm-right"
                            label-for="equitySplit">
                            <b-form-input id="equitySplit"></b-form-input>
                        </b-form-group>
                            <b-form-group horizontal
                            label="My Capital Amount:"
                            label-class="text-sm-right"
                            label-for="myCapital">
                            <b-form-input id="myCapital"></b-form-input>
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
                            label-for="equityAmount">
                            <b-form-input id="equityReserves"></b-form-input>
                        </b-form-group>
                            <b-form-group horizontal
                            label="My Capital Amount:"
                            label-class="text-sm-right"
                            label-for="myCapital">
                            <b-form-input id="myReserves"></b-form-input>
                        </b-form-group>
                    </b-form-group>
                </b-card>
            </b-card>
        </div>
        <b-button variant="success">Add</b-button>
        <b-button variant="danger">Delete</b-button>
        </div>
    </div>
</template>

<script>
const items = [
    {debtToAsset:"50%", cashFlow:"$1,000", reserves:"$10,000", equity:"$50,000"}
]
export default {
    name: 'HelloWorld',
    data () {
        return {
            items: items
        }
    }
}
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
