// Simulated delay function (defaults to 1.5 seconds)
export const mockApiCall = (data, delay = 1500, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Simulated backend error'));
      } else {
        resolve(data);
      }
    }, delay);
  });
};