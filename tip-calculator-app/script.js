$(document).ready(() => {

  $("#tipPercentageCustomInput").focus(() => {
    $("input[name='tipPercentage']").prop("checked", false)
    $("#tipPercentageCustom").prop("checked", true)
  })

  $("#tipPercentageCustomInput").keyup(() => {
    $("#tipPercentageCustom").val($("#tipPercentageCustomInput").val())
  })

  $("#tipCalculatorForm").change(() => {
    validateForm()
  })
  
  $("#tipCalculatorForm").keyup(() => {
    validateForm()
  })

})


const validateForm = () => {
  const
    bill = $("#bill").val(),
    people = $("#people").val(),
    tipPercentage = $("input[name='tipPercentage']:checked").val()

  bill !== '' &&
  people !== '' &&
  tipPercentage !== ''
    ? $("button[type='reset']").prop("disabled", false) && calculateTip(bill, people, tipPercentage)
    : $("button[type='reset']").prop("disabled", true)
}

const calculateTip = (bill, people, tipPercentage) => {
  const tipPerPerson = parseFloat( (bill * (tipPercentage / 100) / people).toFixed(2) )
  const billPerPerson = parseFloat( ((bill / people) + tipPerPerson).toFixed(2) );
  $("#tipPerPerson").text(tipPerPerson)
  $("#billPerPerson").text(billPerPerson)
}