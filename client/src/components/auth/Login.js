import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
// import { loginUser } from '../../actions/authActions';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
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
        const user = {
            username: this.state.username,
            password: this.state.password
        }
       this.props.doLogin(user,this.props.history);

       
    }

    componentWillReceiveProps(nextprops){
        if(nextprops.data.isAuthenticated){
            nextprops.history.push('/');
        }
    }

    render() {
        return (
            <div className="box_layout">
                <div className="login_page">
                    <div className="login_wrapper">
                        <a href="index.html" className="site_logo text-uppercase d-table m-auto">Automobile POS System</a>
                        <hr className="small" />
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group mb-4">
                                <label>Username</label>
                                <input type="text" className="form-control" name="username" value={this.state.username}
                                    placeholder="Enter username" onChange={this.onChange}/>
                            </div>
                            <div className="form-group mb-4">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" value={this.state.password}  placeholder="Enter Password"  onChange={this.onChange}/>
                            </div>
                            <div className="form-group form-check custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label c_control_label" htmlFor="customCheck1">Remember me</label>
                            </div>
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <Link className="btn btn-link pl-0" to="/register">Register Here!</Link>
                                </div>
                                <div className="col-auto">
                                    <input type="submit" className="btn btn-primary float-right" value="Login" />
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
    return{
        data:state
    }

}


const mapDispatchToProps=(dispatch)=>{
    return {
        doLogin:(creds,redirectdata)=>{dispatch({type:'LOGIN',payload:creds,historyprops:redirectdata})}
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));