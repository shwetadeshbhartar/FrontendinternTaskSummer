$( document ).ready(function() {
          console.log( "ready!" );
      jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
      });
      
      $('#form1').validate({
          rules:{
          Username:
              {
              required:true,
              maxlength:15,
              minlength:5
              },
          Email:
                  {
                  required:true,
                  email:true
                  },
      
          number:
                  {
                  required:true,
                  minlength:10,
                  maxlength:10
                  },
      
          password:
                  {
                  required:true,
                  minlength:8,
                  maxlength:15
                  },
          password_again:
                  {
                  equalTo:"#password"
                  }
                  },
          message:
                  {
                  required:true,
                  minlength:15,
                  maxlength:100,
                  message:true
                  },
                  
      
                highlight: function(element) {
                  $(element).closest('.form-group').addClass('has-error');
              
              },
              unhighlight: function(element) {
                  $(element).closest('.form-group').removeClass('has-error');
              },
              errorElement: 'span',
              errorClass: 'help-block',
              errorPlacement: function(error, element) {
                  if(element.parent('.input-group').length) {
                      error.insertAfter(element.parent());
                  } else {
                      error.insertAfter(element);
                  }
              }
      
      })
      });