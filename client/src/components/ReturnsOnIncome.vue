<template>
    <div>
        <h2>Returns On Income</h2>
        <b-container>
            <b-row>
                <b-col>Return on Equity</b-col>
                <b-col>{{wealthPair.roe}}</b-col>
            </b-row>
            <b-row>
                <b-col>Equity Partner Return</b-col>
                <b-col>{{wealthPair.equityROI}}</b-col>
            </b-row>
            <b-row>
                <b-col>My Return</b-col>
                <b-col>{{wealthPair.myROI}}</b-col>
            </b-row>
            <b-row>
                <b-col>Total Cash Flow</b-col>
                <b-col>{{wealthPair.cashFlow}}</b-col>
            </b-row>
            <b-row>
                <b-col>Equity Partner Cash Flow</b-col>
                <b-col>{{wealthPair.equityPartnerCashFlow}}</b-col>
            </b-row>
            <b-row>
            <b-col>My Cash Flow</b-col>
            <b-col>{{wealthPair.myCashFlow}}</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    props: ['wealthPair']
};
</script>
