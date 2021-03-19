import React, { Fragment, useRef, useState } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import Gravatar from 'react-gravatar';
import { LoadingSpinner } from '../Loading';
import CenteredModal from '../Modal';

const Feed = ({ data, isLoading }) => {
	const [modalShow, setModalShow] = useState(false);
	const email = useRef(null);
	const message = useRef(null);

	const handleModal = (element) => {
		email.current = element.email;
		message.current = element.message;
		setModalShow(true);
	};
	if (data.length === 0) {
		return (
			<Alert
				variant="danger"
				style={{ width: '30vw', margin: '0 auto', marginTop: '20px' }}
			>
				<p>No Data Found</p>
			</Alert>
		);
	}

	if (isLoading) {
		return (
			<div style={{ textAlign: 'center' }}>
				<LoadingSpinner
					animation="grow"
					variant="warning"
					className="text-center"
				/>
			</div>
		);
	}
	return (
		<Fragment>
			{data?.map((element) => {
				return (
					<Fragment key={element.email}>
						<div style={{ width: '30vw', margin: '0 auto', marginTop: '20px' }}>
							<Row>
								<Col md={2} sm={3} xs={3}>
									<div onClick={() => handleModal(element)}>
										<Gravatar email={element.email} size={50} />
									</div>
								</Col>
								<Col md={10} sm={9} xm={9}>
									<p>{element.email}</p>
									<p>{element.message}</p>
								</Col>
							</Row>
						</div>
					</Fragment>
				);
			})}
			<CenteredModal
				show={modalShow}
				setModalShow={setModalShow}
				email={email.current}
				message={message.current}
			/>
		</Fragment>
	);
};

export default Feed;
