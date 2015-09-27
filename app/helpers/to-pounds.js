import Ember from 'ember';
import numeral from 'numeral';

export function toPounds([val,format="0,0.00"]/*, hash*/) {
  return numeral(val).format(format);;
}

export default Ember.Helper.helper(toPounds);
