import Api from '@/services/Api'

export default {
    addWealthPair (wealthPairInfo) {
        return Api().post('/', wealthPairInfo)
    }
}
