import { getStrategiesDB } from '../helper';
import { AlertObject } from '../types';

export const checkAfterPosition = async (
  alertMessage: AlertObject
): Promise<number | null> => {
  const [db, rootData] = getStrategiesDB();

  const storedPositionSize = rootData[alertMessage.strategy].position;

  // Calculate the absolute value of the position size
  const absPositionSize = Math.abs(storedPositionSize);

  return absPositionSize;
};




// export const checkAfterPosition = async (alertMessage: AlertObject) => {
// 	const [db, rootData] = getStrategiesDB();

// 	const storedPositionSize = rootData[alertMessage.strategy].position;
// 	// console.log('storedPositionSize', storedPositionSize);
// 	let storedPosition;
// 	if (storedPositionSize > 0) {
// 		storedPosition = 'long';
// 	} else if (storedPositionSize < 0) {
// 		storedPosition = 'short';
// 	} else {
// 		storedPosition = 'flat';
// 	}

// 	if (storedPosition != alertMessage.position) {
// 		console.error('dYdX position does not match to Tradingview Position.');
// 	}
// };
