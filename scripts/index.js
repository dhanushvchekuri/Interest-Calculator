document.addEventListener('DOMContentLoaded', () => {
  const submission = document.querySelector('#calcsimpleinterest')
  const output = document.querySelector('#output')
  submission.addEventListener('click', (event) => {
    event.preventDefault()
    let totalInterest = 0
    const principal = document.getElementById('principal').value
    let interest = document.getElementById('interest').value
    let interestRate = interest / 100
    const time = document.getElementById('time').value
    totalInterest = principal * interestRate * time
    output.textContent = '';
    if (principal =='' || interest=='' || time=='') {
      output.textContent = 'Please Enter Correct Values!!!'
    } else {
      const totalInterestText = document.createTextNode(
        `Your total interest for principal of ${principal} with an interest rate of ${interest}% over the span of ${time} years is ${totalInterest}.`
      )

      // Create the line break element
      const lineBreak = document.createElement('br')

      const bold = document.createElement('b')
      const boldText = document.createTextNode(`Monthly: `);

      bold.appendChild(boldText);

      const monthlyInterestText = document.createTextNode(
        `${totalInterest / (time * 12)}`
      )

      // Append the text nodes and line break to the output element
      output.appendChild(totalInterestText)
      output.appendChild(lineBreak)
      output.appendChild(bold);
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
})
