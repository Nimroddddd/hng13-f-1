

function handleSubmit(e) {
  e.preventDefault()
  const requirements = [ "name", "email", "subject", "message" ]
  requirements.forEach(req => {
    const element = document.getElementById(`${req}-error`)
    element.textContent = ""
  })
  const errors = []
  const formData = new FormData(e.target)
  const details = Object.fromEntries(formData.entries())
  const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
  requirements.forEach(requirement => {
    if (details[requirement] === "") {
      errors.push(`${requirement} is required!`)
    }
  })

  if (details.email && !emailPattern.test(details.email)) {
    errors.push("Please enter a valid email")
  }

  if (details.message && details.message.length < 10 ) {
    errors.push("message must be at least 10 characters.")
  }

  errors.forEach(error => {
    const split = error.split(" ")
    requirements.forEach((requirement, index) => {
      if (split.includes(requirement)) {
        const element = document.getElementById(`${requirement}-error`)
        element.textContent = error
      }
    })
  })

  if (errors.length === 0) {
    document.getElementById("success-message").innerText = "Message has been sent successfully!"
  }
}