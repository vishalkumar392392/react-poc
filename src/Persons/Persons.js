import React,{Component} from 'react'
import Person from './Person/Person'
import { CircularProgress } from '@material-ui/core';
import classes from './Persons.css'


class Persons extends Component{

   state = {
     persons:[]
   }

    finalresult =()=>{
       return this.state.persons.map((per,index)=>{
          return (
            <Person>
              <h1>name:{per.name.title +per.name.first+per.name.last }</h1>
              <h1>gender:{per.gender}</h1>
            </Person>
          )
        })}
        
  

   async componentDidMount(){
     const temp=[]
     for(let i=0;i<12;i++){
      let results = await fetch(`https://randomuser.me/api/`)
      let data = await results.json();
      temp.push(data.results)
     }
     let res = [...this.state.persons]
     res = res.concat(temp.flat(2))
     this.setState({persons:res})
   }
   
  render(){
    if(this.state.persons.length===0){
      return <div className={classes.loader}>
        <CircularProgress/>
      </div>
    }
    let test = this.state.persons.map((per,index)=>{
      
      return (
        <div className={classes.Persons}>
        <Person key={index} name={per.name.title +' '+per.name.first+' '+per.name.last } 
        gender={per.gender}
        email={per.email}
        picture={per.picture.large}/>
        </div>
      )
    })
    return(
      <div className='row'>
        {test}
      </div>
    )
  }
}

export default Persons