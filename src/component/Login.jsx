import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SimpleReactValidator from 'simple-react-validator';
import './../css/App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {callApi} from './../actions/index.js';

class Login extends Component {

	constructor(props){
		super(props)
			this.state = {
				email : '',
				password : '',
			}

		this.validator = new SimpleReactValidator();

	}


	setVal = (event) => {
		var obj = {};
    	obj[event.target.name] = event.target.value;
		this.setState(obj);
	}

	handelLogin = () => {

		if( this.validator.allValid() ){
	      this.props.callApi(this.state.email, this.state.password, this.props.history);
	    } else {
	      this.validator.showMessages();
	      this.forceUpdate();
	    }

	}

  render() {
    return (
      <div className="container">
    	<div className="row justify-content-center">
        	<div className="col-md-8">
            	<div className="card">
                	<div className="card-header">Login</div>
						<div className="card-body">
                			<div className="form-group row">
                            	<label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address
                            	</label>
                            	<div className="col-md-6">
                                <input ref='email' type="email" name="email" onChange={this.setVal}/>
                                <p className='text-danger'>{this.validator.message('email', this.state.email, 'required|email')}</p>
                            	</div>
                        	</div>

                        	<div className="form-group row">
                            	<label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password
                            	</label>
								<div className="col-md-6">
                                	<input ref="password" type="password" name='password' onChange={this.setVal}/>
                                	<p className='text-danger'>{this.validator.message('password', this.state.password, 'required|between:6,10')}</p>
                            	</div>
                        	</div>

                        	<div className="form-group row mb-0">
                            	<div className="col-md-8 offset-md-4">
                                	<button type="submit" className="btn btn-primary" onClick={this.handelLogin}>Login</button>
                                </div>
                        	</div>
                        </div>
            		</div>
		        </div>
		    </div>
		</div>
    );
  }
}

function mapStateToProps(state){
	return{	
		appData : state.appData
	}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({callApi: callApi}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Login);