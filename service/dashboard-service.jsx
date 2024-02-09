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

export const getTotalFunds = async () => {
  try {
    const response = await axiosInstance.get("/api/dashboard/");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching company volume: ${error.response ? error.response.status : error.message}`);
  }
};

export const getGroupFunds = async () => {
  try {
    const response = await axiosInstance.get("/api/dashboard/statistic/weekly");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching company volume: ${error.response ? error.response.status : error.message}`);
  }
};

export const getMonthlyFunds = async () => {
  try {
    const response = await axiosInstance.get("/api/dashboard/statistic/monthly");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching company volume: ${error.response ? error.response.status : error.message}`);
  }
};

export const getDailyStats = async () => {
  try {
    const response = await axiosInstance.get("/api/dashboard/statistic/dailystats?type=1");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching fund volume: ${error.response ? error.response.status : error.message}`);
  }
};

export const getPensionDailyStats = async () => {
  try {
    const response = await axiosInstance.get("/api/dashboard/statistic/dailystats?type=2");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching fund volume: ${error.response ? error.response.status : error.message}`);
  }
};

export const fetchFunds = async (page, search) => {
  try {
    const query = new URLSearchParams({ start: page * 10, limit: 10 });
    if (search) {
      query.append("search", search);
    }
    const response = await axiosInstance.get(`/api/dashboard/getfunds?${query.toString()}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching fund volume: ${error.response ? error.response.status : error.message}`);
  }
};