function FeedbackForm({ formData, setFormData }) {
  
  const isValid = 
    formData.name.length >= 3 && 
    formData.email.includes('@') && 
    formData.email.includes('.') && 
    formData.feedback.length >= 1;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }))
  }
  
    return (
    <div>
      <h1>Feedback Form</h1>
      <form>
        <label htmlFor='name'>
            Name:
        </label>
        <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
        />
        <label htmlFor='email'>
            Email:
        </label>
        <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
        />
        <label htmlFor='feedback'>
            Feedback:
        </label>
        <textarea
            type='text'
            name='feedback'
            maxLength={200}
            rows={4}
            cols={20}
            value={formData.feedback}
            onChange={handleChange}
        />
      </form>
      {isValid ? (
        <button className='button-enabled' type='submit'>Submit</button>
      ):(
        <button className='button-disabled' type='submit' disabled>Submit</button>
      )}
      <h2>Preview Feedback</h2>
      <p>Feedback: {formData.feedback}</p>
    </div>
  )
}

export default FeedbackForm
