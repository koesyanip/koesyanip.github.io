$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//get data from google sheets
function formSubmit2(){
	var $form = $('#gangguan2'),
		url = 'https://script.google.com/macros/s/AKfycbxg7ViwaSxd07ush3-yg-HyjuGVA0Bp8tAJdvQ/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit3(){
	var $form = $('#gangguan3'),
		url = 'https://script.google.com/macros/s/AKfycbycQIQ55QgWoXVxX9Zgaz0THq85Bq8CtWMW7jz-/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit5(){
	var $form = $('#gangguan5'),
		url = 'https://script.google.com/macros/s/AKfycbw_JoV_Yl6CH7BW-nVAWh-oaSuT4OOBDN8e3ys/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit6(){
	var $form = $('#gangguan6'),
		url = 'https://script.google.com/macros/s/AKfycbw8D_76m9t7AdyiBrk59ttup3dQJYp8hpx_9wfUACLR_Uy1NK8/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit9(){
	var $form = $('#gangguan9'),
		url = 'https://script.google.com/macros/s/AKfycbyQto71VQ6pRh5bSR_eKnPncci-h0u2IbHdlIjE/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit10(){
	var $form = $('#gangguan10'),
		url = 'https://script.google.com/macros/s/AKfycbzlNhrnuMGBiZialc_AfL86Jrm_xDsrIezQJDHm096471vbv-8/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

//input data to local storage
var input2=[];
function simpan2(){
	
 	input2[0] = document.getElementById("part_2").value;
 	input2[1] = document.getElementById("tanggal1_2").value;
	input2[2] = document.getElementById("gejala_2").value;
 	input2[3] = document.getElementById("urutan_2").value;
 	input2[4] = document.getElementById("pemeriksaan_2").value;
 	input2[5] = document.getElementById("analisa_2").value;
 	input2[6] = document.getElementById("daya_2").value;
 	input2[7] = document.getElementById("dayaMampu_2").value;
 	input2[8] = document.getElementById("bebanPuncak_2").value;
 	input2[9] = document.getElementById("tindakan_2").value;
 	input2[10] = document.getElementById("pelaksanaan_2").value;
 	input2[11] = document.getElementById("pekerjaan_2").value;
 	input2[12] = document.getElementById("material_2").value;
 	input2[13] = document.getElementById("biaya_2").value;
 	input2[14] = document.getElementById("penjelasan_2").value;
 	
 	localStorage.setItem("datainput2", JSON.stringify(input2));
}

var input3=[];
function simpan3(){
	
 	input3[0] = document.getElementById("part_3").value;
 	input3[1] = document.getElementById("tanggal1_3").value;
	input3[2] = document.getElementById("gejala_3").value;
 	input3[3] = document.getElementById("urutan_3").value;
 	input3[4] = document.getElementById("pemeriksaan_3").value;
 	input3[5] = document.getElementById("analisa_3").value;
 	input3[6] = document.getElementById("daya_3").value;
 	input3[7] = document.getElementById("dayaMampu_3").value;
 	input3[8] = document.getElementById("bebanPuncak_3").value;
 	input3[9] = document.getElementById("tindakan_3").value;
 	input3[10] = document.getElementById("pelaksanaan_3").value;
 	input3[11] = document.getElementById("pekerjaan_3").value;
 	input3[12] = document.getElementById("material_3").value;
 	input3[13] = document.getElementById("biaya_3").value;
 	input3[14] = document.getElementById("penjelasan_3").value;
 	
 	localStorage.setItem("datainput3", JSON.stringify(input3));
}

var input5=[];
function simpan5(){
	
 	input5[0] = document.getElementById("part_5").value;
 	input5[1] = document.getElementById("tanggal1_5").value;
	input5[2] = document.getElementById("gejala_5").value;
 	input5[3] = document.getElementById("urutan_5").value;
 	input5[4] = document.getElementById("pemeriksaan_5").value;
 	input5[5] = document.getElementById("analisa_5").value;
 	input5[6] = document.getElementById("daya_5").value;
 	input5[7] = document.getElementById("dayaMampu_5").value;
 	input5[8] = document.getElementById("bebanPuncak_5").value;
 	input5[9] = document.getElementById("tindakan_5").value;
 	input5[10] = document.getElementById("pelaksanaan_5").value;
 	input5[11] = document.getElementById("pekerjaan_5").value;
 	input5[12] = document.getElementById("material_5").value;
 	input5[13] = document.getElementById("biaya_5").value;
 	input5[14] = document.getElementById("penjelasan_5").value;
 	
 	localStorage.setItem("datainput5", JSON.stringify(input5));
}
var input6=[];
      function simpan6(){
        
    input6[0] = document.getElementById("part_6").value;
    input6[1] = document.getElementById("tanggal1_6").value;
    input6[2] = document.getElementById("gejala_6").value;
    input6[3] = document.getElementById("urutan_6").value;
    input6[4] = document.getElementById("pemeriksaan_6").value;
    input6[5] = document.getElementById("analisa_6").value;
    input6[6] = document.getElementById("daya_6").value;
    input6[7] = document.getElementById("dayaMampu_6").value;
    input6[8] = document.getElementById("bebanPuncak_6").value;
    input6[9] = document.getElementById("tindakan_6").value;
    input6[10] = document.getElementById("pelaksanaan_6").value;
    input6[11] = document.getElementById("pekerjaan_6").value;
    input6[12] = document.getElementById("material_6").value;
    input6[13] = document.getElementById("biaya_6").value;
    input6[14] = document.getElementById("penjelasan_6").value;
        
    localStorage.setItem("datainput6", JSON.stringify(input6));
}

var input9=[];
function simpan9(){
	
 	input9[0] = document.getElementById("part_9").value;
 	input9[1] = document.getElementById("tanggal1_9").value;
	input9[2] = document.getElementById("gejala_9").value;
 	input9[3] = document.getElementById("urutan_9").value;
 	input9[4] = document.getElementById("pemeriksaan_9").value;
 	input9[5] = document.getElementById("analisa_9").value;
 	input9[6] = document.getElementById("daya_9").value;
 	input9[7] = document.getElementById("dayaMampu_9").value;
 	input9[8] = document.getElementById("bebanPuncak_9").value;
 	input9[9] = document.getElementById("tindakan_9").value;
 	input9[10] = document.getElementById("pelaksanaan_9").value;
 	input9[11] = document.getElementById("pekerjaan_9").value;
 	input9[12] = document.getElementById("material_9").value;
 	input9[13] = document.getElementById("biaya_9").value;
 	input9[14] = document.getElementById("penjelasan_9").value;
 	
 	localStorage.setItem("datainput9", JSON.stringify(input9));
}

var input10=[];
function simpan10(){
	
 	input10[0] = document.getElementById("part_10").value;
 	input10[1] = document.getElementById("tanggal1_10").value;
	input10[2] = document.getElementById("gejala_10").value;
 	input10[3] = document.getElementById("urutan_10").value;
 	input10[4] = document.getElementById("pemeriksaan_10").value;
 	input10[5] = document.getElementById("analisa_10").value;
 	input10[6] = document.getElementById("daya_10").value;
 	input10[7] = document.getElementById("dayaMampu_10").value;
 	input10[8] = document.getElementById("bebanPuncak_10").value;
 	input10[9] = document.getElementById("tindakan_10").value;
 	input10[10] = document.getElementById("pelaksanaan_10").value;
 	input10[11] = document.getElementById("pekerjaan_10").value;
 	input10[12] = document.getElementById("material_10").value;
 	input10[13] = document.getElementById("biaya_10").value;
 	input10[14] = document.getElementById("penjelasan_10").value;
 	
 	localStorage.setItem("datainput10", JSON.stringify(input10));
}

//display data from local storage to lh09 page







