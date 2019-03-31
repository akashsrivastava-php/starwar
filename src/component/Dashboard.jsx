import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getToken} from './../actions/index.js';

class Dashboard extends Component {

	componentWillMount(){
		var token = localStorage.getItem("token");
		if(token=="" || token==null){
			this.props.history.push('/');
		}
		this.props.getToken();
	}

  render() {
    return (
      <div className="container">
    	<div className="row justify-content-center">
        	<div className="col-md-8">
            	<div className="card">
                	<div className="card-header">Token</div>
						<div className="card-body">
                			<div className="form-group row">
                            	<div className="col-md-12">
                                	<p className='text-info text-center'>{this.props.getApi.token}</p>
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
		getApi: state.getApiResponse,
	}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({getToken: getToken}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Dashboard);
