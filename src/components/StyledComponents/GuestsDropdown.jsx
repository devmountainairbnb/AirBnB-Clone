import React, {Component} from 'react'
import { CounterButton } from './StyledComponents'

export default class GuestsDropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            guests: 0,

        }
    }

    componentDidMount(){
        console.log(this.props.guests)
        this.setState({guests: this.props.guests})
    }

    handleApply = async () => {
        await this.props.handleApply(this.state.guests)
        this.setState({guests: this.props.guests + 1})
    }


    
    render(){
        return(
            <div>
                
                            <div>
                                <span className='bookingLabels' >Guests</span>
                            <div className="guests" onClick={this.props.handleToggleGuests}>
                                <div>{this.state.guests === 1 ?  
                                    <span>{this.state.guests} guest</span> 
                                    : this.state.guests > 1 ? 
                                    <span>{this.state.guests} guests</span> 
                                    : <span>Guests</span>}
                                </div>&#8744;
                            </div>
                            </div>
                            

                            <div className={this.props.toggleGuests ? 'guest-menu toggle' : 'guest-menu'}>
                                <div className="guest-options">
                                    <h3>Adults</h3>
                                    <span>
                                        <CounterButton onClick={() => this.setState({guests: this.state.guests - 1})}>-</CounterButton>{this.state.guests}<CounterButton onClick={() => this.setState({guests: this.state.guests + 1})}>+</CounterButton>
                                    </span>
                                </div>
                                <div className="guest-options">
                                    <span><h3>Children</h3>
                                    <p>Ages 2-12</p></span>
                                    <span>
                                        <CounterButton>-</CounterButton> 0 <CounterButton>+</CounterButton>
                                    </span>
                                </div>

                                <div className="guest-options">
                                    <span><h3>Infants</h3>
                                    <p>Under 2</p></span> 
                                    <span>
                                         <CounterButton >-</CounterButton> 0 <CounterButton>+</CounterButton>
                                    </span>   
                                </div>
                                
                                <h2 onClick={this.handleApply}>Apply</h2>
                            </div>
                        </div>
        )
    }
}