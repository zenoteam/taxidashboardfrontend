/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from 'Components/RctPageLoader/RctPageLoader';

const AsyncDrivers = Loadable({
	loader: () => import("Routes/drivers/drivers"),
	loading: () => <RctPageLoader />,
});
const AsyncClassTypes = Loadable({
	loader: () => import("Routes/class-types/class-types"),
	loading: () => <RctPageLoader />,
});

const AsyncFees = Loadable({
	loader: () => import("Routes/fees/fees"),
	loading: () => <RctPageLoader />,
});

const AsyncRefunds = Loadable({
	loader: () => import("Routes/refunds/refunds"),
	loading: () => <RctPageLoader />,
});

const AsyncPromoDiscount = Loadable({
	loader: () => import("Routes/promo-discounts/promoDiscount"),
	loading: () => <RctPageLoader />,
});
const AsyncDriverRatings = Loadable({
	loader: () => import("Routes/ratings/driver-ratings"),
	loading: () => <RctPageLoader />,
});
const AsyncUserRatings = Loadable({
	loader: () => import("Routes/ratings/user-ratings"),
	loading: () => <RctPageLoader />,
});
const AsyncTaxiRatings = Loadable({
	loader: () => import("Routes/ratings/taxi-ratings"),
	loading: () => <RctPageLoader />,
});
const AsyncRefundsPending = Loadable({
	loader: () => import("Routes/refunds/pendingRefunds"),
	loading: () => <RctPageLoader />,
});

const AsyncRefundsDetails = Loadable({
	loader: () => import("Routes/refunds/refundDetails"),
	loading: () => <RctPageLoader />,
});
const AsyncRefundsCompleted = Loadable({
	loader: () => import("Routes/refunds/completedRefunds"),
	loading: () => <RctPageLoader />,
});

const AsyncCancellations = Loadable({
	loader: () => import("Routes/cancellations/cancellations"),
	loading: () => <RctPageLoader />,
});

const AsyncSchedule = Loadable({
	loader: () => import("Routes/schedule/schedule"),
	loading: () => <RctPageLoader />,
});

const AsyncScheduleDetails = Loadable({
	loader: () => import("Routes/schedule/scheduleDetails"),
	loading: () => <RctPageLoader />,
});

const AsyncPayments = Loadable({
	loader: () => import("Routes/payments/payments"),
	loading: () => <RctPageLoader />,
});

const AsyncPaymentsSuccessful = Loadable({
	loader: () => import("Routes/payments/successfulPayments"),
	loading: () => <RctPageLoader />,
});
const AsyncPaymentsDetails = Loadable({
	loader: () => import("Routes/payments/paymentDetails"),
	loading: () => <RctPageLoader />,
});

const AsyncPaymentsUnsuccessful = Loadable({
	loader: () => import("Routes/payments/unsuccessfulPayments"),
	loading: () => <RctPageLoader />,
});

const AsyncBookingTypes = Loadable({
	loader: () => import("Routes/booking-types/booking-types"),
	loading: () => <RctPageLoader />,
});

const AsyncInactiveDrivers = Loadable({
	loader: () => import("Routes/drivers/inactiveDrivers"),
	loading: () => <RctPageLoader />,
});

const AsyncPendingDrivers = Loadable({
	loader: () => import("Routes/drivers/pendingDrivers"),
	loading: () => <RctPageLoader />,
});

const AsyncVerifiedDrivers = Loadable({
	loader: () => import("Routes/drivers/verifiedDrivers"),
	loading: () => <RctPageLoader />,
});

const AsyncActiveDrivers = Loadable({
	loader: () => import("Routes/drivers/activeDrivers"),
	loading: () => <RctPageLoader />,
});

const AsyncDriver = Loadable({
	loader: () => import("Routes/drivers/driver"),
	loading: () => <RctPageLoader />,
});

const AsyncVehicles = Loadable({
	loader: () => import("Routes/vehicles/vehicles"),
	loading: () => <RctPageLoader />,
});
const AsyncActiveVehicles = Loadable({
	loader: () => import("Routes/vehicles/activeVehicles"),
	loading: () => <RctPageLoader />,
});
const AsyncInactiveVehicles = Loadable({
	loader: () => import("Routes/vehicles/inactiveVehicles"),
	loading: () => <RctPageLoader />,
});

const AsyncAreas = Loadable({
	loader: () => import("Routes/area/areas"),
	loading: () => <RctPageLoader />,
});

const AsyncPassengers = Loadable({
	loader: () => import("Routes/passengers/passengers"),
	loading: () => <RctPageLoader />,
});

const AsyncPassengersActive = Loadable({
	loader: () => import("Routes/passengers/activePassengers"),
	loading: () => <RctPageLoader />,
});

const AsyncPassengersInactive = Loadable({
	loader: () => import("Routes/passengers/inactivePassengers"),
	loading: () => <RctPageLoader />,
});

const AsyncPassenger = Loadable({
	loader: () => import("Routes/passengers/passenger"),
	loading: () => <RctPageLoader />,
});

const AsyncEmergency= Loadable({
	loader: () => import("Routes/emergency/emergency"),
	loading: () => <RctPageLoader />,
});

const AsyncEmergencyDetails= Loadable({
	loader: () => import("Routes/emergency/emergencyDetails"),
	loading: () => <RctPageLoader />,
});

const AsyncSupport = Loadable({
	loader: () => import("Routes/support/support"),
	loading: () => <RctPageLoader />,
});


const AsyncSupportDetails = Loadable({
	loader: () => import("Routes/support/supportDetails"),
	loading: () => <RctPageLoader />,
});

const AsyncSupportSetup = Loadable({
	loader: () => import("Routes/support/supportSetup"),
	loading: () => <RctPageLoader />,
});

const AsyncSupportNew = Loadable({
	loader: () => import("Routes/support/newSupport"),
	loading: () => <RctPageLoader />,
});
const AsyncSupportOpened = Loadable({
	loader: () => import("Routes/support/openedSupport"),
	loading: () => <RctPageLoader />,
});
const AsyncSupportClosed = Loadable({
	loader: () => import("Routes/support/closedSupport"),
	loading: () => <RctPageLoader />,
});
const AsyncSupportUnresolved = Loadable({
	loader: () => import("Routes/support/unresolvedSupport"),
	loading: () => <RctPageLoader />,
});

const AsyncSupportType = Loadable({
	loader: () => import("Routes/support/supportTypes"),
	loading: () => <RctPageLoader />,
});

const AsyncSupportInProgress = Loadable({
	loader: () => import("Routes/support/inProgressSupport"),
	loading: () => <RctPageLoader />,
});

const AsyncAnalytics = Loadable({
	loader: () => import("Routes/analytics/analytics"),
	loading: () => <RctPageLoader />,
});

// home dashboard
const AsyncHomeDashboardComponent = Loadable({
	loader: () => import("Routes/dashboard/home"),
	loading: () => <RctPageLoader />,
});

const AsyncTrips = Loadable({
	loader: () => import("Routes/trips/trips"),
	loading: () => <RctPageLoader />,
});

const AsyncAdmins = Loadable({
	loader: () => import("Routes/admin/admins"),
	loading: () => <RctPageLoader />,
});

const AsyncUsers = Loadable({
	loader: () => import("Routes/users/users"),
	loading: () => <RctPageLoader />,
});



// report


// google maps
const AsyncGooleMapsComponent = Loadable({
	loader: () => import("Routes/maps/google-map"),
	loading: () => <RctPageLoader />,
});

// google maps
const AsyncLeafletMapComponent = Loadable({
	loader: () => import("Routes/maps/leaflet-map"),
	loading: () => <RctPageLoader />,
});



// Simple Line Icons

/*---------------- Session ------------------*/

// Session Login
const AsyncSessionLoginComponent = Loadable({
	loader: () => import("Routes/session/login"),
	loading: () => <RctPageLoader />,
});

// Session Register
const AsyncSessionRegisterComponent = Loadable({
	loader: () => import("Routes/session/register"),
	loading: () => <RctPageLoader />,
});

// Session Lock Screen
const AsyncSessionLockScreenComponent = Loadable({
	loader: () => import("Routes/session/lock-screen"),
	loading: () => <RctPageLoader />,
});

// Session Forgot Password
const AsyncSessionForgotPasswordComponent = Loadable({
	loader: () => import("Routes/session/forgot-password"),
	loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage404Component = Loadable({
	loader: () => import("Routes/session/404"),
	loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage500Component = Loadable({
	loader: () => import("Routes/session/500"),
	loading: () => <RctPageLoader />,
});

// terms and condition



export {
	AsyncPromoDiscount,
	AsyncRefunds,
	AsyncRefundsPending,
	AsyncRefundsCompleted,
	AsyncPaymentsSuccessful,
	AsyncPaymentsUnsuccessful,
	AsyncPayments,
	AsyncCancellations,
	AsyncAdmins,
	AsyncBookingTypes,
	AsyncFees,
	AsyncClassTypes,
	AsyncActiveVehicles,
	AsyncInactiveVehicles,
	AsyncVehicles,
	AsyncVerifiedDrivers,
	AsyncPendingDrivers,
	AsyncInactiveDrivers,
	AsyncActiveDrivers,
	AsyncTrips,
	AsyncPassengers,
	AsyncDrivers,
	AsyncDriver,
	AsyncGooleMapsComponent,
	AsyncLeafletMapComponent,
	AsyncSessionLoginComponent,
	AsyncSessionRegisterComponent,
	AsyncSessionLockScreenComponent,
	AsyncSessionForgotPasswordComponent,
	AsyncSessionPage404Component,
	AsyncSessionPage500Component,
	AsyncHomeDashboardComponent,
	AsyncPassenger,
	AsyncPassengersActive,
	AsyncPassengersInactive,
	AsyncDriverRatings,
	AsyncUserRatings,
	AsyncTaxiRatings,
	AsyncSupport,
	AsyncAnalytics,
	AsyncEmergency,
	AsyncEmergencyDetails,
	AsyncUsers,
	AsyncSupportDetails,
	AsyncSupportSetup,
	AsyncSupportNew,
	AsyncSupportOpened,
	AsyncSupportClosed,
	AsyncSupportUnresolved,
	AsyncSupportInProgress,
	AsyncAreas,
	AsyncSupportType,
	AsyncRefundsDetails,
	AsyncPaymentsDetails,
	AsyncSchedule,
	AsyncScheduleDetails
};
