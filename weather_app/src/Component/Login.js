import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      successMessage: '',
      isLoggedIn: false,
      username: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    // Here you can perform your authentication logic
    // For demonstration purpose, let's assume the login is successful
    if (this.checkCredentials(email, password)) {
      this.setState({
        successMessage: 'You are logged in!',
        isLoggedIn: true,
        errors: {}
      });
    } else {
      this.setState({
        errors: { login: 'Invalid email or password.' },
        successMessage: ''
      });
    }
  };

  // Simulate authentication logic (replace with actual logic)
  checkCredentials = (email, password) => {
    // Update these values to match your actual authentication logic
    const validEmail = 'test@example.com';
    const validPassword = 'password';
    
    return email === validEmail && password === validPassword;
  };

  render() {
    const { email, password, errors, successMessage, isLoggedIn } = this.state;

    return (
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <div className="w-full sm:w-96 bg-white text-black p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Login</h2>
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          {errors.login && <p className="text-red-500 text-sm mb-4">{errors.login}</p>}
          {!isLoggedIn && (
            <form onSubmit={this.handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full transition duration-300 ease-in-out">
                Login
              </button>
            </form>
          )}
          {isLoggedIn && (
            <div className="text-center">
              <p className="text-green-500 mb-4">You are logged in!</p>
              <div className="flex items-center justify-center">
                <div className="h-8 w-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  <span className="text-lg">A</span>
                </div>
                <span className="ml-2 font-medium">{this.state.username}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LoginPage;
