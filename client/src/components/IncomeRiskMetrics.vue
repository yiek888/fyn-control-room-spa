<template>
    <div>
        <h2>Risk</h2>
        <b-container>
            <b-row>
                <b-col>DCR</b-col>
                <b-col>{{wealthPair.dcr}}</b-col>
            </b-row>
            <b-row>
                <b-col>BER</b-col>
                <b-col>{{wealthPair.ber}}</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    props: ['wealthPair']
};
</script>
