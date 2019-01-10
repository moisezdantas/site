$(function(){
   
    $("#nome").keyup(function(){
		var $this = $( this );
		$this.val( er_replace( /[^a-z ]+/gi,'', $this.val() ) );
	});
    $("#messagem").keyup(function(){
		var $this = $( this );
		$this.val( er_replace( /[^a-z0-9]+/gi,'', $this.val() ) );
	});
    $("#telefone").mask("(99) 9999-9999");
    $("#celular").mask("(99) 99999-9999");
    $("#dataFesta").mask("99/99/9999");
    
    $("#formOrcamento").validate({
        rules: {
            nome: "required",
			email: {
                required: true,
                email: true
            },
            cidade: "required",
            localFesta: "required",
			telefone:"required",
			celular:"required",
            dataFesta:{
				required: true,
				dateBR: true
			},
            'produtos[]': {
				required: true,
				minlength: 1
			},
            mensagem:"required"
        },
        messages: {
            nome          : "Digite seu nome!",
            email: {
                required  : "Digite o e-mail!",
                email     : "Digite um e-mail valido!"
            },
            cidade        : "Digite a cidade!",
            localFesta    : "Digite o Local da Festa!",
            telefone      : "Digite o Telefone residencial!",
            celular       : "Digite o Celular!",
            dataFesta:{
                required  : "Digite uma data",
                dateBR    : "Informe uma data válida!"
            },
			'produtos[]'  : "Selecione um porduto",
            mensagem      : "Digite um messagem"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    
    
});
function er_replace( pattern, replacement, subject ){
	return subject.replace( pattern, replacement );
}
 $.validator.addMethod('onecheck', function(value, ele) {
    return $("input:checked").length >= 1;
}, 'Please Select Atleast One CheckBox')

