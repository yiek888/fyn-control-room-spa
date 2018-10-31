<template>
    <div>
        <h2>Risk</h2>
        <b-container>
            <b-row>
                <b-col>Critical Low</b-col>
                <b-col>{{wealthPair.deal.asset.criticalLow}}</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    props: ['wealthPair']
};
</script>
