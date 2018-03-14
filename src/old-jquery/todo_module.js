import List from './functions_module';

import 'bootstrap';

// Below for css files which will be bundled to styles.css
import '../css/styles.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css'


$(document).ready(function(){

  var list = new List();

  $('form').on('submit', function(event){
    event.preventDefault();
    var item_value = $('#list_item_input').val();
    var item_obj = {item_value: item_value, completed: false}
    $('#list_item_input').val('');
    list.addListItem(item_obj);
    
  })
});