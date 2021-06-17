import Vue from 'vue'
import moment from 'moment'
import numeral from 'numeral'
import _ from 'lodash'
import 'moment/locale/vi'

Vue.filter('formatDateTime', function (value, format) {
    if (value) {
        format = format ? format : 'DD/MM/YYYY HH:mm:ss';
        return moment(value).format(format)
    } else {
        return '--'
    }
});

Vue.filter('momentFormat', function (value,format) {
    if (value) {
        return moment(value).format(format);
    }
});

Vue.filter('formatCurrency', function (value) {
    return numeral(value).format('0,0') + 'đ'
});

Vue.filter('formatNumber', function (value) {
    return numeral(value).format('0,0');
});

Vue.filter('limitText', function (value,number) {
        if(!_.isEmpty(value)){
            let body = value.replace('/(<([^>]+)>)/ig', '');
            return body.length > number ? body.substring(0, number) + '...' : body;
        }
        return value;
});




