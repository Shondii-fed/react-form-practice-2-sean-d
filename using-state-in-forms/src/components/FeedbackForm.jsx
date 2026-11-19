function FeedbackForm({ formData, setFormData }) {
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
      <h2>Preview Feedback</h2>
      <p>Feedback: {formData.feedback}</p>
    </div>
  )
}

export default FeedbackForm
