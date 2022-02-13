import React from 'react';
import Profile from './Profile';
import *  as axios from 'axios';
import {connect} from 'react-redux';
import { setUserProfile } from './../../redux/profileReducer';
//mport {withRouter} from 'react-router-dom';



// import {
//   useLocation,
//   useNavigate,
//   useParams
// } from "react-router-dom";
// import {useRouteMatch} from 'react-router';
 




class ProfileContainer extends React.Component {
    componentDidMount(){ 
      let userId = this.props.math.params.userId;
      debugger;
      axios.get('https://social-network.samuraijs.com/api/1.0/profile/userId'+userId)
      .then(response => {
          this.props.setUserProfile(response.data);
         
      });
    }


  render() {

    debugger;
    return (
     <Profile {...this.props} profile= {this.props.profile} />
    )
  }
}
let mapStateToProps = (state)=>({
  profile:state.profilePage.profile
});

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//       <Component
//         {...props}
//         router={{ location, navigate, params }}
//       />
//     );
//   }

//   return ComponentWithRouterProp;
// }
// export const withRouter= (Component) =>{
//   let RouterComponent=(props)=>{
//     const match = useMatch('/profile/:userId');
//     return <Component {...props} match ={match} />;
    
//   }
//   return RouterComponent;
// }

//let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default  connect (mapStateToProps,{setUserProfile}) (ProfileContainer);