import Api from '@/services/Api'

export default {
    getPortfolioMetrics () {
        return Api().get('/')
    },
    getIncomeAssetMetrics () {
        return Api().get('/api/incomeAssetMetrics')
    },
    getGrowthAssetMetrics () {
        return Api().get('/api/growthAssetMetrics')
    },
    getBothAssetMetrics () {
        return Api().get('/api/bothAssetMetrics')
    }

}
