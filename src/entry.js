import jquery from 'jquery';
import _ from 'lodash';

System.register('jquery', [], _export => {
  _export('default', jquery);
  return {}
})

System.register('lodash', [], _export => {
  _export('default', _);
  return {}
})