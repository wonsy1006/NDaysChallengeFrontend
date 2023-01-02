// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   stamps: [],
//   message: '',
//   errorMessage: '',
//   isLoading: true,
// };

// const stampSlice = createSlice({
//   name: 'stamp',
//   initialState,
//   reducers: {
//     createStamps: (state, action) => {
//       const numberOfStamp = parseInt(action.payload.totalDays);
//       const status = action.payload.status;
//       const leftPad = num => {
//         return num.toString().padStart(2, '0');
//       };

//       state.stamps = [...Array(numberOfStamp)].map((n, index) => {
//         const day = [...Array(numberOfStamp)].map((v, i) =>
//           i < 10 ? leftPad(i + 1) : i + 1,
//         );
//         return (
//           <Stamp
//             status={status}
//             day={day[index]}
//             key={index}
//             changeStatus={changeStatus}
//             onClick={() => dispatch(openModal())}
//           />
//         );
//       });

//       return stamps;
//     },
//     changeStatusToPass: state => {
//       state.status = 'pass';
//     },
//     changeStatusToFail: state => {
//       state.status = 'fail';
//     },
//   },
// });

// export default stampSlice.reducer;
