import React, {useEffect, useState} from 'react';
import {Badge, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getTrip} from "Actions/tripAction";
import {formatTime} from "Helpers/helpers";
import {Link} from "react-router-dom";



const WalletDetails = ({getTrip, match, loading, trip})=> {
    const [isModal, setIsModal] = useState(false)
    const [riderDetails, setRiderDetails] = useState({});

    useEffect(()=> {
       getTrip(match.params.id, true)
    },[match.params.id])

    const viewRiderDetails = async (data) => {
      await  setRiderDetails(data);
      setIsModal(true)

    }
    return (
        <div className='mb-5' style={{minHeight: '90vh'}}>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="Trip Details" />
            </Helmet>
            <PageTitleBar title={`Trip details`} match={match}  />
            {!loading &&
            <div className="row" style={{fontSize: '0.8rem'}}>
                <div className="col-sm-6">
                    <div className="tab-content px-4">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Id</strong></span>{trip?.trip_id}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Class</strong></span>{trip?.ride_class}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Type</strong></span>{trip?.ride_type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Driver Name</strong></span>
                                    <Link to={`/admin/drivers/${trip?.driver_data?.driver_id}`}>{trip?.driver_data?.name}</Link>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Driver Email</strong></span>{trip?.driver_data?.email}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Driver Phone Number</strong></span>{trip?.driver_data?.phone}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Vehicle Plate Number</strong></span>{trip?.driver_data?.car_number_plate}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Vehicle Model</strong></span>{trip?.driver_data?.car_model}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Status</strong></span>
                                    <Badge
                                        color={trip?.ride_status === 'completed' ? "success" : trip?.ride_status === 'cancel' ? 'danger' : trip?.ride_status === 'waiting' ? 'warning' : 'secondary'}>
                                        {trip?.ride_status === 'on_trip' ? 'current' : trip?.ride_status === 'on_pickup' ? 'on route' : trip?.ride_status}
                                    </Badge>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left" style={{fontSize: '1rem'}}><strong>Rider(s)</strong></span>{trip?.home_area}
                                </li>
                                {trip?.riders?.length > 0 && trip?.riders.map(rider => (
                                    <li key={rider.rider_id} className="list-group-item text-right"><span
                                        className="pull-left"><Link to={`/admin/passengers/${rider?.rider_id}`}>{rider?.name}</Link></span>
                                        <button onClick={() => viewRiderDetails(rider)} type="button" className="rct-link-btn text-primary" title="view details"><i className="ti-eye"/></button>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
            <Modal size='lg' isOpen={isModal} toggle={() => setIsModal(false)}>

                <ModalHeader toggle={() => setIsModal(false)}>
                    Rider details
                </ModalHeader>
                <ModalBody>
                    <div className='row'>
                      <div className='col-6'>
                          <div className="schedulePickup">
                              Name
                          </div>
                          <div className="scheduleHeader mt-1">
                              {riderDetails?.name}
                          </div>
                      </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Phone
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.phone}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Pick up
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.start_address}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Drop off
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.end_address}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Pick up Latitude
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.start_lat}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Pick up Longitude
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.start_lon}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Drop off Latitude
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.end_lat}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Drop off Longitude
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.end_lon}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Start Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {new Date(riderDetails?.start_trip_at).toLocaleTimeString()}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                End Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {new Date(riderDetails?.end_trip_at).toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Estimated Fare
                            </div>
                            <div className="scheduleHeader mt-1">
                                ₦{riderDetails?.est_fare}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Fare
                            </div>
                            <div className="scheduleHeader mt-1">
                                ₦{riderDetails?.fare}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Estimated Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {formatTime(riderDetails?.est_time)}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Time Spent
                            </div>
                            <div className="scheduleHeader mt-1">
                                {formatTime(riderDetails?.end_time)}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Waiting Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {formatTime(riderDetails?.waiting_time)}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                               Delay Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {formatTime(riderDetails?.delay_time)}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Number of Riders
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.rider}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Total Distance Covered
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.total_distance}km
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Accepted Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {/*{riderDetails?.accepted_at}*/}
                                {new Date(riderDetails?.accepted_at).toLocaleTimeString()}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Delayed Trip At
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.delay_trip_at}
                            </div>
                        </div>
                    </div>

                    {/*cancel_reason: {cancel_by: "driver", cancel_reason_option: "Flat tire",…}*/}
                    {/*cancel_by: "driver"*/}
                    {/*cancel_reason_option: "Flat tire"*/}
                    {/*cancel_reason_others: "My car has a flat tire so please I can’t continued"*/}


                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Class Type
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.class}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Status
                            </div>
                            <div className="scheduleHeader mt-1">
                                <Badge color={riderDetails?.status === 'completed' ? "success" : riderDetails?.status === 'cancel' ? 'danger' : riderDetails?.status === 'waiting' ? 'warning' : 'secondary'}>
                                    {riderDetails?.status === 'on_trip' ? 'current' : riderDetails?.status === 'on_pickup' ? 'on route' : riderDetails?.status}
                                </Badge>
                            </div>
                        </div>
                    </div>
                    { riderDetails?.status === 'cancel' &&
                        <>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Cancelled By
                            </div>
                            <div className="scheduleHeader mt-1 text-capitalize">
                                {riderDetails?.cancel_reason?.cancel_by}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Cancel Option
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.cancel_reason?.cancel_reason_option}
                            </div>
                        </div>
                    </div>
                            <div className='row mt-4'>
                                <div className='col-6'>
                                    <div className="schedulePickup">
                                        Cancel Comment
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {riderDetails?.cancel_reason?.cancel_reason_others}
                                    </div>
                                </div>
                            </div>
                    </>

                    }
                </ModalBody>
                {/*<ModalFooter>*/}
                {/*    <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>*/}
                {/*</ModalFooter>*/}
            </Modal>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getTrip: (trip_id, spinner) => dispatch(getTrip(trip_id, spinner)),
    };
}

const mapStateToProps = state => ({
    trip: state.trips.trip,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(WalletDetails)