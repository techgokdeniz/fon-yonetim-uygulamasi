export const getFundVolume = async () => {
  try {
    let response = await fetch("/api/statistic/fundvolume");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export const getCompanyVolume = async () => {
  try {
    let response = await fetch("/api/statistic/companyvolume");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
