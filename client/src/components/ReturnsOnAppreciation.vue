<template>
    <div>
        <h2>Projected Return</h2>
        <b-container>
            <b-row>
                <b-col>Projected Future Value</b-col>
                <b-col>{{wealthPair.deal.asset.futureValue}}</b-col>
            </b-row>
            <!-- FIXME ASSUMPTION: User has chosen accruing leverage with the growth asset. -->
            <b-row>
                <b-col>Future Loan Amount</b-col>
                <b-col>{{wealthPair.deal.financing.leverage.futureValue}}</b-col>
            </b-row>
            <b-row>
                <b-col>Amount to Split</b-col>
                <b-col>{{wealthPair.amountToSplit}}</b-col>
            </b-row>
            <b-row>
                <b-col>Profit to Partner</b-col>
                <b-col>{{wealthPair.profitToPartner}}</b-col>
            </b-row>
            <b-row>
                <b-col>Profit to You</b-col>
                <b-col>{{wealthPair.profitToYou}}</b-col>
            </b-row>
            <b-row>
                <b-col>ROE over the years</b-col>
                <b-col>{{wealthPair.roeOverTerm}}</b-col>
            </b-row>
            <b-row>
                <b-col>My Equiv. Return</b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col>Partner's Equiv. Return</b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
        <h2>Current Return</h2>
        <b-container>
            <b-row>
                <b-col>Year</b-col>
                <b-col>{{wealthPair.deal.asset.year}}</b-col>
            </b-row>
            <b-row>
                <b-col>My Equity</b-col>
                <b-col>{{wealthPair.deal.financing.equity.myCapital.amount}}</b-col>
            </b-row>
            <b-row>
                <b-col>Partner Equity</b-col>
                <b-col>{{wealthPair.deal.financing.equity.equityCapital.amount}}</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    props: ['wealthPair']
};
</script>
