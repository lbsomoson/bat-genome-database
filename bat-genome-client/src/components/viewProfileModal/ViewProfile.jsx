import React from 'react'
import { RiUser3Fill, RiCloseLine } from "react-icons/ri";
import './ViewProfile.css'

const Modal = ({ 
	setIsOpen,
	name="Juan Dela Cruz",
	username="user1",
	role="user",
	email="jdc@sample.com",
	phoneNumber="09xxxxxxxxx",
	address="Manila, Philippines"
	}) => {

  	return (
		<>
			<div className='darkBG' onClick={() => setIsOpen(false)} />
			<div className='centered'>
				<div className='modal'>
					<div className='modalHeader'>
						<h5 className='heading'>View Profile</h5>
					</div>
					<button className='closeBtn' onClick={() => setIsOpen(false)}>
					<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className='modalContent'>
						<div class="row">
							<div class="column1">
								<RiUser3Fill size={250}/>
							</div>
							<div class="colum2">
								<div className='name'>
									{name} 
								</div>

								<div className='username'>
									@{username}
								</div>

								<div class="row-default">
									<div class="column-default">
										<div className='title'>
											<ul className='no-bullets'>
												<li>Role:</li>
												<li>Email:</li>
												<li>Phone #:</li>
												<li>Address:</li>
											</ul>
										</div>
									</div>
									<div class="column-default">
										<div className='info'>
											<ul className='no-bullets'>
												<li>{role}</li>
												<li>{email}</li>
												<li>{phoneNumber}</li>
												<li>{address}</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='modalActions'>
						<div className='actionsContainer'>
							<button className='editBtn' onClick={() => setIsOpen(false)}>
							Edit Profile
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

  export default Modal;