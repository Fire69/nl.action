'use strict';
/* eslint-disable */
const config = {
	class: 'other',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				title: 'deviceClasses.generic_remote.views.generic_imitate.title',
				body: 'deviceClasses.generic_remote.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/promax/assets/remote/remote_pair.svg',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: false
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_imitate'
		}, {
			template: '../lib/pair/test_remote.html',
			options: {
				svg: '../../433_generator/promax/assets/remote/remote.svg',
				prepend: [],
				append: [],
				title: 'views.generic_test_remote.title',
				body: 'views.generic_test_remote.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: true
			},
			prepend: [],
			append: [],
			id: 'generic_test_remote'
		}, {
			template: '../lib/pair/done.html',
			options: {
				title: 'views.generic_done.title',
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_done'
		}]
	},
	images: {
		small: '../../433_generator/promax/assets/images/small.png',
		large: '../../433_generator/promax/assets/images/large.png'
	},
	id: 'RC50075',
	actions: [{
		id: 'RC50075:send',
		title: 'deviceClasses.remote.triggers.send.title',
		args: [{
			name: 'unit',
			type: 'dropdown',
			values: [{
				id: '00001',
				label: 'deviceClasses.remote.triggers.received.values.button_A'
			}, {
				id: '00100',
				label: 'deviceClasses.remote.triggers.received.values.button_B'
			}, {
				id: '00101',
				label: 'deviceClasses.remote.triggers.received.values.button_C'
			}, {
				id: '10000',
				label: 'deviceClasses.remote.triggers.received.values.button_D'
			}]
		}, {
			name: 'state',
			type: 'dropdown',
			values: [{
				id: '1',
				label: 'generic.on'
			}, {
				id: '0',
				label: 'generic.off'
			}]
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=RC50075'
		}]
	}],
	driver: '../../433_generator/promax/drivers/remote.js',
	signal: {
		sof: [],
		eof: [295],
		words: [
			[295, 885],
			[885, 295]
		],
		interval: 9565,
		repetitions: 20,
		sensitivity: 0.7,
		minimalLength: 24,
		maximalLength: 24
	},
	triggers: [{
		id: 'RC50075:received',
		title: 'deviceClasses.remote.triggers.received.title',
		args: [{
			name: 'unit',
			type: 'dropdown',
			values: [{
				id: '00001',
				label: 'deviceClasses.remote.triggers.received.values.button_1'
			}, {
				id: '00100',
				label: 'deviceClasses.remote.triggers.received.values.button_2'
			}, {
				id: '00101',
				label: 'deviceClasses.remote.triggers.received.values.button_3'
			}, {
				id: '10000',
				label: 'deviceClasses.remote.triggers.received.values.button_4'
			}, {
				id: 'g',
				label: 'deviceClasses.remote.triggers.received.values.button_G'
			}]
		}, {
			name: 'state',
			type: 'dropdown',
			values: [{
				id: '1',
				label: 'generic.on'
			}, {
				id: '0',
				label: 'generic.off'
			}]
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=RC50075'
		}]
	}],
	name: 'devices.promax.RC50075.name',
	icon: '../../433_generator/promax/assets/remote/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
