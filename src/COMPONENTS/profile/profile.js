import React from 'react'
import './profile.css'
import Posts from './posts/posts.js'
import ProfileInfo from '../profile/profileinfo/profileinfo'

function Profile(props){
	return(
        <>
		<div className='profile'>
			<ProfileInfo />
			<Posts postsItems={props.profilePage.postsItems} 
			newPostText={props.newPostText}
			onPostChange={props.onPostChange}
			addPost={props.addPost}/>
		</div>
        </>
	);
}
export default Profile