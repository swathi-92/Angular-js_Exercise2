 'use strict';
 angular.module('angDirectivesApp')
 .directive('customDirective',function(){
    return {
      scope:{ 
        button1:'@',
        button2:'@',
        name:'=',
         name1:'=',
        fnSucessBtn:'&',
        fnErrorBtn:'&'
      },

      restrict:'A',
      replace:true,
      template:'<button>{{name}}</button>'

    };
   });
