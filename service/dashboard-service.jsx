import axiosInstance from "@/lib/axios";

export const getFundVolume = async () => {
  try {
    const response = await axiosInstance.get("/api/statistic/fundvolume");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching fund volume: ${error.response ? error.response.status : error.message}`);
  }
};

export const getCompanyVolume = async () => {
  try {
    const response = await axiosInstance.get("/api/statistic/companyvolume");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching company volume: ${error.response ? error.response.status : error.message}`);
  }
};

