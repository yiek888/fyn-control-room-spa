<template>
    <div>
        <h2>Appreciation Summary</h2>
        <b-container>
            <b-row>
                <b-col>Initial Value</b-col>
                <b-col>{{wealthPair.deal.asset.initialValue}}</b-col>
            </b-row>
            <b-row>
                <b-col>Projected Appr. Rate</b-col>
                <b-col>{{wealthPair.deal.asset.appreciationRate}}</b-col>
            </b-row>
            <b-row>
                <b-col>Term</b-col>
                <b-col>{{wealthPair.deal.asset.term}}</b-col>
            </b-row>
            <b-row>
                <b-col>Equity Financing Amount</b-col>
                <b-col>{{wealthPair.deal.financing.equity.equityCapital.initialAmount}}</b-col>
            </b-row>
            <b-row>
                <b-col>% Split</b-col>
                <b-col>{{wealthPair.deal.financing.equity.equityCapital.percentSplit}}</b-col>
            </b-row>
            <b-row>
                <b-col>My Capital</b-col>
                <b-col>{{wealthPair.deal.financing.equity.myCapital.initialAmount}}</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    props: ['wealthPair']
};
</script>
