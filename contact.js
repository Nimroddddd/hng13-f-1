function handleSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  const details = Object.fromEntries(formData.entries())
  
}