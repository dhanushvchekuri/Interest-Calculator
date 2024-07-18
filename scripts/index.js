document.addEventListener('DOMContentLoaded', () => {
  // Toggle buttons to show different forms
  const COMPOUND = document.querySelector('#togglecompound')
  COMPOUND.addEventListener('click', () => {
    document.querySelector('.simple-interest-form').style.display = 'none'
    document.querySelector('.compound-interest-form').style.display = 'flex'
    document.querySelector('.form').style.height = '70%'
  })

  const SIMPLE = document.querySelector('#togglesimple')
  SIMPLE.addEventListener('click', () => {
    document.querySelector('.compound-interest-form').style.display = 'none'
    document.querySelector('.simple-interest-form').style.display = 'flex'
    document.querySelector('.form').style.height = '60%'
  })

  // Calculate Simple Interest
  const submission = document.querySelector('#calcsimpleinterest')
  const output = document.querySelector('#output')
  submission.addEventListener('click', (event) => {
    event.preventDefault()
    let totalSimpleInterest = 0
    const principal = document.getElementById('principal').value
    let interest = document.getElementById('interest').value
    let interestRate = interest / 100
    const time = document.getElementById('time').value
    totalSimpleInterest = principal * interestRate * time
    output.textContent = ''
    if (principal == '' || interest == '' || time == '') {
      output.textContent = 'Please Enter Correct Values!!!'
    } else {
      const simpleInterestText = document.createTextNode(
        `Your total interest for principal of ${principal} with an interest rate of ${interest}% over the span of ${time} years is ${totalSimpleInterest.toFixed(2)}.`
      )

      // Create the line break element
      const lineBreak = document.createElement('br')

      const bold = document.createElement('b')
      const boldText = document.createTextNode(`Monthly: `)

      bold.appendChild(boldText)

      const monthlyInterestText = document.createTextNode(
        `${(totalSimpleInterest / (time * 12)).toFixed(2)}`
      )

      // Append the text nodes and line break to the output element
      output.appendChild(simpleInterestText)
      output.appendChild(lineBreak)
      output.appendChild(bold)
      output.appendChild(monthlyInterestText)
    }
  })

  const reset = document.querySelector('#resetinputs')
  reset.addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('principal').value = ''
    document.getElementById('interest').value = ''
    document.getElementById('time').value = ''
    document.querySelector('#output').innerText = ''
  })

  // Calculate Compound Interests
  const SUBMISSION = document.querySelector('#calccompoundinterest')
  const OUTPUT = document.querySelector('#coutput')

  SUBMISSION.addEventListener('click', (event) => {
    event.preventDefault()
    let totalCompoundInterest = 0
    const PRINCIPAL = document.getElementById('cprincipal').value
    const COMPOUND = document.getElementById('compound').value
    let cinterest = document.getElementById('cinterest').value
    let cinterestRate = cinterest / 100
    const TIME = document.getElementById('ctime').value
    totalCompoundInterest =
      PRINCIPAL * Math.pow(1 + cinterestRate / COMPOUND, COMPOUND * TIME)
    OUTPUT.textContent = ''
    if (
      PRINCIPAL == '' ||
      cinterestRate == '' ||
      COMPOUND == '' ||
      TIME == ''
    ) {
      OUTPUT.textContent = 'Please Enter Correct Values!!!'
    } else {
      const compoundInterestText = document.createTextNode(
        `Your total interest for principal of ${PRINCIPAL} with an interest rate ${cinterest}% and a compound frequency of ${COMPOUND}/year over the span of ${TIME} years is ${totalCompoundInterest.toFixed(2)}.`
      )

      const LINEBREAK = document.createElement('br')
      const BOLD = document.createElement('b')
      const BOLDTEXT = document.createTextNode(`Interest Alone: `)
      const monthlyInterest = document.createTextNode(
        `${(totalCompoundInterest - PRINCIPAL).toFixed(2)}`
      )
      BOLD.appendChild(BOLDTEXT)
      OUTPUT.appendChild(compoundInterestText)
      OUTPUT.appendChild(LINEBREAK)
      OUTPUT.appendChild(BOLD)
      OUTPUT.appendChild(monthlyInterest)
    }
  })

  const RESET = document.querySelector('#resetinputscom')
  RESET.addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('cprincipal').value = ''
    document.getElementById('cinterest').value = ''
    document.getElementById('compound').value = ''
    document.getElementById('ctime').value = ''
    document.querySelector('#coutput').innerText = ''
  })
})
