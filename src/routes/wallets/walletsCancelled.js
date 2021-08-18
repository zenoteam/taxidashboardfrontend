/**
 * WalletsCancelled
 */
import React, { useEffect} from 'react';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {connect} from "react-redux";
import {getTripCount, getTrips} from "Actions/tripAction";
import WalletTable from "Routes/wallets/component/walletTable";


const  WalletCancelled = ({match, getTrips, getTripCount}) => {

	useEffect(()=> {
		getTrips(1, 'cancel', true);
		getTripCount('cancel')
	},[])



	return (
		<div className="table-wrapper">
			<PageTitleBar title={"Trips"} match={match} />
			<WalletTable status={'cancel'} />
		</div>
	);

}

function mapDispatchToProps(dispatch) {
	return {
		getTrips: (pageNo, status, spinner) => dispatch(getTrips(pageNo, status, spinner)),
		getTripCount: (status) => dispatch(getTripCount(status)),
	};
}


const mapStateToProps = state => ({
	trips: state.trips.trips,
	tripCount: state.trips.tripCount,
	isLoading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (WalletCancelled);