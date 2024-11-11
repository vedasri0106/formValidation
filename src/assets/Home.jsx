import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    // Handle input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let formErrors = validate(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Submit form data (for now, we'll log it to the console)
      console.log('Form Submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    } else {
      setIsSubmitting(false);
    }
  };

  // Validate the form data
  const validate = (data) => {
    const errors = {};
    if (!data.name) errors.name = "Name is required.";
    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is invalid.";
      }
      if (!data.password) errors.password = "Password is required.";
      if (data.password !== data.confirmPassword)
        errors.confirmPassword = "Passwords do not match.";
      return errors;
    };
  
    return (
      <div className="registration-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
            </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>Register</button>
      </form>
    </div>
  );
};

export default Home;

 