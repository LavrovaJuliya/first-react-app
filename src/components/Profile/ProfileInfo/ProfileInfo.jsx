import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';



const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader />
  }
  return (
    <div>
      {/* <div >
        <img src="data:image/jpeg;base64,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"></img>
      </div> */}
      <div className={s.descriptionBlock}>
        <img src = {props.profile.photos.large} />
         <ProfileStatus status={"Hello my friends"}/>
      </div>
    </div>
  )

}
export default ProfileInfo;