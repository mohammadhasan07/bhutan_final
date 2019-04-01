import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          username: '',
          email: '',
          password: '',
          
          errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2:this.state.password
        }

        this.props.newUser(newUser);
        

        
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="box_layout">
                <div className="login_page">
                    <div className="login_wrapper">
                        <a href="index.html" className="site_logo text-uppercase d-table m-auto">Automobile POS System</a>
                        <hr className="small" />
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group mb-4">
                                <label htmlFor="">Name</label>
                                <input type="text" className={ classnames('form-control', {
                                    'is-invalid': errors.name
                                }) } name="name" value={this.state.name} 
                                    placeholder="Enter name"  onChange={this.onChange}/>
                                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="">Username</label>
                                <input type="text" className={ classnames('form-control', {
                                    'is-invalid': errors.username
                                }) } name="username" value={this.state.username} 
                                    placeholder="Enter username"  onChange={this.onChange}/>
                                {errors.username && (<div className="invalid-feedback">{errors.username}</div>)}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="">Email ID</label>
                                <input type="text" className={ classnames('form-control', {
                                    'is-invalid': errors.email
                                }) } name="email" value={this.state.email} 
                                    placeholder="Enter email" onChange={this.onChange} />
                                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" value={this.state.password} placeholder="Password"  onChange={this.onChange}/>
                                
                            </div>
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <Link className="btn btn-link pl-0" to="/login">Back to Login</Link>
                                </div>
                                <div className="col-auto">
                                    <input type="submit" className="btn btn-primary float-right" value="Register"/>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {data:state};
}

const mapDispatchToProps=(dispatch)=>{
    return {
        newUser:(data)=>{dispatch({type:'REGISTER',payload:data})}
    }
}
    

export default connect(mapStateToProps,mapDispatchToProps)(Register);