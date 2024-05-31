import React, { Component } from 'react';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      successMessage: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = this.state;

    const errors = {};
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', this.state);
      this.setState({
        successMessage: 'Your data has been stored successfully!',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {}
      });
    } else {
      this.setState({ errors, successMessage: '' });
    }
  };

  render() {
    const { username, email, password, confirmPassword, errors, successMessage } = this.state;

    return (
      <div className="container mx-auto m-10">
        <div className="max-w-md mx-auto bg-black text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Sign Up</h2>
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleChange}
                className={`text-black mt-1 p-2 block w-full rounded-md border ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className={`text-black mt-1 p-2 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className={`text-black mt-1 p-2 block w-full rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                className={` text-black mt-1 p-2 block w-full rounded-md border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
