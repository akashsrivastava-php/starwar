import React, { Component } from 'react';
import cookie from 'react-cookies'
import { toast } from 'react-toastify';
import { logoutUser, searchPlanet } from '../utils'

class Dashboard extends Component {
	constructor(props){
		super(props)
		this.state = {
			planets: [],
			specificPlanet: {},
			isLoading: false
		}
	}

	componentDidMount(){
		const isloggedIn = cookie.load('LoggedIn')
		if(isloggedIn == undefined || isloggedIn == 'false'){
			this.props.history.push('/')
		}
	}

	handelLogout = async () => {
		const res = await logoutUser()
		if(res.status){
			toast.success(res.msg)
			this.props.history.push('/')
		}
	}

	handelSearch = async (e) => {
		const searchVal = e.target.value
		this.setState({isLoading: true})
		const res = await searchPlanet(searchVal)
		if(res.status){
			this.setState({planets: res.msg, isLoading: false})
		}else{
			this.setState({planets: [], isLoading: false})
			toast.error(res.msg)
		}
	}

	getPlanet = async (id) => {
		this.refs.search.value = ''
		this.setState({planets:[], isLoading: true})
		const res = await searchPlanet(id)
		if(res.status){
			this.setState({specificPlanet: res.msg[0], isLoading:false})
		}else{
			toast.error(res.msg)
		}
	}

  render() {
	  const { planets, specificPlanet, isLoading } = this.state
    return (
      <div className="container">
    	<div className="row justify-content-center">
        	<div className="col-md-8">
            	<div className="card">
                	<div className="card-header"><p className="float-left">Star War</p><a href="#/" onClick={()=>this.handelLogout()} className="float-right">Logout</a></div>
						<div className="card-body">
                			<div className="form-group row">
                            	<div className="col-md-12">
									<div className="form-group col-md-12 mb-2">
										<input type="text" className="form-control w-100" ref="search" onChange={(e)=>this.handelSearch(e)} placeholder="Search Planet..."/>
									</div>
                            	</div>
								{
									planets.length > 0 &&
									<div className="col-md-12">
										<ul className="list-group" style={{padding: '15px'}}>
											{
												planets.map((val,key)=>{
													return ( <li style={{cursor: 'pointer'}} onClick={()=>this.getPlanet(val.name)} key={key} className="list-group-item">{val.name}</li> )
												})
											}
										</ul>
									</div>
								}
								{
									isLoading &&
									<div className="col-md-12 text-center">
										<img src="/loader.gif" width="120"/>
									</div>
								}
                        	</div>
                        </div>
            		</div>
					{
						specificPlanet && specificPlanet.name &&
						<div className="card mt-5">
						<div className="card-header"><p className="float-left">Planet Details</p></div>
							<div className="card-body">
							<table className="table">
								<tbody>
									{
										Object.entries(specificPlanet).map(([k,v], i)=>{
											return(
												<tr key={i}>
													<td>{k}</td><td>{v}</td>
												</tr>
											)
										})
									}
								</tbody>
								</table>
							</div>
						</div>
  					}
		        </div>
		    </div>
		</div>
    );
  }
}

export default Dashboard;
