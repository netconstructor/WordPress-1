jQuery(function(a){var b=typeof(current_site_id)!="undefined"?"&site_id="+current_site_id:"";a("#adduser-email, #newuser").autocomplete({source:ajaxurl+"?action=autocomplete-user"+b,delay:500,minLength:2})});