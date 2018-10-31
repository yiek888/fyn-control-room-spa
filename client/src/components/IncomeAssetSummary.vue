<template>
    <b-container>
        <b-row>
            <b-col>Value</b-col>
            <b-col>{{wealthPair.deal.asset.value}}</b-col>
        </b-row>
        <b-row>
            <b-col>Debt</b-col>
            <b-col>{{wealthPair.deal.financing.leverage.amount}}</b-col>
        </b-row>
        <b-row>
            <b-col>Equity</b-col>
            <b-col>{{wealthPair.deal.financing.equity.equityCapital.amount + wealthPair.deal.financing.equity.myCapital.amount}}</b-col>
        </b-row>
        <b-row>
            <b-col></b-col>
            <b-col>Mine - {{wealthPair.deal.financing.equity.myCapital.amount}}</b-col>
        </b-row>
        <b-row>
            <b-col></b-col>
            <b-col>Partner - {{wealthPair.deal.financing.equity.equityCapital.amount}}</b-col>
        </b-row>
        <b-row>
            <b-col></b-col>
            <b-col>% Split - {{wealthPair.deal.financing.equity.equityCapital.percentSplit}}</b-col>
        </b-row>
        <b-row>
            <b-col>Income</b-col>
            <b-col>{{wealthPair.deal.asset.income}}</b-col>
        </b-row>
        <b-row>
            <b-col>Operating Expenses</b-col>
            <b-col>{{wealthPair.deal.asset.operatingExpenses}}</b-col>
        </b-row>
        <b-row>
            <b-col>Net Operating Income</b-col>
            <b-col>{{wealthPair.deal.asset.noi}}</b-col>
        </b-row>
        <b-row>
            <b-col>Cap Rate</b-col>
            <b-col>{{wealthPair.deal.asset.capRate}}</b-col>
        </b-row>
        <b-row>
            <b-col>Reserves</b-col>
            <b-col>{{wealthPair.reserves}} ({{wealthPair.reservesInMonths}} months)</b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ['wealthPair']
};
</script>
