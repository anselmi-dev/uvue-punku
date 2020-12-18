// import Vue from 'vue';
// import VCalendar from 'v-calendar'
// import AuthRouter from '@/helpers/auth-router'
// // import VueProgressBar from 'vue-progressbar';
// import Vue from 'vue';
// if (process.client) {
//   Vue.user(VCalendar)
// }

// export default {
//   beforeMount() {
//   }
// }
// }
      // import('v-calendar').then(VCalendar => {
        // Vue.component('v-calendar', VCalendar)
        // console.log(VCalendar)
        // Vue.use(module);
        // Vue.component('v-calendar', VCalendar)
      // })
// export default {
//   beforeMount() {
//     if (process.client) {
//       // Vue.user(VCalendar)
//       // const VCalendar = require('v-calendar')
//       // const VCalendar = require('v-calendar')
//     // import('some/lib/that/require/window').then(module => {
//       // ...
//     // });
//       import('v-calendar').then(VCalendar => {
//         console.log(VCalendar)
//         // Vue.use(module);
//         Vue.component('v-calendar', VCalendar)
//       })
//     }
//   }
// }


import Vue from 'vue'
import Vcalendar from 'v-calendar'
Vue.use(Vcalendar, {             // second is optional
  datePickerTintColor: '#F00',
  datePickerShowDayPopover: false
})
